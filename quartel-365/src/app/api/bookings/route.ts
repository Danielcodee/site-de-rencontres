import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/lib/data";
import {
  ClassFullError,
  ClassNotFoundError,
  DuplicateBookingError,
  createBooking,
  getClassAvailability,
} from "@/lib/db";

export const dynamic = "force-dynamic";

const bookingSchema = z.object({
  classId: z.string().trim().min(1, "Escolhe uma turma."),
  name: z.string().trim().min(2, "Indica o teu nome completo.").max(120),
  email: z.string().trim().email("Indica um email válido."),
  phone: z
    .string()
    .trim()
    .min(9, "Indica um número de telefone válido.")
    .max(30),
  // Honeypot anti-spam — nunca preenchido por humanos.
  company: z.string().max(0).optional().or(z.literal("")),
});

// PLACEHOLDER — define RESEND_API_KEY e CONTACT_TO_EMAIL nas variáveis de
// ambiente para ativar o envio real de emails de confirmação. Sem
// credenciais, a reserva é sempre guardada na base de dados, só o email
// de confirmação não é enviado.
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos.", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const data = parsed.data;

  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const klass = getClassAvailability(data.classId);
  if (!klass) {
    return NextResponse.json({ error: "Turma não encontrada." }, { status: 404 });
  }

  try {
    createBooking({
      classId: data.classId,
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
  } catch (error) {
    if (error instanceof ClassFullError) {
      return NextResponse.json(
        { error: "Essa turma acabou de ficar completa. Escolhe outra data/hora." },
        { status: 409 },
      );
    }
    if (error instanceof DuplicateBookingError) {
      return NextResponse.json(
        { error: "Já existe uma reserva com este email para esta turma." },
        { status: 409 },
      );
    }
    if (error instanceof ClassNotFoundError) {
      return NextResponse.json({ error: "Turma não encontrada." }, { status: 404 });
    }
    console.error("[reservas] Falha ao criar reserva:", error);
    return NextResponse.json({ error: "Não foi possível concluir a reserva." }, { status: 500 });
  }

  const updatedClass = getClassAvailability(data.classId);

  if (resend) {
    const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;
    try {
      await resend.emails.send({
        from: `${siteConfig.name} <site@${new URL(siteConfig.url).hostname}>`,
        to: data.email,
        bcc: toEmail,
        subject: `Reserva confirmada — ${klass.name} (${klass.day} ${klass.time})`,
        text: [
          `Olá ${data.name},`,
          "",
          `O teu lugar está garantido, antes mesmo de abrirmos portas:`,
          `Turma: ${klass.name}`,
          `Dia: ${klass.day} às ${klass.time}`,
          `Treinador(a): ${klass.trainer}`,
          "",
          `Abrimos em ${siteConfig.openingDisplay}, em Felgueiras.`,
          "O pagamento pode ser feito via MB WAY para o número " +
            `${siteConfig.contact.mbway.number}.`,
          "",
          `Até já,`,
          siteConfig.name,
        ].join("\n"),
      });
    } catch (error) {
      // A reserva já está guardada na base de dados — uma falha no envio do
      // email não deve fazer a reserva falhar aos olhos do utilizador.
      console.error("[reservas] Falha ao enviar email de confirmação via Resend:", error);
    }
  } else {
    console.info("[reservas] Resend não configurado — reserva registada sem email:", data);
  }

  return NextResponse.json({ ok: true, class: updatedClass });
}
