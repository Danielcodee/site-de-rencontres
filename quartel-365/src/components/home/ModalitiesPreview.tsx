import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { TiltImage } from "@/components/ui/TiltImage";
import { modalities } from "@/lib/data";

export function ModalitiesPreview() {
  return (
    <section id="modalidades" className="scroll-mt-20 border-t border-line bg-charcoal py-24 sm:py-32">
      <div className="container-quartel">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Modalidades"
            title="Duas modalidades, um único objetivo."
            description="Muay Thai com o Daniel Coelho e Treino Funcional com a Maria Miranda — escolhe uma ou combina as duas."
          />
          <ButtonLink href="/modalidades" variant="outline" className="shrink-0">
            Ver modalidades e planos
            <ArrowRight size={16} aria-hidden />
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {modalities.map((modality, index) => (
            <Reveal key={modality.slug} delay={index * 0.08} className="h-full">
              <Link
                href={`/modalidades#${modality.slug}`}
                className="group block h-full overflow-hidden rounded-sm border border-line bg-ink"
              >
                <TiltImage
                  src={modality.image}
                  alt={modality.name}
                  className="aspect-[4/5]"
                  sizes="(min-width: 640px) 50vw, 100vw"
                  imgClassName={index % 2 === 0 ? "object-[30%_center]" : "object-[70%_center]"}
                  tiltStrength={4}
                  parallaxRange={18}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-sm bg-oxblood px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-bone">
                    {modality.level}
                  </span>
                </TiltImage>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-bone group-hover:text-gold">
                    {modality.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{modality.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
