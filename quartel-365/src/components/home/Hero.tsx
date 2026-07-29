import { ArrowRight, CalendarCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { TiltImage } from "@/components/ui/TiltImage";
import { siteConfig, stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-ink">
      <TiltImage
        src="/images/hero-fighter.jpg"
        alt="Lutador de Muay Thai em posição de combate, ambiente do Quartel 365"
        className="absolute inset-0"
        priority
        tiltStrength={2}
        parallaxRange={50}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </TiltImage>

      <div className="container-quartel relative z-10 pb-16 pt-40 sm:pb-24">
        <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.35em] text-gold animate-fade-up">
          Abre em {siteConfig.openingDisplay} · Felgueiras
        </p>
        <h1 className="max-w-4xl font-heading text-5xl leading-[1.05] tracking-tight text-bone animate-fade-up sm:text-6xl lg:text-7xl">
          Disciplina <span className="text-gold">todos os dias</span> do ano.
        </h1>
        <p
          className="mt-6 max-w-xl text-lg leading-relaxed text-mist animate-fade-up sm:text-xl"
          style={{ animationDelay: "0.1s" }}
        >
          Técnica tailandesa autêntica e treino funcional a sério, com o
          treinador Daniel Coelho. O Quartel 365 está a nascer em
          Felgueiras — garante já o teu lugar antes da abertura.
        </p>

        <div
          className="mt-10 flex flex-col gap-4 animate-fade-up sm:flex-row sm:items-center"
          style={{ animationDelay: "0.2s" }}
        >
          <ButtonLink href="/reservar">
            <CalendarCheck size={16} aria-hidden />
            Garantir o meu lugar
          </ButtonLink>
          <ButtonLink href="/modalidades" variant="outline">
            Ver modalidades
            <ArrowRight size={16} aria-hidden />
          </ButtonLink>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-3xl text-bone sm:text-4xl">
                {stat.value}
                <span className="text-oxblood">{stat.suffix}</span>
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
