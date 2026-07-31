import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { ctaImage, siteConfig } from "@/lib/data";

export function CtaNewsletter() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container-quartel relative z-10 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <Reveal className="text-center lg:text-left">
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            O próximo passo é teu
          </p>
          <h2 className="mx-auto max-w-3xl font-heading text-4xl leading-tight tracking-tight text-bone sm:text-5xl lg:mx-0">
            A disciplina começa com uma aula.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-mist sm:text-lg lg:mx-0">
            Garante já o teu lugar para a aula experimental gratuita, antes da
            abertura em {siteConfig.openingDisplay}. Sem compromisso, sem desculpas.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <ButtonLink href="/reservar">
              Reservar a tua aula
              <ArrowRight size={16} aria-hidden />
            </ButtonLink>
          </div>

          <div className="mx-auto mt-14 max-w-md border-t border-line pt-10 lg:mx-0">
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-bone">
              Recebe dicas de treino e novidades
            </p>
            <p className="mt-2 text-sm text-mist">
              Uma newsletter ocasional, sem spam. Cancela quando quiseres.
            </p>
            <NewsletterForm className="mt-5" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:block">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm border border-line">
            <Image
              src={ctaImage}
              alt="Lutador de Muay Thai em posição de combate"
              fill
              sizes="400px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
