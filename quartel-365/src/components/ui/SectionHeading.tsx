import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl leading-[1.1] tracking-tight text-bone sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
