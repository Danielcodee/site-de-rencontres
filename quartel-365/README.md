# Quartel 365 — Site institucional

Site em Next.js (App Router) + TypeScript + Tailwind CSS para a academia de
Muay Thai e Treino Funcional **Quartel 365**, em Felgueiras, Portugal.
Fundada por Daniel Coelho (Muay Thai) e Maria Miranda (Treino Funcional).

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4 (tema definido em `src/app/globals.css`)
- Framer Motion (parallax ao scroll + tilt 3D ao hover nas imagens principais)
- Zod (validação dos formulários)
- Resend (envio de email — opcional, ver abaixo)
- **better-sqlite3** (base de dados das reservas de aulas — ver secção própria)
- SWR (fetch + polling das vagas em tempo real na página de reservas)

## Como correr localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de produção
npm run start   # servir a build de produção
npm run lint    # eslint
```

## Estrutura do projeto

```
src/
  app/
    page.tsx              # homepage (inclui a secção de reservas)
    sobre/                 # Sobre nós
    modalidades/            # Muay Thai + Treino Funcional, planos e horário
    treinadores/            # Daniel Coelho e Maria Miranda
    reservar/               # Página dedicada de reserva de aulas
    instalacoes/            # Galeria de instalações
    contactos/               # Formulário + morada + mapa + MB WAY
    blog/                   # Listagem + posts (blog/[slug])
    api/
      contact/               # Formulário de contacto e newsletter
      classes/                # GET — turmas com vagas disponíveis
      bookings/               # POST — criar uma reserva
    sitemap.ts, robots.ts    # SEO técnico
  components/
    layout/                 # Header, Footer
    home/                   # Secções da homepage
    booking/                 # BookingWidget (grelha de turmas + formulário)
    trainers/                # TrainerCard (usado na homepage e em /treinadores)
    forms/                   # ContactForm, NewsletterForm (client components)
    gallery/                  # Grelha de imagens com lightbox
    ui/                      # Button, SectionHeading, PageHeader, Reveal,
                              # TiltImage (parallax + tilt 3D), Placeholder
  lib/
    data.ts                  # Todo o conteúdo do site (textos, preços, morada, etc.)
    db.ts                    # Base de dados das reservas (ver abaixo)
    utils.ts                 # helper cn()
```

Praticamente todo o conteúdo de "negócio" (textos, preços, morada, horários,
redes sociais, treinadores, testemunhos, posts do blog) está centralizado em
**`src/lib/data.ts`** — não é preciso mexer nos componentes para atualizar
informação.

## Sistema de reservas de aulas

### Base de dados: porquê SQLite (`better-sqlite3`) e não Supabase

Optei por **SQLite local** (ficheiro `data/bookings.db`, criado
automaticamente na primeira execução) em vez de Supabase:

- **Zero configuração externa**: não é preciso criar conta, projeto nem
  copiar chaves de API para o site funcionar — importante para uma academia
  pequena que não quer gerir credenciais de terceiros.
- **Limite de 15 alunos garantido pela própria base de dados**: a tabela
  `bookings` tem uma *trigger* SQL (`enforce_class_capacity` em
  `src/lib/db.ts`) que recusa a inserção assim que uma turma atinge a
  capacidade. Isto é mais robusto do que validar apenas em código
  JavaScript — mesmo com pedidos em simultâneo, é impossível ultrapassar o
  limite (testado com 16 pedidos em paralelo à mesma turma: exatamente 15
  são aceites, o 16.º recebe sempre erro).
- **Suficiente para o volume real de uma academia**: não há razão para a
  complexidade de um servidor de base de dados externo para gerir algumas
  dezenas de turmas e algumas centenas de reservas por semana.

**Aviso para produção**: se este site vier a ser alojado numa plataforma
*serverless* com múltiplas instâncias e disco efémero (ex: Vercel), um
ficheiro SQLite local **não é fiável** — cada instância pode ver uma cópia
diferente do ficheiro. Nesse cenário, substitui `src/lib/db.ts` por
Supabase (Postgres) ou Turso (SQLite distribuído), mantendo a mesma lógica
de trigger de capacidade a nível de base de dados. Para um servidor Node
tradicional e persistente (VPS, Docker, `next start`), a solução atual é
suficiente e robusta.

O ficheiro `data/bookings.db` está no `.gitignore` — é gerado e semeado
automaticamente (turmas fixas definidas em `CLASS_SEED`, em `src/lib/db.ts`)
na primeira vez que a aplicação corre.

### Como funciona

1. `GET /api/classes` devolve a lista de turmas com vagas calculadas em
   tempo real (`capacity - reservas atuais`).
2. A página `/reservar` (e a secção equivalente na homepage) mostra essa
   grelha através do componente `BookingWidget`, que usa SWR com
   `refreshInterval` para manter as vagas atualizadas sem recarregar a
   página.
3. Ao escolher uma turma e submeter o formulário, `POST /api/bookings`
   valida os dados com Zod e tenta inserir a reserva. Se a turma estiver
   completa, a base de dados recusa a inserção e a API responde 409 — o
   botão mostra sempre "Turma completa" e fica desativado assim que a
   turma esgota.
4. Se `RESEND_API_KEY` estiver configurada, é enviado um email de
   confirmação ao aluno (com bcc para `CONTACT_TO_EMAIL`) com os detalhes
   da turma e o número de MB WAY para pagamento. Sem essa variável, a
   reserva fica sempre guardada — só o email não é enviado.

## Imagens e placeholders

- `public/images/hero-fighter.jpg`: fotografia de ambiente/Muay Thai
  **gerada por IA** (Artlist/Seedream), usada no hero e como imagem
  genérica de Muay Thai/Treino Funcional nas várias páginas. Confirma que o
  teu plano Artlist cobre uso comercial de imagens geradas por IA antes de
  publicar, ou substitui por fotos reais da academia.
- **Fotos do Daniel Coelho e da Maria Miranda**: ainda não existem fotos
  reais, por isso os cartões de treinador mostram um placeholder com as
  iniciais (`PortraitPlaceholder`, em `src/components/ui/Placeholder.tsx`)
  em vez de uma foto genérica — para não mostrar uma pessoa errada. Para
  adicionar a foto real de cada treinador, define o campo `photo` em
  `trainers` (`src/lib/data.ts`), ex:
  `photo: "/images/trainers/daniel-coelho.jpg"` — o cartão passa a mostrar
  a foto automaticamente.
- Galeria de instalações (`src/lib/data.ts` → `galleryImages`): as 7
  entradas ainda apontam para a mesma fotografia genérica, até existirem
  fotos reais e distintas de cada zona da academia.

## Tipografia

Fraunces (títulos, editorial/serifada) + Inter (texto corrido e elementos de
interface), carregadas via `<link>` direto à Google Fonts no `layout.tsx`
(em vez de `next/font/google`, cujo self-hosting já produziu, neste
ambiente, subsets de fontes com glifos acentuados em falta).

## Animações 3D (parallax + tilt)

O componente `TiltImage`/`TiltFrame` (`src/components/ui/TiltImage.tsx`)
aplica parallax subtil ao scroll e uma inclinação 3D que segue o rato ao
passar por cima — usado no hero, nos cartões de treinadores e nas imagens
das modalidades. Respeita `prefers-reduced-motion`: com a preferência
ativa, as imagens ficam estáticas.

## Formulário de contacto / newsletter / reservas

Os endpoints `src/app/api/contact/route.ts` e `src/app/api/bookings/route.ts`
validam os dados com Zod e, se `RESEND_API_KEY` estiver definida (ver
`.env.example`), enviam o email via [Resend](https://resend.com). Sem essa
variável, os pedidos são validados e registados nos logs do servidor, mas
não é enviado nenhum email — útil para testar o site antes de teres
credenciais de email definitivas.

```bash
cp .env.example .env.local
# preencher RESEND_API_KEY e CONTACT_TO_EMAIL
```

## Antes de publicar — checklist de conteúdo real

Os seguintes valores em `src/lib/data.ts` estão marcados com `PLACEHOLDER`
e têm de ser confirmados/substituídos:

- Morada exata (`siteConfig.contact.addressLine1/2`)
- Email de contacto
- Links das redes sociais (Instagram, Facebook, YouTube, TikTok)
- Domínio final (`siteConfig.url`) — usado em metadata, sitemap e JSON-LD
- Preços dos planos (`plans`)
- Fotos reais dos treinadores e das instalações (ver secção acima)

O número de telefone/MB WAY (933 796 669) já é real e está definido em
`siteConfig.contact.phoneDisplay`/`mbway.number` — usado no cabeçalho, no
rodapé, em `/contactos` e na secção de pagamento MB WAY.

Depois de confirmar a morada, atualiza também `siteConfig.contact.mapsEmbedSrc`
com o link de embed do Google Maps para a localização exata (Google Maps →
Partilhar → Incorporar um mapa → copiar o `src` do iframe).

As turmas reserváveis (dia, hora, capacidade) estão definidas em
`CLASS_SEED`, em `src/lib/db.ts` — a grelha semanal em `/modalidades` e a
página `/reservar` derivam ambas dos mesmos dados, por isso só precisas de
as atualizar num sítio.
