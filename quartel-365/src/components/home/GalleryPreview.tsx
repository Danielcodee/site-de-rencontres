import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { galleryImages } from "@/lib/data";

export function GalleryPreview() {
  const images = galleryImages.slice(0, 6);

  return (
    <section className="border-t border-line bg-ink py-24 sm:py-32">
      <div className="container-quartel">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Instalações"
            title="Um espaço a ser preparado para treinar a sério."
            description="Ringue, zona de sacos, sala de força e balneários — tudo a ser pensado para o teu treino diário, a partir da abertura."
          />
          <ButtonLink href="/instalacoes" variant="outline" className="shrink-0">
            Ver galeria completa
            <ArrowRight size={16} aria-hidden />
          </ButtonLink>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((image, index) => (
            <Reveal
              key={image.alt}
              delay={index * 0.05}
              className={index === 0 ? "col-span-2 row-span-2" : ""}
            >
              <div className="relative aspect-square overflow-hidden rounded-sm border border-line">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
