import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { FighterCanvasLazy } from "@/components/three/FighterCanvasLazy";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink">
      <Image
        src="/images/hero.svg"
        alt="Ringue de treino do Quartel 365 em Felgueiras"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      <FighterCanvasLazy className="absolute inset-y-0 right-0 hidden w-[40%] xl:block" />

      <div className="container-quartel relative z-10 pb-16 pt-40 sm:pb-24">
        <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.35em] text-flame animate-fade-up">
          Muay Thai · Felgueiras
        </p>
        <h1 className="max-w-4xl font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tight text-bone animate-fade-up sm:text-6xl lg:text-7xl">
          Disciplina todos<br />os dias do ano.
        </h1>
        <p
          className="mt-6 max-w-xl text-lg leading-relaxed text-mist animate-fade-up sm:text-xl"
          style={{ animationDelay: "0.1s" }}
        >
          Treino de Muay Thai a sério, num espaço pensado para quem quer
          evoluir com disciplina — não apenas por fases. Instrutores
          certificados, comunidade exigente, resultados reais.
        </p>

        <div
          className="mt-10 flex flex-col gap-4 animate-fade-up sm:flex-row sm:items-center"
          style={{ animationDelay: "0.2s" }}
        >
          <ButtonLink href="/contactos">
            Marca a tua aula experimental
            <ArrowRight size={16} aria-hidden />
          </ButtonLink>
          <ButtonLink href="/programas" variant="outline">
            <PlayCircle size={16} aria-hidden />
            Ver programas
          </ButtonLink>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-3xl font-bold text-bone sm:text-4xl">
                {stat.value}
                <span className="text-flame">{stat.suffix}</span>
              </dd>
              <p className="mt-1 text-xs uppercase tracking-wider text-mist sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
