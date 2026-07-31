import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WhyUs } from "@/components/home/WhyUs";
import { TrainersPreview } from "@/components/home/TrainersPreview";
import { ModalitiesPreview } from "@/components/home/ModalitiesPreview";
import { BookingSection } from "@/components/home/BookingSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { LocationSection } from "@/components/home/LocationSection";
import { MbWay } from "@/components/home/MbWay";
import { CtaNewsletter } from "@/components/home/CtaNewsletter";

// A secção de reservas mostra vagas em tempo real — a homepage não pode
// ser servida a partir de cache estático.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Muay Thai e Treino Funcional em Felgueiras — Abre em Outubro 2026",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <WhyUs />
      <TrainersPreview />
      <ModalitiesPreview />
      <BookingSection />
      <GalleryPreview />
      <LocationSection />
      <MbWay />
      <CtaNewsletter />
    </>
  );
}
