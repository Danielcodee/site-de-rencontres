import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { TrainerCard } from "@/components/trainers/TrainerCard";
import { CofounderNote } from "@/components/trainers/CofounderNote";
import { cofounders, trainers } from "@/lib/data";

export function TrainersPreview() {
  return (
    <section id="treinadores" className="scroll-mt-20 border-t border-line bg-ink py-24 sm:py-32">
      <div className="container-quartel">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Equipa"
            title="Quem lidera cada aula, todos os dias."
            description="O Daniel Coelho está a fundar o Quartel 365 e vai dar pessoalmente todas as aulas de Muay Thai e Treino Funcional — sem delegar o acompanhamento a mais ninguém."
          />
          <ButtonLink href="/treinadores" variant="outline" className="shrink-0">
            Conhecer a equipa
            <ArrowRight size={16} aria-hidden />
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {trainers.map((trainer) => (
            <Reveal key={trainer.slug} className="h-full">
              <TrainerCard trainer={trainer} priority />
            </Reveal>
          ))}
          {cofounders.map((cofounder, index) => (
            <Reveal key={cofounder.slug} delay={0.08 + index * 0.08} className="h-full">
              <CofounderNote cofounder={cofounder} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
