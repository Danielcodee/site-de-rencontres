import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  /** Ilustração decorativa opcional, ancorada ao lado direito em ecrãs largos. */
  illustration?: { src: string; alt: string };
};

/** Banner de topo para páginas internas — garante espaço para o header fixo. */
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
  illustration,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line bg-charcoal bg-grid pb-16 pt-36 sm:pb-20 sm:pt-44",
        className,
      )}
    >
      {illustration ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[30%] opacity-90 [mask-image:linear-gradient(to_left,black_60%,transparent)] lg:block">
          <Image src={illustration.src} alt={illustration.alt} fill sizes="30vw" className="object-cover object-top" />
        </div>
      ) : null}
      <div className="container-quartel relative z-10">
        <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-flame">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-heading text-4xl font-bold uppercase leading-tight tracking-tight text-bone sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">{description}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
