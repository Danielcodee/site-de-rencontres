"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { FighterModel } from "./FighterModel";

export function FighterScene() {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const pointerX = useRef(0);

  useEffect(() => {
    // Rastreio global do rato — o canvas tem pointer-events desativado
    // (para nunca bloquear cliques no hero), por isso lemos a posição do
    // rato na janela inteira em vez de depender de eventos sobre o canvas.
    const onMouseMove = (event: MouseEvent) => {
      pointerX.current = (event.clientX / window.innerWidth) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0.3, 7.5], fov: 28 }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[2, 3, 2]} intensity={0.6} />
      <pointLight position={[-2, 0.5, 1.5]} intensity={18} color="#e63a1f" />
      <pointLight position={[1.5, -0.5, -1]} intensity={10} color="#ff7a33" />

      <FighterModel reducedMotion={reducedMotion} pointerRef={pointerX} />

      <ContactShadows position={[0, -1.05, 0]} opacity={0.55} scale={4.5} blur={2.4} far={2} />
    </Canvas>
  );
}
