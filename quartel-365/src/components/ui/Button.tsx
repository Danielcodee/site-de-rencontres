"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

const TILT_SPRING = { stiffness: 300, damping: 22, mass: 0.4 };
const TILT_STRENGTH = 14;

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm px-6 py-3 font-sans text-sm font-semibold uppercase tracking-widest transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-oxblood text-bone shadow-[0_0_0_rgba(122,31,43,0)] transition-[background-color,box-shadow] hover:bg-oxblood-dark hover:shadow-[0_12px_30px_-10px_rgba(122,31,43,0.65)]",
  outline: "border border-line text-bone hover:border-gold hover:text-gold",
  ghost: "text-bone hover:text-gold",
};

type ButtonVariant = keyof typeof variants;

/** Ligeira inclinação 3D que segue o rato, com mola para suavizar o retorno. */
function useTilt<T extends HTMLElement>() {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, TILT_SPRING);
  const rotateY = useSpring(ry, TILT_SPRING);

  function onMouseMove(event: MouseEvent<T>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * TILT_STRENGTH);
    rx.set(-py * TILT_STRENGTH);
  }

  function onMouseLeave() {
    rx.set(0);
    ry.set(0);
  }

  return { rotateX, rotateY, onMouseMove, onMouseLeave };
}

function ShineAndLabel({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <span className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/25 opacity-0 transition-[transform,opacity] duration-700 ease-out group-hover:translate-x-[280%] group-hover:opacity-100" />
      </span>
      <span className="relative z-10 inline-flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-0.5">
        {children}
      </span>
    </>
  );
}

// Omitidos por conflitarem com os tipos de evento do framer-motion
// (assinaturas diferentes das do DOM nativo).
type MotionConflictingProps = "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd";

type ButtonAsLink = Omit<ComponentPropsWithoutRef<typeof Link>, MotionConflictingProps> & {
  variant?: ButtonVariant;
};

export function ButtonLink({ variant = "primary", className, children, ...props }: ButtonAsLink) {
  const tilt = useTilt<HTMLAnchorElement>();

  return (
    <span className="inline-block" style={{ perspective: 600 }}>
      <MotionLink
        style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        whileTap={{ scale: 0.95 }}
        className={cn(base, variants[variant], className)}
        {...props}
      >
        <ShineAndLabel>{children}</ShineAndLabel>
      </MotionLink>
    </span>
  );
}

type ButtonAsButton = Omit<ComponentPropsWithoutRef<"button">, MotionConflictingProps> & {
  variant?: ButtonVariant;
};

export function Button({ variant = "primary", className, children, ...props }: ButtonAsButton) {
  const tilt = useTilt<HTMLButtonElement>();

  return (
    <span className="inline-block" style={{ perspective: 600 }}>
      <motion.button
        style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        whileTap={{ scale: 0.95 }}
        className={cn(base, variants[variant], className)}
        {...props}
      >
        <ShineAndLabel>{children}</ShineAndLabel>
      </motion.button>
    </span>
  );
}
