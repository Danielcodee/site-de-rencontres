import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data";

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
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <figure className="h-full rounded-sm border border-line bg-ink p-8">
                <Quote className="text-flame" size={28} aria-hidden />
                <blockquote className="mt-4 text-base leading-relaxed text-bone sm:text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Image
                    src={testimonial.avatar}
                    alt=""
                    aria-hidden
                    width={44}
                    height={44}
                    className="rounded-full border border-line"
                  />
                  <div>
                    <p className="font-heading text-sm font-semibold uppercase tracking-wide text-bone">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-mist">{testimonial.since}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
