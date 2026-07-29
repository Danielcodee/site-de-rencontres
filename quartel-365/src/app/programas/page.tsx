import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";
import { plans, programs, weeklySchedule } from "@/lib/data";

export const metadata: Metadata = {
  title: "Programas e Planos",
  description:
    "Conhece os programas do Quartel 365 — Muay Thai e Treino Funcional — planos, preços e horário semanal.",
  alternates: { canonical: "/programas" },
};

export default function ProgramasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programas"
        title="Duas modalidades. Um único instrutor."
        description="Muay Thai e Treino Funcional — escolhe uma ou combina as duas, sempre com o mesmo acompanhamento próximo."
        illustration={{
          src: "/images/hero-fighter.jpg",
          alt: "Lutador de Muay Thai em posição de combate",
        }}
      />

      <section className="border-b border-line bg-ink py-24 sm:py-32">
        <div className="container-quartel space-y-20">
          {programs.map((program, index) => (
            <Reveal key={program.slug}>
              <div
                id={program.slug}
                className={cn(
                  "grid scroll-mt-28 gap-10 lg:grid-cols-2 lg:items-center",
                  index % 2 === 1 && "lg:[&>*:first-child]:order-2",
                )}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={cn(
                      "object-cover",
                      index % 2 === 0 ? "object-[30%_center]" : "object-[70%_center]",
                    )}
                  />
                </div>
                <div>
                  <span className="inline-block rounded-sm bg-flame px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-bone">
                    {program.level}
                  </span>
                  <h2 className="mt-4 font-heading text-3xl uppercase tracking-tight text-bone sm:text-4xl">
                    {program.name}
                  </h2>
                  <p className="mt-1 text-sm uppercase tracking-wide text-flame">{program.audience}</p>
                  <p className="mt-4 text-base leading-relaxed text-mist">{program.description}</p>
                  <ul className="mt-6 space-y-2">
                    {program.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-mist">
                        <Check className="mt-0.5 shrink-0 text-flame" size={16} aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-line bg-charcoal py-24 sm:py-32">
        <div className="container-quartel">
          <SectionHeading
            align="center"
            eyebrow="Planos"
            title="Preçário simples, sem letra pequena."
            description="Preços de referência — confirma sempre condições e promoções em vigor com o Quartel 365."
            className="mx-auto"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <TiltCard key={plan.name} strength={6}>
                <div
                  className={cn(
                    "flex h-full flex-col rounded-sm border p-7",
                    plan.highlighted ? "border-flame bg-ink" : "border-line bg-ink",
                  )}
                >
                  {plan.highlighted ? (
                    <span className="mb-4 inline-block w-fit rounded-sm bg-flame px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-bone">
                      Mais popular
                    </span>
                  ) : null}
                  <h3 className="font-heading text-lg uppercase tracking-wide text-bone">
                    {plan.name}
                  </h3>
                  <p className="mt-3 flex items-baseline gap-1">
                    <span className="font-heading text-3xl text-bone">{plan.price}</span>
                    <span className="text-sm text-mist">{plan.period}</span>
                  </p>
                  <p className="mt-3 text-sm text-mist">{plan.description}</p>
                  <ul className="mt-6 flex-1 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-mist">
                        <Check className="mt-0.5 shrink-0 text-flame" size={15} aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href="/contactos"
                    variant={plan.highlighted ? "primary" : "outline"}
                    className="mt-7 w-full"
                  >
                    {plan.cta}
                  </ButtonLink>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 sm:py-32">
        <div className="container-quartel">
          <SectionHeading
            eyebrow="Horário"
            title="Grelha semanal de aulas."
            description="Horário de referência — sujeito a ajustes pontuais. Confirma sempre a app/quadro da academia para atualizações."
          />

          <div className="mt-12 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <div className="grid min-w-[820px] grid-cols-6 gap-3 sm:min-w-0">
              {weeklySchedule.map((day) => (
                <div key={day.day} className="rounded-sm border border-line bg-charcoal p-4">
                  <h3 className="font-heading text-sm uppercase tracking-wider text-flame">
                    {day.day}
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {day.classes.map((klass) => (
                      <li key={`${day.day}-${klass.time}`} className="text-xs leading-snug">
                        <p className="font-heading font-semibold text-bone">{klass.time}</p>
                        <p className="text-mist">{klass.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
