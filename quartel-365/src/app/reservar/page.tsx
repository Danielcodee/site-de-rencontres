import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { BookingWidget } from "@/components/booking/BookingWidget";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reservar Aula",
  description:
    "Garante já o teu lugar numa turma de Muay Thai ou Treino Funcional no Quartel 365, antes da abertura em outubro de 2026. Vagas limitadas por turma.",
  alternates: { canonical: "/reservar" },
};

export default function ReservarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reservar aula"
        title="Escolhe a tua turma. As vagas são limitadas."
        description={`Até 15 alunos por turma no Muay Thai, até 5 no Treino Funcional. Escolhe o dia e a hora, confirma os teus dados e garante já o teu lugar antes da abertura, em ${siteConfig.openingDisplay}.`}
      />

      <section className="bg-ink py-24 sm:py-32">
        <div className="container-quartel">
          <BookingWidget />
        </div>
      </section>
    </>
  );
}
