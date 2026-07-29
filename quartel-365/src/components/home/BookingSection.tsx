import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BookingWidget } from "@/components/booking/BookingWidget";
import { siteConfig } from "@/lib/data";

export function BookingSection() {
  return (
    <section id="reservar" className="scroll-mt-20 border-t border-line bg-charcoal py-24 sm:py-32">
      <div className="container-quartel">
        <Reveal>
          <SectionHeading
            eyebrow="Reservar aula"
            title="Escolhe a tua turma. As vagas são limitadas."
            description={`Até 15 alunos por turma no Muay Thai, até 5 no Treino Funcional. Escolhe o dia e a hora e garante já o teu lugar antes da abertura, em ${siteConfig.openingDisplay}.`}
          />
        </Reveal>
        <div className="mt-14">
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}
