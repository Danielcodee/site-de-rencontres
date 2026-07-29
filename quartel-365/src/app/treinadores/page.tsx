import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { TrainerCard } from "@/components/trainers/TrainerCard";
import { CofounderNote } from "@/components/trainers/CofounderNote";
import { cofounders, trainers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Equipa",
  description:
    "Conhece o Daniel Coelho, treinador certificado e fundador do Quartel 365, e a Maria Miranda, cofundadora responsável pela gestão da academia.",
  alternates: { canonical: "/treinadores" },
};

export default function TreinadoresPage() {
  return (
    <>
      <PageHeader
        eyebrow="A equipa"
        title="Quem lidera cada aula no Quartel 365."
        description="O Daniel Coelho vai ser o único treinador da academia — vai dar pessoalmente todas as aulas de Muay Thai e Treino Funcional a partir da abertura. A Maria Miranda, cofundadora, não vai dar aulas: garante que tudo o resto funciona."
      />

      <section className="bg-ink py-24 sm:py-32">
        <div className="container-quartel grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {trainers.map((trainer) => (
            <Reveal key={trainer.slug} className="h-full">
              <TrainerCard trainer={trainer} priority />
            </Reveal>
          ))}
          {cofounders.map((cofounder, index) => (
            <Reveal key={cofounder.slug} delay={0.06 + index * 0.06} className="h-full">
              <CofounderNote cofounder={cofounder} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
