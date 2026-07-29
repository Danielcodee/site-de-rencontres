import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { TrainerCard } from "@/components/trainers/TrainerCard";
import { trainers } from "@/lib/data";

export function TrainersPreview() {
  return (
    <section id="treinadores" className="scroll-mt-20 border-t border-line bg-ink py-24 sm:py-32">
      <div className="container-quartel">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Treinadores"
            title="Quem lidera cada aula, todos os dias."
            description="Daniel Coelho e Maria Miranda fundaram o Quartel 365 e continuam a dar todas as aulas — sem delegar o acompanhamento a mais ninguém."
          />
          <ButtonLink href="/treinadores" variant="outline" className="shrink-0">
            Conhecer os treinadores
            <ArrowRight size={16} aria-hidden />
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {trainers.map((trainer, index) => (
            <Reveal key={trainer.slug} delay={index * 0.08} className="h-full">
              <TrainerCard trainer={trainer} priority={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
