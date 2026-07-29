import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { FacebookIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { MbWay } from "@/components/home/MbWay";
import { faqs, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contactos",
  description:
    "Fala com o Quartel 365 antes da abertura em outubro de 2026. Morada em Felgueiras, telefone, email e formulário de contacto.",
  alternates: { canonical: "/contactos" },
};

export default function ContactosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contactos"
        title="Fala connosco. O primeiro passo é uma mensagem."
        description="Garante o teu lugar para a aula experimental gratuita, tira dúvidas sobre planos ou pergunta-nos qualquer coisa antes da abertura."
      />

      <section className="bg-ink py-24 sm:py-32">
        <div className="container-quartel grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionHeading eyebrow="Informação" title="Onde e quando nos encontrar." />

            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-oxblood" size={22} aria-hidden />
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wide text-bone">Morada</p>
                  <p className="mt-1 text-sm text-mist">
                    {siteConfig.contact.addressLine1}
                    <br />
                    {siteConfig.contact.addressLine2}
                  </p>
                  <a
                    href={siteConfig.contact.mapsLinkHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 inline-block text-sm font-medium text-oxblood hover:underline"
                  >
                    Ver direções →
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-oxblood" size={22} aria-hidden />
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wide text-bone">Telefone</p>
                  <a href={`tel:${siteConfig.contact.phoneHref}`} className="mt-1 block text-sm text-mist hover:text-gold">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MessageCircle className="mt-1 shrink-0 text-oxblood" size={22} aria-hidden />
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wide text-bone">WhatsApp</p>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappHref}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-1 block text-sm text-mist hover:text-gold"
                  >
                    {siteConfig.contact.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-oxblood" size={22} aria-hidden />
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wide text-bone">Email</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="mt-1 block text-sm text-mist hover:text-gold">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 shrink-0 text-oxblood" size={22} aria-hidden />
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wide text-bone">Horário</p>
                  <div className="mt-1 space-y-0.5 text-sm text-mist">
                    {siteConfig.hours.map((item) => (
                      <p key={item.day}>
                        {item.day}: {item.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="text-mist hover:text-gold">
                <InstagramIcon />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer noopener" aria-label="Facebook" className="text-mist hover:text-gold">
                <FacebookIcon />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer noopener" aria-label="YouTube" className="text-mist hover:text-gold">
                <YoutubeIcon />
              </a>
              <a href={siteConfig.social.tiktok} target="_blank" rel="noreferrer noopener" aria-label="TikTok" className="text-mist hover:text-gold">
                <TiktokIcon />
              </a>
            </div>

            <div className="mt-10 aspect-[4/3] w-full overflow-hidden rounded-sm border border-line grayscale invert-[0.92] contrast-125">
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

          <Reveal delay={0.1}>
            <div className="rounded-sm border border-line bg-charcoal p-6 sm:p-10">
              <SectionHeading eyebrow="Formulário" title="Envia-nos uma mensagem." />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <MbWay />

      <section className="border-t border-line bg-charcoal py-24 sm:py-32">
        <div className="container-quartel">
          <SectionHeading eyebrow="Dúvidas frequentes" title="Antes de perguntares, tenta aqui." align="center" className="mx-auto" />
          <dl className="mx-auto mt-14 max-w-3xl divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <dt className="font-sans text-sm font-semibold uppercase tracking-wide text-bone">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-mist">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
