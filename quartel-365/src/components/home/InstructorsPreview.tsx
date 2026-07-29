import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { instructors } from "@/lib/data";

export function InstructorsPreview() {
  const instructor = instructors[0];

  return (
    <section className="border-t border-line bg-ink py-24 sm:py-32">
      <div className="container-quartel grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line">
            <Image
              src={instructor.image}
              alt={`${instructor.name} — ${instructor.role}`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="O instrutor"
            title="Aprende com quem lidera cada aula."
            description="Um único instrutor, presente em todas as aulas de Muay Thai e Treino Funcional — sem delegar o acompanhamento a ninguém."
          />

          <div className="mt-8">
            <h3 className="font-heading text-2xl uppercase tracking-wide text-bone">
              {instructor.name}
            </h3>
            <p className="mt-1 font-heading text-sm uppercase tracking-widest text-flame">
              {instructor.role}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist">{instructor.bio}</p>

            <ul className="mt-5 space-y-2">
              {instructor.credentials.map((credential) => (
                <li key={credential} className="flex items-start gap-3 text-sm text-mist">
                  <BadgeCheck className="mt-0.5 shrink-0 text-flame" size={17} aria-hidden />
                  {credential}
                </li>
              ))}
            </ul>
          </div>

          <ButtonLink href="/instrutores" variant="outline" className="mt-8">
            Conhecer o instrutor
            <ArrowRight size={16} aria-hidden />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
