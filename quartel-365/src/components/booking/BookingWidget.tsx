"use client";

import { useId, useMemo, useState } from "react";
import useSWR from "swr";
import { CalendarCheck, Check, Loader2, Users } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ClassAvailability } from "@/lib/db";

const DAY_ORDER = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const POLL_INTERVAL_MS = 15_000;

type FormState = { name: string; email: string; phone: string };
type SubmitStatus = "idle" | "loading" | "success" | "error";

function availabilityLabel(klass: ClassAvailability) {
  if (klass.full) return "Turma completa";
  return `${klass.booked}/${klass.capacity} vagas`;
}

function availabilityColor(klass: ClassAvailability) {
  if (klass.full) return "text-oxblood";
  if (klass.available <= 3) return "text-gold";
  return "text-mist";
}

async function fetchClasses(url: string): Promise<ClassAvailability[]> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Falha ao carregar turmas.");
  const body = (await res.json()) as { classes: ClassAvailability[] };
  return body.classes;
}

export function BookingWidget() {
  const formId = useId();
  // SWR trata do fetch inicial, do polling (para as vagas ficarem "em
  // tempo real") e da revalidação após uma reserva — sem precisar de
  // efeitos manuais a atualizar estado.
  const { data: classes, error: loadError, mutate } = useSWR("/api/classes", fetchClasses, {
    refreshInterval: POLL_INTERVAL_MS,
  });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const groupedByDay = useMemo(() => {
    if (!classes) return [];
    return DAY_ORDER.map((day) => ({ day, classes: classes.filter((c) => c.day === day) })).filter(
      (group) => group.classes.length > 0,
    );
  }, [classes]);

  const selected = classes?.find((c) => c.id === selectedId) ?? null;

  function selectClass(klass: ClassAvailability) {
    if (klass.full) return;
    setSelectedId(klass.id);
    setStatus("idle");
    setErrorMessage(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected) return;

    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ classId: selected.id, ...form }),
      });
      const body = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(body?.error ?? "Não foi possível concluir a reserva.");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "" });
      await mutate();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Ocorreu um erro inesperado.");
      await mutate();
    }
  }

  if (loadError && !classes) {
    return (
      <p className="rounded-sm border border-line bg-charcoal p-6 text-sm text-mist">
        Não foi possível carregar as turmas neste momento. Tenta atualizar a página ou liga-nos
        diretamente.
      </p>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
      <div className="space-y-8">
        {!classes ? (
          <p className="text-sm text-mist">A carregar turmas…</p>
        ) : (
          groupedByDay.map((group) => (
            <div key={group.day}>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
                {group.day}
              </h3>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {group.classes.map((klass) => {
                  const isSelected = klass.id === selectedId;
                  return (
                    <li key={klass.id} id={klass.id} className="scroll-mt-28">
                      <button
                        type="button"
                        onClick={() => selectClass(klass)}
                        disabled={klass.full}
                        aria-pressed={isSelected}
                        className={cn(
                          "flex w-full flex-col items-start gap-1 rounded-sm border p-4 text-left transition-colors",
                          klass.full
                            ? "cursor-not-allowed border-line bg-charcoal/60 opacity-60"
                            : isSelected
                              ? "border-oxblood bg-charcoal-2"
                              : "border-line bg-charcoal hover:border-gold",
                        )}
                      >
                        <div className="flex w-full items-baseline justify-between gap-2">
                          <span className="font-heading text-lg text-bone">{klass.time}</span>
                          <span
                            className={cn(
                              "flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-wide",
                              availabilityColor(klass),
                            )}
                          >
                            <Users size={12} aria-hidden />
                            {availabilityLabel(klass)}
                          </span>
                        </div>
                        <span className="text-sm text-bone">{klass.name}</span>
                        <span className="text-xs text-mist">com {klass.trainer}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))
        )}
      </div>

      <div className="lg:sticky lg:top-28">
        <div className="rounded-sm border border-line bg-charcoal p-6 sm:p-8">
          {status === "success" ? (
            <div role="status">
              <CalendarCheck className="text-oxblood" size={28} aria-hidden />
              <p className="mt-4 font-heading text-xl text-bone">Reserva confirmada!</p>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                Guardámos o teu lugar. Se tivermos email configurado, recebes também uma
                confirmação por email com os detalhes de pagamento via MB WAY.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 font-sans text-sm font-semibold uppercase tracking-wide text-gold hover:underline"
              >
                Reservar outra aula
              </button>
            </div>
          ) : (
            <>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
                {selected ? "Turma selecionada" : "Escolhe uma turma"}
              </p>
              {selected ? (
                <div className="mt-2">
                  <p className="font-heading text-2xl text-bone">{selected.name}</p>
                  <p className="mt-1 text-sm text-mist">
                    {selected.day} às {selected.time} · com {selected.trainer}
                  </p>
                  <p className={cn("mt-1 text-sm font-medium", availabilityColor(selected))}>
                    {availabilityLabel(selected)}
                  </p>
                </div>
              ) : (
                <p className="mt-2 text-sm text-mist">
                  Seleciona uma turma na grelha ao lado para reservares o teu lugar.
                </p>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                <div>
                  <label htmlFor={`${formId}-name`} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
                    Nome completo *
                  </label>
                  <input
                    id={`${formId}-name`}
                    required
                    minLength={2}
                    autoComplete="name"
                    disabled={!selected}
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full rounded-sm border border-line bg-ink px-4 py-3 text-sm text-bone placeholder:text-mist/60 focus-visible:border-oxblood disabled:opacity-50"
                    placeholder="O teu nome"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-email`} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
                    Email *
                  </label>
                  <input
                    id={`${formId}-email`}
                    type="email"
                    required
                    autoComplete="email"
                    disabled={!selected}
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full rounded-sm border border-line bg-ink px-4 py-3 text-sm text-bone placeholder:text-mist/60 focus-visible:border-oxblood disabled:opacity-50"
                    placeholder="email@exemplo.pt"
                  />
                </div>
                <div>
                  <label htmlFor={`${formId}-phone`} className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">
                    Telefone *
                  </label>
                  <input
                    id={`${formId}-phone`}
                    type="tel"
                    required
                    minLength={9}
                    autoComplete="tel"
                    disabled={!selected}
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full rounded-sm border border-line bg-ink px-4 py-3 text-sm text-bone placeholder:text-mist/60 focus-visible:border-oxblood disabled:opacity-50"
                    placeholder="9xx xxx xxx"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!selected || status === "loading" || selected?.full}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-oxblood px-6 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-bone transition-colors hover:bg-oxblood-dark disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <Loader2 className="animate-spin" size={16} />
                  ) : (
                    <Check size={16} aria-hidden />
                  )}
                  {selected?.full ? "Turma completa" : "Confirmar reserva"}
                </button>

                {status === "error" && errorMessage ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-oxblood"
                    role="alert"
                  >
                    {errorMessage}
                  </motion.p>
                ) : null}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
