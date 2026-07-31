import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/sobre", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/modalidades", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/treinadores", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/reservar", priority: 0.9, changeFrequency: "daily" as const },
  { path: "/instalacoes", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contactos", priority: 0.8, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
