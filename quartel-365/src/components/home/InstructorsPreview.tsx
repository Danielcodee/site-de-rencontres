import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { instructors } from "@/lib/data";

export function InstructorsPreview() {
  return (
    <section className="border-t border-line bg-ink py-24 sm:py-32">
      <div className="container-quartel">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="A equipa técnica"
            title="Aprende com quem já competiu."
            description="Instrutores certificados, com percurso competitivo e anos de experiência a formar novos praticantes."
          />
          <ButtonLink href="/instrutores" variant="outline" className="shrink-0">
            Conhecer a equipa
            <ArrowRight size={16} aria-hidden />
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor, index) => (
            <Reveal key={instructor.slug} delay={index * 0.08}>
              <div className="group overflow-hidden rounded-sm border border-line bg-charcoal">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={instructor.image}
                    alt={`${instructor.name} — ${instructor.role}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-bone">
                    {instructor.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-flame">{instructor.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
