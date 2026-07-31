"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/lib/data";

// Padrão de bento grid repetido a cada 6 imagens (grid-flow-dense preenche
// os espaços restantes). Classes completas e literais — ver nota em
// GalleryPreview.tsx sobre concatenação dinâmica de prefixos Tailwind.
const BENTO_PATTERN = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-2",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-1 sm:row-span-1",
  "sm:col-span-2 sm:row-span-1",
];

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  useEffect(() => {
    if (activeIndex === null) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <>
      <div className="grid grid-flow-dense grid-cols-2 auto-rows-[150px] gap-4 sm:grid-cols-4 sm:auto-rows-[170px]">
        {images.map((image, index) => (
          <button
            key={image.alt}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "group relative overflow-hidden rounded-sm border border-line text-left transition-[border-color,box-shadow] duration-300 hover:border-gold/50 hover:shadow-[0_20px_50px_-16px_rgba(204,255,0,0.3)]",
              BENTO_PATTERN[index % BENTO_PATTERN.length],
            )}
            aria-label={`Ampliar imagem: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="glass pointer-events-none absolute bottom-2 left-2 rounded-sm px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {image.category}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={images[activeIndex].alt}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fechar imagem"
              className="absolute right-5 top-5 text-bone hover:text-oxblood"
            >
              <X size={32} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Imagem anterior"
              className="absolute left-3 text-bone hover:text-oxblood sm:left-6"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative aspect-[4/3] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Imagem seguinte"
              className="absolute right-3 text-bone hover:text-oxblood sm:right-6"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
