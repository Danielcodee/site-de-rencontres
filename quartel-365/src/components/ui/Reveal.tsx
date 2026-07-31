"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

/**
 * Entrada dinâmica ao fazer scroll: fade-up + blur-in + escalamento suave.
 * Usar para secções, cards e blocos de texto em toda a página.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const MotionTag = as === "li" ? motion.li : motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y: 32, scale: 0.96, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
