import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BookingWidget } from "@/components/booking/BookingWidget";

export function BookingSection() {
  return (
    <section id="reservar" className="scroll-mt-20 border-t border-line bg-charcoal py-24 sm:py-32">
      <div className="container-quartel">
        <Reveal>
          <SectionHeading
            eyebrow="Reservar aula"
            title="Escolhe a tua turma. As vagas são limitadas."
            description="Cada turma tem no máximo 15 alunos, com disponibilidade em tempo real. Escolhe o dia e a hora, confirma os teus dados e o lugar fica garantido."
          />
        </Reveal>
        <div className="mt-14">
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}
