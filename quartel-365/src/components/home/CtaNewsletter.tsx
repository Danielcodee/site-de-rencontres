import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function CtaNewsletter() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-ink py-24 sm:py-32">
      <Image
        src="/images/cta-band.svg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />

      <div className="container-quartel relative z-10 text-center">
        <Reveal>
          <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-flame">
            O próximo passo é teu
          </p>
          <h2 className="mx-auto max-w-3xl font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-bone sm:text-5xl">
            A disciplina começa com uma aula.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-mist sm:text-lg">
            Marca a tua aula experimental gratuita e vem sentir o ambiente do
            Quartel 365. Sem compromisso, sem desculpas.
          </p>

          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contactos">
              Marca a tua aula experimental
              <ArrowRight size={16} aria-hidden />
            </ButtonLink>
          </div>

          <div className="mx-auto mt-14 max-w-md border-t border-line pt-10">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-bone">
              Recebe dicas de treino e novidades
            </p>
            <p className="mt-2 text-sm text-mist">
              Uma newsletter ocasional, sem spam. Cancela quando quiseres.
            </p>
            <NewsletterForm className="mt-5" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
