import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Academia de Muay Thai em Felgueiras`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Muay Thai Felgueiras",
    "academia de Muay Thai",
    "kickboxing Felgueiras",
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
    title: `${siteConfig.name} — Academia de Muay Thai em Felgueiras`,
    description: siteConfig.description,
    images: [{ url: "/images/og-cover.svg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Academia de Muay Thai em Felgueiras`,
    description: siteConfig.description,
    images: ["/images/og-cover.svg"],
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
  image: `${siteConfig.url}/images/og-cover.svg`,
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
    <html lang="pt-PT" className={`${inter.variable} ${oswald.variable} h-full`}>
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
