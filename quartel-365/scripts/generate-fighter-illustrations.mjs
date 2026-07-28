// Gera as ilustrações originais do lutador (silhueta estilizada) usadas em
// várias secções do site. Técnica: cada membro é uma cápsula 2D calculada
// entre dois pontos "articulação" (o mesmo método usado nos pictogramas
// olímpicos) — mais fácil de ajustar do que um único traçado de contorno.
//
// Correr com: node scripts/generate-fighter-illustrations.mjs
// Ficheiros gerados em public/images/illustrations/.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images", "illustrations");
mkdirSync(outDir, { recursive: true });

const FLAME = "#e63a1f";
const EMBER = "#ff7a33";
const INK = "#08090a";
const CHARCOAL = "#1c1e21";
const LINE = "#2a2c30";

function background(w, h, seed) {
  return `<defs>
    <linearGradient id="bg-grad-${seed}" x1="0" y1="0" x2="${w}" y2="${h}" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${INK}" />
      <stop offset="0.6" stop-color="${CHARCOAL}" />
      <stop offset="1" stop-color="${INK}" />
    </linearGradient>
    <pattern id="bg-grid-${seed}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${LINE}" stroke-width="1" opacity="0.5" />
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg-grad-${seed})" />
  <rect width="${w}" height="${h}" fill="url(#bg-grid-${seed})" />`;
}

function limb([ax, ay], [bx, by], thickness, fill) {
  const dx = bx - ax;
  const dy = by - ay;
  const length = Math.hypot(dx, dy);
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  return `<g transform="translate(${ax},${ay}) rotate(${angle.toFixed(2)})"><rect x="0" y="${-thickness / 2}" width="${length}" height="${thickness}" rx="${thickness / 2}" fill="${fill}" /></g>`;
}

function joint([x, y], r, fill) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" />`;
}

function ellipse([x, y], rx, ry, angle, fill) {
  return `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}" transform="rotate(${angle} ${x} ${y})" />`;
}

// --- Pose 1: pontapé circular (roundhouse), de perfil, virado à direita ---
function buildKick() {
  const P = {
    pivotFoot: [312, 882],
    pivotAnkle: [338, 852],
    pivotKnee: [326, 706],
    hip: [356, 556],
    waist: [368, 470],
    chest: [342, 320],
    headC: [288, 196],

    shoulderFront: [312, 300],
    guardElbow: [252, 368],
    guardFist: [250, 270],

    kickHip: [378, 552],
    kickKnee: [566, 470],
    kickAnkle: [742, 512],
    kickToe: [794, 526],
  };

  const parts = [
    limb(P.hip, P.pivotKnee, 76, FLAME),
    joint(P.pivotKnee, 37, FLAME),
    limb(P.pivotKnee, P.pivotAnkle, 54, FLAME),
    joint(P.pivotAnkle, 24, FLAME),
    ellipse(P.pivotFoot, 46, 20, -8, FLAME),

    joint(P.hip, 60, FLAME),
    limb(P.hip, P.waist, 106, FLAME),
    limb(P.waist, P.chest, 126, FLAME),
    joint(P.chest, 68, FLAME),
    joint(P.waist, 56, FLAME),

    joint(P.headC, 57, FLAME),

    joint(P.kickHip, 55, FLAME),
    limb(P.kickHip, P.kickKnee, 70, FLAME),
    joint(P.kickKnee, 36, FLAME),
    limb(P.kickKnee, P.kickAnkle, 44, FLAME),
    joint(P.kickAnkle, 23, FLAME),
    limb(P.kickAnkle, P.kickToe, 22, FLAME),
    ellipse(P.kickToe, 20, 12, 8, FLAME),
    ellipse(P.kickAnkle, 20, 14, -12, EMBER),

    joint(P.shoulderFront, 34, FLAME),
    limb(P.shoulderFront, P.guardElbow, 40, FLAME),
    joint(P.guardElbow, 21, FLAME),
    limb(P.guardElbow, P.guardFist, 34, FLAME),
    joint(P.guardFist, 26, EMBER),
  ];

  const motionLines = `<g stroke="${EMBER}" stroke-width="6" stroke-linecap="round" opacity="0.5" fill="none">
    <path d="M 600 370 Q 690 395 765 430" />
    <path d="M 612 425 Q 700 448 775 485" />
    <path d="M 618 478 Q 705 500 780 535" />
  </g>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 950" role="img" aria-label="Ilustração de um lutador de Muay Thai a executar um pontapé circular">
  ${background(850, 950, "kick")}
  ${motionLines}
  <g>${parts.join("")}</g>
</svg>`;
}

// --- Pose 2: posição de guarda, de pé, virado à direita ---
function buildGuard() {
  const P = {
    backFoot: [268, 862],
    backAnkle: [280, 828],
    backKnee: [304, 694],
    hip: [338, 558],

    frontFoot: [430, 862],
    frontAnkle: [416, 828],
    frontKnee: [400, 694],
    frontHip: [360, 556],

    waist: [350, 468],
    chest: [335, 318],
    headC: [320, 198],

    frontShoulder: [310, 294],
    frontElbow: [253, 366],
    frontFist: [250, 268],

    rearShoulder: [356, 300],
    rearElbow: [386, 402],
    rearHand: [374, 496],
  };

  const parts = [
    limb(P.hip, P.backKnee, 74, FLAME),
    joint(P.backKnee, 36, FLAME),
    limb(P.backKnee, P.backAnkle, 52, FLAME),
    joint(P.backAnkle, 23, FLAME),
    ellipse(P.backFoot, 44, 19, -6, FLAME),

    limb(P.frontHip, P.frontKnee, 74, FLAME),
    joint(P.frontKnee, 36, FLAME),
    limb(P.frontKnee, P.frontAnkle, 52, FLAME),
    joint(P.frontAnkle, 23, FLAME),
    ellipse(P.frontFoot, 44, 19, 6, FLAME),

    joint(P.hip, 58, FLAME),
    joint(P.frontHip, 40, FLAME),
    limb(P.hip, P.waist, 100, FLAME),
    limb(P.waist, P.chest, 122, FLAME),
    joint(P.chest, 66, FLAME),
    joint(P.waist, 54, FLAME),

    joint(P.headC, 56, FLAME),

    joint(P.rearShoulder, 32, FLAME),
    limb(P.rearShoulder, P.rearElbow, 40, FLAME),
    joint(P.rearElbow, 21, FLAME),
    limb(P.rearElbow, P.rearHand, 34, FLAME),
    joint(P.rearHand, 24, EMBER),

    joint(P.frontShoulder, 34, FLAME),
    limb(P.frontShoulder, P.frontElbow, 40, FLAME),
    joint(P.frontElbow, 21, FLAME),
    limb(P.frontElbow, P.frontFist, 34, FLAME),
    joint(P.frontFist, 26, EMBER),
  ];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 950" role="img" aria-label="Ilustração de um lutador de Muay Thai em posição de guarda">
  ${background(700, 950, "guard")}
  <g>${parts.join("")}</g>
</svg>`;
}

const files = {
  "fighter-kick.svg": buildKick(),
  "fighter-guard.svg": buildGuard(),
};

for (const [file, svg] of Object.entries(files)) {
  writeFileSync(join(outDir, file), svg, "utf8");
  console.log("gerado:", file);
}
