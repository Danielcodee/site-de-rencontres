import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Handshake, ShieldCheck, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { aboutImage, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "O Quartel 365 está a nascer em Felgueiras, com abertura prevista para outubro de 2026 — a nossa missão e a filosofia por trás do nome: disciplina todos os dias do ano.",
  alternates: { canonical: "/sobre" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Disciplina",
    description: "Antes da técnica, vem o hábito. Aparecer todos os dias é o primeiro treino.",
  },
  {
    icon: Handshake,
    title: "Respeito",
    description: "Pelo treinador, pelo colega de treino e pela arte marcial. Sem exceções.",
  },
  {
    icon: Compass,
    title: "Comunidade",
    description: "Ninguém evolui sozinho. Treinamos uns pelos outros, todos os dias.",
  },
  {
    icon: TrendingUp,
    title: "Evolução constante",
    description: "Não há teto. Há sempre um detalhe técnico a apurar, um limite a testar.",
  },
];

// Roteiro até à abertura — o Quartel 365 ainda não abriu portas, por isso
// não há (ainda) uma década de história para contar, só o caminho até lá.
const timeline = [
  {
    year: "2026",
    title: "A ideia toma forma",
    description:
      "Daniel Coelho e Maria Miranda decidem fundar o Quartel 365 em Felgueiras, com uma ideia simples: treino de Muay Thai a sério, sem atalhos.",
  },
  {
    year: "Verão de 2026",
    title: "Preparação do espaço",
    description:
      "Escolha e montagem do tatami, da zona de sparring e da zona de treino funcional — tudo pensado antes de a porta abrir.",
  },
  {
    year: "Antes da abertura",
    title: "Pré-reservas abertas",
    description:
      "A grelha semanal fica definida e as turmas abrem para reserva, com vagas limitadas por turma, antes mesmo do primeiro dia.",
  },
  {
    year: "Outubro de 2026",
    title: "Abertura oficial",
    description:
      "Primeiras aulas de Muay Thai e Treino Funcional, com o Daniel Coelho — o início da comunidade Quartel 365.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre nós"
        title="Uma academia construída sobre disciplina."
        description={`O Quartel 365 está a nascer em Felgueiras com um objetivo claro: dar a quem treina Muay Thai e Treino Funcional um espaço à altura da sua exigência. Abertura prevista para ${siteConfig.openingDisplay}.`}
      />

      <section className="border-b border-line bg-ink py-24 sm:py-32">
        <div className="container-quartel grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="A nossa história" title="Do primeiro tatami a Quartel 365." />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-mist">
              <p>
                O Quartel 365 nasce da vontade do Daniel Coelho de criar, em Felgueiras, um
                espaço totalmente dedicado ao Muay Thai técnico e autêntico — sem atalhos, sem
                meios-termos.
              </p>
              <p>
                Mesmo antes de abrir portas, a prioridade é uma metodologia técnica rigorosa
                desde a primeira aula. Essa exigência, mais do que qualquer equipamento, é o que
                queremos que defina o Quartel 365 desde o primeiro dia.
              </p>
              <p>
                Abrimos em {siteConfig.openingDisplay}: instalações dedicadas, um treinador
                certificado e o objetivo de construir, desde o início, uma comunidade que vai da
                iniciação absoluta à evolução técnica contínua.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-line">
              <Image
                src={aboutImage}
                alt="Lutador de Muay Thai em posição de combate"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-charcoal py-24 sm:py-32">
        <div className="container-quartel grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="font-heading text-8xl leading-none text-outline sm:text-9xl">
              365
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="A filosofia do nome"
              title="Não acreditamos em motivação. Acreditamos em disciplina."
            />
            <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
              A motivação vai e vem — depende do dia, do sono, do humor. A disciplina não. O nome
              &ldquo;Quartel 365&rdquo; existe para lembrar isso todos os dias: o treino não é uma
              exceção na rotina, é a rotina. 365 dias por ano, com ou sem vontade, aparecemos.
            </p>
            <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">
              É essa mentalidade — mais militar do que recreativa — que distingue quem só passa
              pelo Muay Thai de quem o transforma em identidade.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-ink py-24 sm:py-32">
        <div className="container-quartel">
          <SectionHeading eyebrow="Missão & valores" title="O que nos guia todos os dias." align="center" className="mx-auto" />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal as="li" key={value.title} delay={index * 0.06} className="rounded-sm border border-line bg-charcoal p-7 text-center">
                <value.icon className="mx-auto text-oxblood" size={28} aria-hidden />
                <h3 className="mt-4 font-sans text-sm font-semibold uppercase tracking-wide text-bone">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{value.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-charcoal py-24 sm:py-32">
        <div className="container-quartel">
          <SectionHeading eyebrow="Roteiro" title="O caminho até à abertura." />
          <ol className="mt-14 space-y-10 border-l border-line pl-8">
            {timeline.map((item, index) => (
              <Reveal as="li" key={item.year} delay={index * 0.06} className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-oxblood" aria-hidden />
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold">
                  {item.year}
                </p>
                <h3 className="mt-1 font-heading text-xl text-bone">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist">{item.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
