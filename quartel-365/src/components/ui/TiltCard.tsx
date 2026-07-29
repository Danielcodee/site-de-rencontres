"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

const TILT_SPRING = { stiffness: 220, damping: 30, mass: 0.5 };

/**
 * Cartão com inclinação 3D subtil que segue o rato, mais um brilho radial
 * que acompanha o cursor. Pensado para grelhas de cards (programas,
 * treinadores, planos) — o filho deve preencher 100% da altura.
 */
export function TiltCard({
  children,
  className,
  strength = 4,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, TILT_SPRING);
  const rotateY = useSpring(ry, TILT_SPRING);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useSpring(0, TILT_SPRING);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.14), transparent 60%)`;

  function onMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    ry.set((px - 0.5) * strength);
    rx.set((0.5 - py) * strength);
    glareX.set(px * 100);
    glareY.set(py * 100);
    glareOpacity.set(1);
  }

  function onMouseLeave() {
    rx.set(0);
    ry.set(0);
    glareOpacity.set(0);
  }

  return (
    <div className={cn("h-full", className)} style={{ perspective: 1000 }}>
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={TILT_SPRING}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full"
      >
        {children}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-sm"
          style={{ background: glareBackground, opacity: glareOpacity }}
        />
      </motion.div>
    </div>
  );
}
