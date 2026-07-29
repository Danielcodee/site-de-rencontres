import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/data";
import "./globals.css";

// Carregadas via <link> (em vez de next/font/google) — o self-hosting do
// next/font produziu, neste ambiente, um subset da fonte com o glifo "Ú"
// em falta (afetava palavras como "único"). O <link> direto para a Google
// Fonts CDN não tem esse problema.
const GOOGLE_FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;500;600;700&display=swap";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Muay Thai e Treino Funcional em Felgueiras`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Muay Thai Felgueiras",
    "academia de Muay Thai",
    "treino funcional Felgueiras",
    "aulas de Muay Thai",
    "ginásio de combate Felgueiras",
    "Quartel 365",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Muay Thai e Treino Funcional em Felgueiras`,
    description: siteConfig.description,
    images: [{ url: "/images/hero-fighter.jpg", width: 2048, height: 1152, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Muay Thai e Treino Funcional em Felgueiras`,
    description: siteConfig.description,
    images: ["/images/hero-fighter.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "@id": `${siteConfig.url}/#local`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phoneDisplay,
  email: siteConfig.contact.email,
  priceRange: "€€",
  image: `${siteConfig.url}/images/hero-fighter.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.addressLine1,
    addressLocality: siteConfig.contact.city,
    addressRegion: siteConfig.contact.region,
    postalCode: siteConfig.contact.postalCode,
    addressCountry: siteConfig.contact.country,
  },
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook, siteConfig.social.youtube],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_HREF} />
      </head>
      <body className="flex min-h-full flex-col bg-ink font-sans text-bone antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
