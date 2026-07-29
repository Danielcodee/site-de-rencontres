import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Placeholder visual claro para uma foto que ainda não existe — usado nos
 * cartão do treinador até haver uma foto real. Em vez de reutilizar uma
 * imagem genérica (que representaria erradamente uma pessoa concreta),
 * mostra as iniciais sobre um padrão discreto na paleta da marca.
 *
 * Para substituir por uma foto real: define `photo` no treinador em
 * `src/lib/data.ts` (ex: "/images/trainers/daniel-coelho.jpg") — o
 * componente que usa este placeholder passa a mostrar a foto automaticamente.
 */
export function PortraitPlaceholder({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-charcoal-2",
        className,
      )}
      role="img"
      aria-label={`Foto de ${name} em breve`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-line) 0px, var(--color-line) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
      <span className="relative font-heading text-6xl font-semibold text-gold/70 sm:text-7xl">
        {initials(name)}
      </span>
    </div>
  );
}
