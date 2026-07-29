import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { testimonials } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  return (
    <section className="border-t border-line bg-charcoal py-24 sm:py-32">
      <div className="container-quartel">
        <SectionHeading
          align="center"
          eyebrow="Prova social"
          title="Quem treina, confirma."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08} className="h-full">
              <TiltCard strength={5}>
                <figure className="h-full rounded-sm border border-line bg-ink p-8">
                  <Quote className="text-gold" size={28} aria-hidden />
                  <blockquote className="mt-4 font-heading text-lg leading-relaxed text-bone sm:text-xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span
                      aria-hidden
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-charcoal font-sans text-sm font-semibold text-gold"
                    >
                      {initials(testimonial.name)}
                    </span>
                    <div>
                      <p className="font-sans text-sm font-semibold uppercase tracking-wide text-bone">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-mist">{testimonial.since}</p>
                    </div>
                  </figcaption>
                </figure>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
