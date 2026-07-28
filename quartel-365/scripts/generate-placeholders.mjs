// Gera imagens SVG placeholder para o site (ver README.md > "Substituir imagens").
// Correr com: node scripts/generate-placeholders.mjs
// Estas imagens existem apenas para o site funcionar antes de teres fotos
// reais da academia. Substitui os ficheiros em public/images pelos mesmos
// nomes de ficheiro (ou atualiza os caminhos em src/lib/data.ts).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images");
mkdirSync(outDir, { recursive: true });

const FLAME = "#e63a1f";
const EMBER = "#ff7a33";
const INK = "#08090a";
const CHARCOAL = "#1c1e21";
const LINE = "#2a2c30";
const BONE = "#f3f1ea";

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function svg({ w, h, label: rawLabel, sub: rawSub, seed = 0, accent = true, watermark = false }) {
  const label = escapeXml(rawLabel);
  const sub = rawSub ? escapeXml(rawSub) : rawSub;
  const gridId = `grid${seed}`;
  const gradId = `grad${seed}`;
  // Pseudo-random but deterministic streaks for visual variety per image.
  const streaks = Array.from({ length: 5 }, (_, i) => {
    const x = ((seed * 37 + i * 91) % w) - w * 0.2;
    const width = 40 + ((seed * 13 + i * 29) % 90);
    return `<rect x="${x}" y="0" width="${width}" height="${h}" fill="${EMBER}" opacity="0.035" transform="skewX(-18)" />`;
  }).join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="${gradId}" x1="0" y1="0" x2="${w}" y2="${h}" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${INK}" />
      <stop offset="0.55" stop-color="${CHARCOAL}" />
      <stop offset="1" stop-color="${INK}" />
    </linearGradient>
    <pattern id="${gridId}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${LINE}" stroke-width="1" opacity="0.5" />
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#${gradId})" />
  <rect width="${w}" height="${h}" fill="url(#${gridId})" />
  <g clip-path="url(#clip-${seed})">${streaks}</g>
  <clipPath id="clip-${seed}"><rect width="${w}" height="${h}" /></clipPath>
  ${accent ? `<rect x="0" y="${h - 10}" width="${w}" height="10" fill="${FLAME}" opacity="0.9" />` : ""}
  <rect x="0.5" y="0.5" width="${w - 1}" height="${h - 1}" fill="none" stroke="${LINE}" stroke-width="1" />
  ${
    watermark
      ? `<text x="${w - 32}" y="${h - 32}" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="${Math.round(Math.min(w, h) * 0.028)}" letter-spacing="2" fill="${BONE}" opacity="0.18">${label}</text>`
      : `<text x="50%" y="${h / 2 - (sub ? 14 : 0)}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="${Math.round(Math.min(w, h) * 0.065)}" letter-spacing="2" fill="${BONE}" opacity="0.92">${label}</text>
  ${sub ? `<text x="50%" y="${h / 2 + 26}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="${Math.round(Math.min(w, h) * 0.03)}" letter-spacing="3" fill="${FLAME}">${sub}</text>` : ""}`
  }
</svg>`;
}

const images = [
  { file: "hero.svg", w: 1920, h: 1080, label: "QUARTEL 365", sub: "MUAY THAI · FELGUEIRAS", seed: 1, watermark: true },
  { file: "og-cover.svg", w: 1200, h: 630, label: "QUARTEL 365", sub: "TREINA TODOS OS DIAS", seed: 2 },
  { file: "about-cover.svg", w: 1400, h: 1000, label: "A NOSSA HISTÓRIA", seed: 3 },
  { file: "cta-band.svg", w: 1920, h: 800, label: "A DISCIPLINA É DIÁRIA", seed: 4, watermark: true },
  { file: "contact-cover.svg", w: 1400, h: 1000, label: "QUARTEL 365", sub: "FELGUEIRAS", seed: 5 },

  { file: "gallery/ringue-01.svg", w: 1200, h: 900, label: "RINGUE PRINCIPAL", seed: 10 },
  { file: "gallery/ringue-02.svg", w: 1200, h: 900, label: "RINGUE · SPARRING", seed: 11 },
  { file: "gallery/sacos-01.svg", w: 1200, h: 900, label: "ZONA DE SACOS", seed: 12 },
  { file: "gallery/musculacao-01.svg", w: 1200, h: 900, label: "SALA DE FORÇA", seed: 13 },
  { file: "gallery/balnearios-01.svg", w: 1200, h: 900, label: "BALNEÁRIOS", seed: 14 },
  { file: "gallery/recepcao-01.svg", w: 1200, h: 900, label: "RECEÇÃO", seed: 15 },
  { file: "gallery/aula-grupo-01.svg", w: 1200, h: 900, label: "AULA EM GRUPO", seed: 16 },
  { file: "gallery/kids-01.svg", w: 1200, h: 900, label: "QUARTEL KIDS", seed: 17 },

  { file: "programs/iniciacao.svg", w: 1000, h: 1200, label: "INICIAÇÃO", seed: 20 },
  { file: "programs/avancado.svg", w: 1000, h: 1200, label: "AVANÇADO", seed: 21 },
  { file: "programs/fitness.svg", w: 1000, h: 1200, label: "CARDIO KICK", seed: 22 },
  { file: "programs/competicao.svg", w: 1000, h: 1200, label: "COMPETIÇÃO", seed: 23 },
  { file: "programs/kids.svg", w: 1000, h: 1200, label: "QUARTEL KIDS", seed: 24 },

  { file: "instructors/instrutor-01.svg", w: 900, h: 1100, label: "N. FERREIRA", seed: 30 },
  { file: "instructors/instrutor-02.svg", w: 900, h: 1100, label: "R. SANTOS", seed: 31 },
  { file: "instructors/instrutor-03.svg", w: 900, h: 1100, label: "C. OLIVEIRA", seed: 32 },
  { file: "instructors/instrutor-04.svg", w: 900, h: 1100, label: "T. ALMEIDA", seed: 33 },

  { file: "avatars/aluno-01.svg", w: 200, h: 200, label: "JP", seed: 40, accent: false },
  { file: "avatars/aluno-02.svg", w: 200, h: 200, label: "MS", seed: 41, accent: false },
  { file: "avatars/aluno-03.svg", w: 200, h: 200, label: "AC", seed: 42, accent: false },
  { file: "avatars/aluno-04.svg", w: 200, h: 200, label: "RT", seed: 43, accent: false },

  { file: "blog/post-01.svg", w: 1200, h: 630, label: "TÉCNICA DE BASE", seed: 50 },
  { file: "blog/post-02.svg", w: 1200, h: 630, label: "NUTRIÇÃO & COMBATE", seed: 51 },
  { file: "blog/post-03.svg", w: 1200, h: 630, label: "VIDA DE COMPETIDOR", seed: 52 },
];

for (const img of images) {
  const path = join(outDir, img.file);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, svg(img), "utf8");
  console.log("gerado:", img.file);
}

console.log(`\n${images.length} imagens placeholder geradas em public/images/.`);
