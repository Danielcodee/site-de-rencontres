import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data";

export function AboutPreview() {
  return (
    <section id="sobre" className="scroll-mt-20 border-t border-line bg-ink py-24 sm:py-32">
      <div className="container-quartel grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <Reveal>
          <SectionHeading eyebrow="Sobre nós" title="Uma academia construída sobre disciplina." />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            O Quartel 365 está a nascer em Felgueiras, fundado por Daniel Coelho e Maria Miranda
            com um objetivo claro: trazer técnica tailandesa autêntica e treino funcional a sério
            a quem exige mais do que um ginásio genérico. Abrimos em {siteConfig.openingDisplay} —
            o Daniel vai dar todas as aulas pessoalmente, enquanto a Maria trata de tudo o resto
            funcionar como deve ser.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ButtonLink href="/sobre" variant="outline" className="shrink-0">
            Conhecer a nossa história
            <ArrowRight size={16} aria-hidden />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
