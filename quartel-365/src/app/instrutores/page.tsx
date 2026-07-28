import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { instructors } from "@/lib/data";

export const metadata: Metadata = {
  title: "Instrutores",
  description:
    "Conhece a equipa técnica do Quartel 365: instrutores certificados de Muay Thai, com percurso competitivo e anos de experiência a ensinar em Felgueiras.",
  alternates: { canonical: "/instrutores" },
};

export default function InstrutoresPage() {
  return (
    <>
      <PageHeader
        eyebrow="A equipa técnica"
        title="Quem lidera o treino no Quartel 365."
        description="Cada instrutor traz um percurso próprio — competitivo, técnico ou pedagógico — mas todos partilham a mesma exigência."
      />

      <section className="bg-ink py-24 sm:py-32">
        <div className="container-quartel space-y-16">
          {instructors.map((instructor, index) => (
            <Reveal key={instructor.slug} delay={index * 0.05}>
              <article
                className={`grid gap-8 border-b border-line pb-16 last:border-b-0 last:pb-0 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line">
                  <Image
                    src={instructor.image}
                    alt={`${instructor.name} — ${instructor.role}`}
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-bone">
                    {instructor.name}
                  </h2>
                  <p className="mt-1 font-heading text-sm uppercase tracking-widest text-flame">
                    {instructor.role}
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist">{instructor.bio}</p>

                  <ul className="mt-6 space-y-2">
                    {instructor.credentials.map((credential) => (
                      <li key={credential} className="flex items-start gap-3 text-sm text-mist">
                        <BadgeCheck className="mt-0.5 shrink-0 text-flame" size={17} aria-hidden />
                        {credential}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
