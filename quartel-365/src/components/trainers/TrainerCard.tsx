import { BadgeCheck } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { TiltFrame, TiltImage } from "@/components/ui/TiltImage";
import { PortraitPlaceholder } from "@/components/ui/Placeholder";
import type { Trainer } from "@/lib/data";

export function TrainerCard({ trainer, priority }: { trainer: Trainer; priority?: boolean }) {
  return (
    <TiltCard strength={4}>
      <article className="flex h-full flex-col overflow-hidden rounded-sm border border-line bg-charcoal transition-[border-color,box-shadow] duration-300 hover:border-gold/50 hover:shadow-[0_24px_60px_-20px_rgba(204,255,0,0.3)]">
        {trainer.photo ? (
          <TiltImage
            src={trainer.photo}
            alt={`${trainer.name} — ${trainer.role}`}
            className="aspect-[4/5] w-full"
            priority={priority}
            sizes="(min-width: 1024px) 50vw, 100vw"
            tiltStrength={0}
            parallaxRange={16}
          >
            <span className="absolute left-4 top-4 rounded-sm bg-oxblood px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-bone">
              {trainer.specialty}
            </span>
          </TiltImage>
        ) : (
          <TiltFrame
            className="aspect-[4/5] w-full"
            tiltStrength={0}
            parallaxRange={16}
            overlay={
              <>
                <span className="absolute left-4 top-4 rounded-sm bg-oxblood px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider text-bone">
                  {trainer.specialty}
                </span>
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-sans text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-mist">
                  Foto em breve
                </span>
              </>
            }
          >
            <PortraitPlaceholder name={trainer.name} className="h-full w-full" />
          </TiltFrame>
        )}

        <div className="flex flex-1 flex-col p-7">
          <h3 className="font-heading text-2xl text-bone">{trainer.name}</h3>
          <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-widest text-gold">
            {trainer.role}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist">{trainer.bio}</p>

          <ul className="mt-5 space-y-2">
            {trainer.credentials.map((credential) => (
              <li key={credential} className="flex items-start gap-3 text-sm text-mist">
                <BadgeCheck className="mt-0.5 shrink-0 text-oxblood" size={16} aria-hidden />
                {credential}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </TiltCard>
  );
}
