import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { TrainerCard } from "@/components/trainers/TrainerCard";
import { trainers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Treinadores",
  description:
    "Conhece o Daniel Coelho e a Maria Miranda, fundadores e treinadores do Quartel 365 — certificados em Muay Thai e treino funcional.",
  alternates: { canonical: "/treinadores" },
};

export default function TreinadoresPage() {
  return (
    <>
      <PageHeader
        eyebrow="Os treinadores"
        title="Quem lidera cada aula no Quartel 365."
        description="Dois fundadores, duas especialidades, o mesmo nível de exigência — Daniel Coelho em Muay Thai e Maria Miranda em Treino Funcional."
      />

      <section className="bg-ink py-24 sm:py-32">
        <div className="container-quartel grid gap-8 lg:grid-cols-2">
          {trainers.map((trainer, index) => (
            <Reveal key={trainer.slug} delay={index * 0.06} className="h-full">
              <TrainerCard trainer={trainer} priority={index === 0} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
