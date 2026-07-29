import { Building2, Calendar, Flame, Shield, Trophy, Users, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { differentiators, type Differentiator } from "@/lib/data";

const icons: Record<Differentiator["icon"], LucideIcon> = {
  shield: Shield,
  flame: Flame,
  users: Users,
  trophy: Trophy,
  building: Building2,
  calendar: Calendar,
};

export function WhyUs() {
  return (
    <section className="border-t border-line bg-ink py-24 sm:py-32">
      <div className="container-quartel">
        <SectionHeading
          eyebrow="Porquê o Quartel 365"
          title="Não é mais um ginásio de bairro."
          description="Estamos a construir o Quartel 365 para quem quer treinar Muay Thai e Treino Funcional com seriedade — com a estrutura, o treinador e a comunidade certos para isso."
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal
                key={item.title}
                as="li"
                delay={index * 0.05}
                className="group relative bg-charcoal p-8 transition-colors duration-300 hover:bg-charcoal-2"
              >
                <span className="absolute left-8 top-8 h-10 w-10 rounded-full bg-oxblood/0 blur-xl transition-colors duration-300 group-hover:bg-oxblood/25" />
                <Icon
                  className="relative text-oxblood transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                  size={28}
                  aria-hidden
                />
                <h3 className="relative mt-5 font-sans text-base font-semibold uppercase tracking-wide text-bone">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-mist">{item.description}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
