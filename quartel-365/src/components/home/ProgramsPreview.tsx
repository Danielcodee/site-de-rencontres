import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";
import { programs } from "@/lib/data";

export function ProgramsPreview() {
  return (
    <section className="border-t border-line bg-charcoal py-24 sm:py-32">
      <div className="container-quartel">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Programas"
            title="Duas modalidades, um único objetivo."
            description="Muay Thai e Treino Funcional — escolhe uma ou combina as duas, sempre com o mesmo instrutor a acompanhar-te."
          />
          <ButtonLink href="/programas" variant="outline" className="shrink-0">
            Ver todos os programas
            <ArrowRight size={16} aria-hidden />
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {programs.map((program, index) => (
            <Reveal key={program.slug} delay={index * 0.08} className="h-full">
              <TiltCard>
                <Link
                  href={`/programas#${program.slug}`}
                  className="group block h-full overflow-hidden rounded-sm border border-line bg-ink"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                        index % 2 === 0 ? "object-[30%_center]" : "object-[70%_center]"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-sm bg-flame px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-bone">
                      {program.level}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl uppercase tracking-wide text-bone group-hover:text-flame">
                      {program.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{program.description}</p>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
