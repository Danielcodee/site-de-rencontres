"use client";

import { useId, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const emailId = useId();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;

    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email, company }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Não foi possível subscrever. Tenta novamente.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Ocorreu um erro.");
    }
  }

  if (status === "success") {
    return (
      <p className={cn("text-sm font-medium text-oxblood", className)} role="status">
        Subscrição confirmada. Bem-vindo ao Quartel 365.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-3 sm:flex-row", className)} noValidate>
      <label htmlFor={emailId} className="sr-only">
        O teu email
      </label>
      <input
        id={emailId}
        name="email"
        type="email"
        required
        placeholder="o-teu-email@exemplo.pt"
        className="w-full flex-1 rounded-sm border border-line bg-charcoal px-4 py-3 text-sm text-bone placeholder:text-mist focus-visible:border-oxblood"
      />
      {/* Honeypot anti-spam — mantido fora da vista, nunca preenchido por humanos */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-oxblood px-6 py-3 font-sans text-sm font-semibold uppercase tracking-widest text-bone transition-colors hover:bg-oxblood-dark disabled:opacity-60"
      >
        {status === "loading" ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
        Subscrever
      </button>
      {status === "error" && errorMessage ? (
        <p className="text-sm text-oxblood sm:basis-full" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
