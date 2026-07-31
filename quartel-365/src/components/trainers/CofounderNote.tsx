import type { Cofounder } from "@/lib/data";

/**
 * Bloco de texto simples para um cofundador que não dá aulas — deliberadamente
 * mais discreto que o `TrainerCard` (sem foto, sem badge de especialidade,
 * sem lista de credenciais) para não sugerir que também ensina. O monograma
 * em contorno preenche o espaço com intenção, sem parecer um placeholder de
 * foto em falta.
 */
export function CofounderNote({ cofounder }: { cofounder: Cofounder }) {
  const initials = cofounder.name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="flex h-full flex-col justify-between rounded-sm border border-line bg-charcoal p-7 transition-[border-color,box-shadow] duration-300 hover:border-oxblood/50 hover:shadow-[0_24px_60px_-20px_rgba(255,30,39,0.3)]">
      <p className="text-outline font-heading text-7xl leading-none sm:text-8xl" aria-hidden>
        {initials}
      </p>
      <div>
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
          {cofounder.role}
        </p>
        <h3 className="mt-1 font-heading text-2xl text-bone">{cofounder.name}</h3>
        <p className="mt-4 text-sm leading-relaxed text-mist">{cofounder.bio}</p>
      </div>
    </div>
  );
}
