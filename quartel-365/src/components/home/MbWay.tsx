import { Smartphone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/data";

/**
 * Secção de pagamento MB WAY — o número tem de ficar bem visível, por isso
 * fica isolado num painel próprio em vez de escondido numa lista de
 * contactos.
 */
export function MbWay() {
  return (
    <section id="mbway" className="scroll-mt-20 border-t border-line bg-ink py-24 sm:py-32">
      <div className="container-quartel">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-sm border border-gold/40 bg-charcoal px-6 py-14 text-center sm:px-14">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-gold">
              <Smartphone size={26} aria-hidden />
            </span>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Pagamentos
            </p>
            <h2 className="font-heading text-3xl text-bone sm:text-4xl">Paga por MB WAY.</h2>
            <p className="max-w-md text-sm leading-relaxed text-mist sm:text-base">
              Mensalidades, planos e aulas experimentais podem ser pagos diretamente por MB WAY,
              para o número abaixo.
            </p>
            <p className="font-heading text-4xl tracking-wide text-gold sm:text-5xl">
              {siteConfig.contact.mbway.number}
            </p>
            <p className="text-xs uppercase tracking-widest text-mist">
              Confirma sempre o valor com a receção antes de transferir
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
