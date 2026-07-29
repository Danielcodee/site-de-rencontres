import { Clock, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data";

export function LocationSection() {
  return (
    <section className="border-t border-line bg-charcoal py-24 sm:py-32">
      <div className="container-quartel grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Localização"
            title="Treina em Felgueiras."
            description="Estamos no coração de Felgueiras, com fácil acesso e estacionamento nas proximidades."
          />

          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-oxblood" size={22} aria-hidden />
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-wide text-bone">
                  Morada
                </p>
                <p className="mt-1 text-sm text-mist">
                  {siteConfig.contact.addressLine1}
                  <br />
                  {siteConfig.contact.addressLine2}
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-1 shrink-0 text-oxblood" size={22} aria-hidden />
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-wide text-bone">
                  Horário
                </p>
                <div className="mt-1 space-y-0.5 text-sm text-mist">
                  {siteConfig.hours.map((item) => (
                    <p key={item.day}>
                      {item.day}: {item.hours}
                    </p>
                  ))}
                </div>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-1 shrink-0 text-oxblood" size={22} aria-hidden />
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-wide text-bone">
                  Contacto
                </p>
                <a href={`tel:${siteConfig.contact.phoneHref}`} className="mt-1 block text-sm text-mist hover:text-oxblood">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </li>
          </ul>

          <ButtonLink href="/contactos" className="mt-8">
            Como chegar
          </ButtonLink>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-line grayscale invert-[0.92] contrast-125">
            <iframe
              title={`Mapa do ${siteConfig.name} em Felgueiras`}
              src={siteConfig.contact.mapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
