import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { galleryImages } from "@/lib/data";

// Spans do bento grid — pensados para 6 imagens num grid de 4 colunas a
// partir do breakpoint sm (grid-flow-dense preenche os espaços restantes).
// Classes completas e literais (Tailwind não resolve prefixos concatenados
// em runtime a partir de valores dinâmicos).
const BENTO_SPANS = [
  "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2",
  "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1",
  "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
  "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1",
  "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1",
  "col-span-2 row-span-1 sm:col-span-2 sm:row-span-1",
];

export function GalleryPreview() {
  const images = galleryImages.slice(0, 6);

  return (
    <section className="border-t border-line bg-ink py-24 sm:py-32">
      <div className="container-quartel">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Instalações"
            title="Um espaço a ser preparado para treinar a sério."
            description="Tatami, zona de sparring e zona de treino funcional — tudo a ser pensado para o teu treino diário, a partir da abertura."
          />
          <ButtonLink href="/instalacoes" variant="outline" className="shrink-0">
            Ver galeria completa
            <ArrowRight size={16} aria-hidden />
          </ButtonLink>
        </div>

        <div className="mt-14 grid grid-flow-dense grid-cols-2 auto-rows-[140px] gap-4 sm:grid-cols-4 sm:auto-rows-[160px]">
          {images.map((image, index) => (
            <Reveal key={image.alt} delay={index * 0.05} className={BENTO_SPANS[index]}>
              <div className="group relative h-full min-h-32 overflow-hidden rounded-sm border border-line transition-[border-color,box-shadow] duration-300 hover:border-gold/50 hover:shadow-[0_20px_50px_-16px_rgba(204,255,0,0.3)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="glass pointer-events-none absolute bottom-2 left-2 rounded-sm px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {image.category}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
