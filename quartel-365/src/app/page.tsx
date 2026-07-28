import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { WhyUs } from "@/components/home/WhyUs";
import { ProgramsPreview } from "@/components/home/ProgramsPreview";
import { InstructorsPreview } from "@/components/home/InstructorsPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { LocationSection } from "@/components/home/LocationSection";
import { CtaNewsletter } from "@/components/home/CtaNewsletter";

export const metadata: Metadata = {
  title: "Academia de Muay Thai em Felgueiras",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <ProgramsPreview />
      <InstructorsPreview />
      <Testimonials />
      <GalleryPreview />
      <LocationSection />
      <CtaNewsletter />
    </>
  );
}
