import type { NextConfig } from "next";

// As imagens do repositório são placeholders SVG gerados localmente (ver
// scripts/generate-placeholders.mjs). Quando substituir por fotos reais
// (JPG/PNG/WebP), esta secção `images` pode ser simplificada e o
// `dangerouslyAllowSVG` removido.
const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
