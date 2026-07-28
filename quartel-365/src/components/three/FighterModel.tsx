"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import type { Group } from "three";

const ARMOR_COLOR = "#1c1e21";
const EDGE_COLOR = "#e63a1f";
const GLOVE_COLOR = "#ff7a33";

function Armor() {
  return <meshStandardMaterial color={ARMOR_COLOR} roughness={0.55} metalness={0.4} />;
}

function Glove() {
  return (
    <meshStandardMaterial color={GLOVE_COLOR} emissive={GLOVE_COLOR} emissiveIntensity={0.55} roughness={0.4} />
  );
}

export function FighterModel({
  reducedMotion = false,
  pointerRef,
}: {
  reducedMotion?: boolean;
  pointerRef: { current: number };
}) {
  const root = useRef<Group>(null);
  const rightArm = useRef<Group>(null);
  const leftArm = useRef<Group>(null);
  const rightLeg = useRef<Group>(null);
  const clock = useRef(0);

  useFrame((_state, delta) => {
    if (reducedMotion) return;
    clock.current += delta;
    const t = clock.current;

    if (root.current) {
      root.current.position.y = -0.55 + Math.sin(t * 1.6) * 0.035;
      const targetY = 0.35 + pointerRef.current * 0.3;
      root.current.rotation.y += (targetY - root.current.rotation.y) * 0.04;
    }
    if (rightArm.current) {
      const cycle = (Math.sin(t * 1.1) + 1) / 2;
      rightArm.current.rotation.x = -1.5 - cycle * 0.7;
    }
    if (leftArm.current) {
      leftArm.current.rotation.x = -1.85 + Math.sin(t * 0.9 + 1) * 0.08;
    }
    if (rightLeg.current) {
      rightLeg.current.rotation.x = -1.4 + Math.sin(t * 1.3) * 0.07;
    }
  });

  return (
    <group ref={root} position={[0, -0.55, 0]} rotation={[0, 0.35, 0]}>
      {/* torso + head */}
      <group position={[0, 1.05, 0]}>
        <mesh>
          <capsuleGeometry args={[0.32, 0.72, 4, 8]} />
          <Armor />
          <Edges color={EDGE_COLOR} />
        </mesh>
        <mesh position={[0, 0.7, 0]}>
          <icosahedronGeometry args={[0.26, 1]} />
          <Armor />
          <Edges color={EDGE_COLOR} />
        </mesh>

        {/* left arm — guard, dobrado junto ao rosto */}
        <group ref={leftArm} position={[-0.3, 0.5, 0.02]} rotation={[-1.85, 0, -0.15]}>
          <mesh position={[0, -0.16, 0]}>
            <capsuleGeometry args={[0.085, 0.26, 4, 8]} />
            <Armor />
            <Edges color={EDGE_COLOR} />
          </mesh>
          <mesh position={[0.02, -0.34, 0.02]}>
            <sphereGeometry args={[0.11, 12, 12]} />
            <Glove />
          </mesh>
        </group>

        {/* right arm — ciclo de jab */}
        <group ref={rightArm} position={[0.3, 0.5, 0.02]} rotation={[-1.5, 0, 0.15]}>
          <mesh position={[0, -0.16, 0]}>
            <capsuleGeometry args={[0.085, 0.26, 4, 8]} />
            <Armor />
            <Edges color={EDGE_COLOR} />
          </mesh>
          <mesh position={[-0.02, -0.34, 0.02]}>
            <sphereGeometry args={[0.11, 12, 12]} />
            <Glove />
          </mesh>
        </group>
      </group>

      {/* hips */}
      <mesh position={[0, 0.58, 0]}>
        <boxGeometry args={[0.48, 0.24, 0.32]} />
        <Armor />
        <Edges color={EDGE_COLOR} />
      </mesh>

      {/* left leg — planted */}
      <group position={[-0.17, 0.52, 0]} rotation={[0.1, 0, 0.04]}>
        <mesh position={[0, -0.32, 0]}>
          <capsuleGeometry args={[0.12, 0.52, 4, 8]} />
          <Armor />
          <Edges color={EDGE_COLOR} />
        </mesh>
        <mesh position={[0.02, -0.72, 0.06]} rotation={[0.25, 0, 0]}>
          <capsuleGeometry args={[0.1, 0.48, 4, 8]} />
          <Armor />
          <Edges color={EDGE_COLOR} />
        </mesh>
      </group>

      {/* right leg — knee strike */}
      <group ref={rightLeg} position={[0.17, 0.52, 0]} rotation={[-1.4, 0, -0.1]}>
        <mesh position={[0, -0.26, 0]}>
          <capsuleGeometry args={[0.12, 0.42, 4, 8]} />
          <Armor />
          <Edges color={EDGE_COLOR} />
        </mesh>
        <mesh position={[0.04, -0.46, 0.26]} rotation={[1.55, 0, 0]}>
          <capsuleGeometry args={[0.1, 0.36, 4, 8]} />
          <Armor />
          <Edges color={EDGE_COLOR} />
        </mesh>
      </group>
    </group>
  );
}
