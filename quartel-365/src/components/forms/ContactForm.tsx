"use client";

import { useId, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { modalities } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formId = useId();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      type: "contact" as const,
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      program: String(data.get("program") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""),
    };

    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Não foi possível enviar a mensagem.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Ocorreu um erro inesperado.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-oxblood/40 bg-charcoal p-8 text-center" role="status">
        <p className="font-heading text-lg text-bone">
          Mensagem enviada!
        </p>
        <p className="mt-2 text-sm text-mist">
          Obrigado pelo contacto. A equipa do Quartel 365 responde-te o mais brevemente possível.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
            Nome completo *
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            className="w-full rounded-sm border border-line bg-charcoal px-4 py-3 text-sm text-bone placeholder:text-mist/60 focus-visible:border-oxblood"
            placeholder="O teu nome"
          />
        </div>
        <div>
          <label htmlFor={`${formId}-email`} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
            Email *
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-sm border border-line bg-charcoal px-4 py-3 text-sm text-bone placeholder:text-mist/60 focus-visible:border-oxblood"
            placeholder="email@exemplo.pt"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-phone`} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
            Telefone (opcional)
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-sm border border-line bg-charcoal px-4 py-3 text-sm text-bone placeholder:text-mist/60 focus-visible:border-oxblood"
            placeholder="+351 9xx xxx xxx"
          />
        </div>
        <div>
          <label htmlFor={`${formId}-program`} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
            Tenho interesse em
          </label>
          <select
            id={`${formId}-program`}
            name="program"
            defaultValue=""
            className="w-full rounded-sm border border-line bg-charcoal px-4 py-3 text-sm text-bone focus-visible:border-oxblood"
          >
            <option value="">Aula experimental gratuita</option>
            {modalities.map((program) => (
              <option key={program.slug} value={program.name}>
                {program.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
          Mensagem *
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          minLength={10}
          rows={5}
          className="w-full resize-none rounded-sm border border-line bg-charcoal px-4 py-3 text-sm text-bone placeholder:text-mist/60 focus-visible:border-oxblood"
          placeholder="Conta-nos um pouco sobre ti e o que procuras."
        />
      </div>

      {/* Honeypot anti-spam — mantido fora da vista, nunca preenchido por humanos */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-oxblood px-6 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-bone transition-colors hover:bg-oxblood-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
        Enviar mensagem
      </button>

      {status === "error" && errorMessage ? (
        <p className="text-sm text-oxblood" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
