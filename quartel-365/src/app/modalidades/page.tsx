import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { TiltImage } from "@/components/ui/TiltImage";
import { cn } from "@/lib/utils";
import { plans, modalities } from "@/lib/data";
import { getClassesWithAvailability } from "@/lib/db";

// A grelha de horários reflete reservas em tempo real, por isso a página
// nunca deve ser servida a partir de cache estático.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Modalidades e Planos",
  description:
    "Conhece as modalidades do Quartel 365 — Muay Thai com o Daniel Coelho e Treino Funcional com a Maria Miranda — planos, preços e horário semanal.",
  alternates: { canonical: "/modalidades" },
};

const dayOrder = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

export default function ModalidadesPage() {
  const classes = getClassesWithAvailability();
  const days = dayOrder
    .map((day) => ({ day, classes: classes.filter((c) => c.day === day) }))
    .filter((d) => d.classes.length > 0);

  return (
    <>
      <PageHeader
        eyebrow="Modalidades"
        title="Duas modalidades. Dois treinadores."
        description="Muay Thai e Treino Funcional — escolhe uma ou combina as duas, cada uma com o seu treinador dedicado."
        illustration={{
          src: "/images/hero-fighter.jpg",
          alt: "Lutador de Muay Thai em posição de combate",
        }}
      />

      <section className="border-b border-line bg-ink py-24 sm:py-32">
        <div className="container-quartel space-y-20">
          {modalities.map((modality, index) => (
            <Reveal key={modality.slug}>
              <div
                id={modality.slug}
                className={cn(
                  "grid scroll-mt-28 gap-10 lg:grid-cols-2 lg:items-center",
                  index % 2 === 1 && "lg:[&>*:first-child]:order-2",
                )}
              >
                <TiltImage
                  src={modality.image}
                  alt={modality.name}
                  className="aspect-[4/3] rounded-sm border border-line"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  imgClassName={index % 2 === 0 ? "object-[30%_center]" : "object-[70%_center]"}
                  tiltStrength={6}
                  parallaxRange={20}
                />
                <div>
                  <span className="inline-block rounded-sm bg-oxblood px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-bone">
                    {modality.level}
                  </span>
                  <h2 className="mt-4 font-heading text-3xl text-bone sm:text-4xl">
                    {modality.name}
                  </h2>
                  <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-widest text-gold">
                    {modality.audience} · com {modality.trainer}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-mist">{modality.description}</p>
                  <ul className="mt-6 space-y-2">
                    {modality.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-mist">
                        <Check className="mt-0.5 shrink-0 text-oxblood" size={16} aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href="/reservar" className="mt-7">
                    Reservar aula de {modality.name}
                  </ButtonLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="planos" className="scroll-mt-20 border-b border-line bg-charcoal py-24 sm:py-32">
        <div className="container-quartel">
          <SectionHeading
            align="center"
            eyebrow="Planos"
            title="Preçário simples, sem letra pequena."
            description="Preços de referência — confirma sempre condições e promoções em vigor com o Quartel 365."
            className="mx-auto"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <TiltCard key={plan.name} strength={6}>
                <div
                  className={cn(
                    "flex h-full flex-col rounded-sm border p-7",
                    plan.highlighted ? "border-gold bg-ink" : "border-line bg-ink",
                  )}
                >
                  {plan.highlighted ? (
                    <span className="mb-4 inline-block w-fit rounded-sm bg-gold px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-ink">
                      Mais popular
                    </span>
                  ) : null}
                  <h3 className="font-heading text-lg text-bone">{plan.name}</h3>
                  <p className="mt-3 flex items-baseline gap-1">
                    <span className="font-heading text-3xl text-bone">{plan.price}</span>
                    <span className="text-sm text-mist">{plan.period}</span>
                  </p>
                  <p className="mt-3 text-sm text-mist">{plan.description}</p>
                  <ul className="mt-6 flex-1 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-mist">
                        <Check className="mt-0.5 shrink-0 text-oxblood" size={15} aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href="/reservar"
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
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Horário"
              title="Grelha semanal de aulas."
              description="Clica numa turma para veres as vagas disponíveis e reservares o teu lugar."
            />
            <ButtonLink href="/reservar" variant="outline" className="shrink-0">
              Reservar aula
            </ButtonLink>
          </div>

          <div className="mt-12 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <div className="grid min-w-[820px] grid-cols-6 gap-3 sm:min-w-0">
              {days.map(({ day, classes: dayClasses }) => (
                <div key={day} className="rounded-sm border border-line bg-charcoal p-4">
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-gold">
                    {day}
                  </h3>
                  <ul className="mt-3 space-y-3">
                    {dayClasses.map((klass) => (
                      <li key={klass.id}>
                        <Link
                          href={`/reservar#${klass.id}`}
                          className="block text-xs leading-snug transition-colors hover:text-oxblood"
                        >
                          <p className="font-heading text-base text-bone">{klass.time}</p>
                          <p className="text-mist">{klass.name}</p>
                          <p className={cn("mt-0.5", klass.full ? "text-oxblood" : "text-mist")}>
                            {klass.full ? "Completa" : `${klass.booked}/${klass.capacity} vagas`}
                          </p>
                        </Link>
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
