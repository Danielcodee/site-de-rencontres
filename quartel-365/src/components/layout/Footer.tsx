import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-charcoal">
      <div className="container-quartel grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="font-heading text-xl uppercase tracking-tight text-bone">
            Quartel <span className="text-oxblood">365</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram do Quartel 365"
              className="text-mist transition-colors hover:text-gold"
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook do Quartel 365"
              className="text-mist transition-colors hover:text-gold"
            >
              <FacebookIcon />
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="YouTube do Quartel 365"
              className="text-mist transition-colors hover:text-gold"
            >
              <YoutubeIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
            Links rápidos
          </h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-mist transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
            Contactos
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-oxblood" aria-hidden />
              <span>
                {siteConfig.contact.addressLine1}
                <br />
                {siteConfig.contact.addressLine2}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-oxblood" aria-hidden />
              <a href={`tel:${siteConfig.contact.phoneHref}`} className="hover:text-gold">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-oxblood" aria-hidden />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gold">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-sm font-semibold uppercase tracking-widest text-gold">
            Horário
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            {siteConfig.hours.map((item) => (
              <li key={item.day} className="flex justify-between gap-4">
                <span>{item.day}</span>
                <span className="text-bone">{item.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-quartel flex flex-col gap-2 py-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>Muay Thai · Felgueiras, Portugal</p>
        </div>
      </div>
    </footer>
  );
}
