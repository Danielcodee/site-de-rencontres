# Quartel 365 — Site institucional

Site em Next.js (App Router) + TypeScript + Tailwind CSS para a academia de
Muay Thai **Quartel 365**, em Felgueiras, Portugal.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4 (tema definido em `src/app/globals.css`)
- Framer Motion (animações subtis de entrada/hover)
- Zod (validação do formulário de contacto)
- Resend (envio de email — opcional, ver abaixo)

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
  app/                 # rotas (App Router)
    page.tsx            # homepage
    sobre/               # Sobre nós
    programas/           # Programas + planos + horário
    instrutores/         # O instrutor
    instalacoes/         # Galeria de instalações
    contactos/           # Formulário + morada + mapa
    blog/                # Listagem + posts (blog/[slug])
    api/contact/          # API route do formulário e newsletter
    sitemap.ts, robots.ts # SEO técnico
  components/
    layout/              # Header, Footer
    home/                # Secções específicas da homepage
    forms/               # ContactForm, NewsletterForm (client components)
    gallery/              # Grelha de imagens com lightbox
    ui/                  # Button, SectionHeading, PageHeader, Reveal, ícones
  lib/
    data.ts              # TODO o conteúdo do site (textos, preços, morada, etc.)
    utils.ts             # helper cn()
```

Praticamente todo o conteúdo de "negócio" (textos, preços, morada, horários,
redes sociais, instrutor, testemunhos, posts do blog) está centralizado em
**`src/lib/data.ts`** — não é preciso mexer nos componentes para atualizar
informação.

## Imagens (`public/images/hero-fighter.jpg`)

Por pedido explícito, o site usa **uma única fotografia** em todas as
páginas (hero, sobre, programas, instrutor, galeria, blog) em vez de imagens
distintas por secção. É uma fotografia **gerada por IA** (Artlist/Seedream),
não uma foto real da academia. Antes de publicar:

- Confirma que o teu plano Artlist cobre o uso comercial de imagens geradas
  por IA (os termos variam entre plano gratuito e subscrições pagas).
- **Recomendado**: substitui por fotos reais e distintas por secção — é
  especialmente importante na galeria de instalações
  (`src/lib/data.ts` → `galleryImages`), onde as 7 entradas apontam
  atualmente para a mesma imagem (não faz sentido um visitante ver a mesma
  foto repetida 7 vezes numa galeria).
- Para trocar a imagem: substitui o ficheiro `public/images/hero-fighter.jpg`
  mantendo o nome, ou atualiza os caminhos em `src/lib/data.ts` (procura por
  `/images/hero-fighter.jpg`) para apontar para ficheiros novos.

## Formulário de contacto / newsletter

O endpoint `src/app/api/contact/route.ts` valida os dados com Zod e, se
`RESEND_API_KEY` estiver definida (ver `.env.example`), envia o email via
[Resend](https://resend.com). Sem essa variável, o pedido é validado e
registado nos logs do servidor, mas não é enviado nenhum email — útil para
testar o site antes de teres credenciais de email definitivas.

```bash
cp .env.example .env.local
# preencher RESEND_API_KEY e CONTACT_TO_EMAIL
```

## Antes de publicar — checklist de conteúdo real

Os seguintes valores em `src/lib/data.ts` estão marcados com `PLACEHOLDER`
e têm de ser confirmados/substituídos:

- Morada exata (`siteConfig.contact.addressLine1/2`)
- Telefone e WhatsApp
- Email de contacto
- Links das redes sociais (Instagram, Facebook, YouTube, TikTok)
- Domínio final (`siteConfig.url`) — usado em metadata, sitemap e JSON-LD
- Preços dos planos (`plans`)
- Horário semanal de aulas (`weeklySchedule`)
- Fotos reais (ver secção acima)

Depois de confirmar a morada, atualiza também `siteConfig.contact.mapsEmbedSrc`
com o link de embed do Google Maps para a localização exata (Google Maps →
Partilhar → Incorporar um mapa → copiar o `src` do iframe).
