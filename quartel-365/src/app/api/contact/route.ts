import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/lib/data";

const contactSchema = z.object({
  type: z.literal("contact").default("contact"),
  name: z.string().trim().min(2, "Indica o teu nome completo.").max(120),
  email: z.string().trim().email("Indica um email válido."),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  program: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "A mensagem deve ter pelo menos 10 caracteres.").max(2000),
  // Honeypot anti-spam: campo escondido que um humano nunca preenche.
  // Sem limite de tamanho aqui de propósito — a validação falharia com um
  // erro explícito, o que denunciaria a técnica a um bot. Quem o preenche
  // recebe sempre uma resposta de sucesso "falsa" mais abaixo.
  company: z.string().optional(),
});

const newsletterSchema = z.object({
  type: z.literal("newsletter"),
  email: z.string().trim().email("Indica um email válido."),
  company: z.string().max(0).optional().or(z.literal("")),
});

const bodySchema = z.discriminatedUnion("type", [contactSchema, newsletterSchema]);

// PLACEHOLDER — define RESEND_API_KEY e CONTACT_TO_EMAIL nas variáveis de
// ambiente para ativar o envio real de emails. Sem credenciais, o pedido é
// validado e registado no servidor, mas não é enviado nenhum email.
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos.", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // Honeypot preenchido => provavelmente spam. Responde com sucesso "falso"
  // para não dar feedback útil a bots, sem enviar nada.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;

  if (!resend) {
    console.info("[contacto] Resend não configurado — a registar pedido apenas:", data);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    if (data.type === "newsletter") {
      await resend.emails.send({
        from: `${siteConfig.name} <site@${new URL(siteConfig.url).hostname}>`,
        to: toEmail,
        subject: `Nova subscrição da newsletter — ${siteConfig.name}`,
        text: `Novo email para a newsletter: ${data.email}`,
      });
    } else {
      await resend.emails.send({
        from: `${siteConfig.name} <site@${new URL(siteConfig.url).hostname}>`,
        to: toEmail,
        replyTo: data.email,
        subject: `Novo contacto pelo site — ${data.name}`,
        text: [
          `Nome: ${data.name}`,
          `Email: ${data.email}`,
          data.phone ? `Telefone: ${data.phone}` : null,
          data.program ? `Programa de interesse: ${data.program}` : null,
          "",
          "Mensagem:",
          data.message,
        ]
          .filter(Boolean)
          .join("\n"),
      });
    }
  } catch (error) {
    console.error("[contacto] Falha ao enviar email via Resend:", error);
    return NextResponse.json(
      { error: "Não foi possível enviar a mensagem. Tenta novamente ou liga-nos diretamente." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
