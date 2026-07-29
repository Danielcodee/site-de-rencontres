"use client";

import Image from "next/image";
import { useRef, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

const TILT_SPRING = { stiffness: 220, damping: 20, mass: 0.6 };

type TiltFrameProps = {
  className?: string;
  /** Conteúdo que recebe o movimento (imagem, placeholder, etc.). */
  children: ReactNode;
  /** Conteúdo estático por cima, sem parallax/tilt (ex: gradientes, selos). */
  overlay?: ReactNode;
  /** Inclinação máxima em graus ao passar o rato por cima. */
  tiltStrength?: number;
  /** Deslocamento vertical máximo (px) do parallax ao fazer scroll. */
  parallaxRange?: number;
};

/**
 * Base reutilizável: aplica parallax subtil ao scroll (o conteúdo move-se
 * ligeiramente mais devagar que a página) e uma inclinação 3D suave que
 * segue o rato ao passar por cima. Usada nas imagens principais das
 * secções (hero, treinadores, modalidades) — e também no placeholder de
 * treinador sem foto, para que se comporte visualmente da mesma forma.
 *
 * Respeita `prefers-reduced-motion`: com a preferência ativa, o conteúdo
 * fica estático (sem parallax nem tilt).
 */
export function TiltFrame({
  className,
  children,
  overlay,
  tiltStrength = 8,
  parallaxRange = 24,
}: TiltFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, TILT_SPRING);
  const rotateY = useSpring(ry, TILT_SPRING);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const rawParallaxY = useTransform(scrollYProgress, [0, 1], [-parallaxRange, parallaxRange]);
  const parallaxY = useSpring(rawParallaxY, { stiffness: 100, damping: 30, mass: 0.5 });

  function onMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * tiltStrength);
    rx.set(-py * tiltStrength);
  }

  function onMouseLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)} style={{ perspective: 1200 }}>
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          y: prefersReducedMotion ? 0 : parallaxY,
          transformStyle: "preserve-3d",
        }}
        className="absolute -inset-x-[3%] -inset-y-[6%]"
      >
        {children}
      </motion.div>
      {overlay}
    </div>
  );
}

type TiltImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  tiltStrength?: number;
  parallaxRange?: number;
  children?: ReactNode;
};

/** `TiltFrame` pronto a usar com uma `next/image`. */
export function TiltImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "100vw",
  priority,
  tiltStrength,
  parallaxRange,
  children,
}: TiltImageProps) {
  return (
    <TiltFrame className={className} overlay={children} tiltStrength={tiltStrength} parallaxRange={parallaxRange}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={cn("object-cover", imgClassName)} />
    </TiltFrame>
  );
}
