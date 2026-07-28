"use client";

import dynamic from "next/dynamic";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

const FighterScene = dynamic(() => import("./FighterScene").then((mod) => mod.FighterScene), {
  ssr: false,
});

/**
 * Só monta o canvas WebGL em ecrãs grandes — em mobile mantemos apenas a
 * imagem de fundo do hero para poupar bateria/desempenho.
 */
export function FighterCanvasLazy({ className }: { className?: string }) {
  const shouldRender = useMediaQuery("(min-width: 1280px)");

  if (!shouldRender) return null;

  return (
    <div className={cn("pointer-events-none", className)} aria-hidden>
      <FighterScene />
    </div>
  );
}
