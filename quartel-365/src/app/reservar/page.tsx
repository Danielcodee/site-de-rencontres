import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { BookingWidget } from "@/components/booking/BookingWidget";

export const metadata: Metadata = {
  title: "Reservar Aula",
  description:
    "Reserva a tua aula de Muay Thai ou Treino Funcional no Quartel 365. Vagas limitadas a 15 alunos por turma, disponibilidade em tempo real.",
  alternates: { canonical: "/reservar" },
};

export default function ReservarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reservar aula"
        title="Escolhe a tua turma. As vagas são limitadas."
        description="Cada turma tem no máximo 15 alunos. Escolhe o dia e a hora, confirma os teus dados e o lugar fica logo garantido."
      />

      <section className="bg-ink py-24 sm:py-32">
        <div className="container-quartel">
          <BookingWidget />
        </div>
      </section>
    </>
  );
}
