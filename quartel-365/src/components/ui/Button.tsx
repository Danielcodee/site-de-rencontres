import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-heading text-sm font-semibold uppercase tracking-widest transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary: "bg-flame text-bone hover:bg-flame-dark",
  outline: "border border-line text-bone hover:border-flame hover:text-flame",
  ghost: "text-bone hover:text-flame",
};

type ButtonVariant = keyof typeof variants;

type ButtonAsLink = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
};

export function ButtonLink({ variant = "primary", className, ...props }: ButtonAsLink) {
  return <Link className={cn(base, variants[variant], className)} {...props} />;
}

type ButtonAsButton = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
};

export function Button({ variant = "primary", className, ...props }: ButtonAsButton) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}
