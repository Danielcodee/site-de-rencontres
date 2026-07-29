// Conteúdo central do site. Tudo o que é texto/imagem "de negócio" vive aqui
// para ser fácil de substituir mais tarde por informação real — não é preciso
// mexer nos componentes, basta atualizar os valores abaixo.
//
// Os campos marcados com "PLACEHOLDER" têm de ser confirmados/substituídos
// antes de publicar o site (morada exata, preços, foto do treinador, etc.).

export const siteConfig = {
  name: "Quartel 365",
  shortName: "Q365",
  tagline: "Disciplina todos os dias do ano.",
  description:
    "Nova academia premium de Muay Thai e Treino Funcional em Felgueiras, a abrir em outubro de 2026. Técnica tailandesa autêntica, treinador certificado, vagas limitadas por turma.",
  url: "https://www.quartel365.pt", // PLACEHOLDER — domínio final
  locale: "pt_PT",
  founded: 2026,
  // Usados em toda a mensagem "pré-abertura" do site — o Quartel 365 ainda
  // não abriu portas.
  openingDate: "2026-10-01",
  openingDisplay: "outubro de 2026",

  contact: {
    // PLACEHOLDER — confirmar morada exata antes de publicar
    addressLine1: "Rua Comendador Antelmo Ferreira, 220",
    addressLine2: "4610-156 Felgueiras, Portugal",
    city: "Felgueiras",
    region: "Porto",
    postalCode: "4610-156",
    country: "PT",
    phoneDisplay: "933 796 669",
    phoneHref: "+351933796669",
    // Reutiliza-se o mesmo número para WhatsApp — confirmar se é o desejado.
    whatsappDisplay: "933 796 669",
    whatsappHref: "351933796669",
    email: "teamcoelhomuaythai@gmail.com",
    mbway: {
      // Número usado para receber pagamentos via MB WAY.
      number: "933 796 669",
    },
    mapsEmbedSrc:
      "https://www.google.com/maps?q=Felgueiras,Portugal&output=embed",
    mapsLinkHref: "https://www.google.com/maps/search/?api=1&query=Felgueiras+Portugal",
  },

  // Sem Facebook nem LinkedIn — o Quartel 365 não tem presença nessas redes.
  social: {
    instagram: "https://www.instagram.com/qartel365/",
    youtube: "https://www.youtube.com/@quartel365", // PLACEHOLDER
    tiktok: "https://www.tiktok.com/@quartel.3.6.5",
  },

  // Horário de terça/quinta confirmado pelo Daniel. A aula de sábado ainda
  // é PLACEHOLDER (ver CLASS_SEED em src/lib/db.ts).
  hours: [
    { day: "Terça e Quinta", hours: "06h00 – 21h30" },
    { day: "Sábado", hours: "14h00 – 19h00" },
    { day: "Segunda, Quarta, Sexta e Domingo", hours: "Open mat (sem professor)" },
  ],
};

// Dias sem aula marcada com professor — acesso livre ao espaço para treino
// autónomo. Não fazem parte do sistema de reservas (não há turma/capacidade
// associada), mas são mostrados como informação na grelha de horários.
export const openMatDays = ["Segunda", "Quarta", "Sexta", "Domingo"];

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/modalidades", label: "Modalidades" },
  { href: "/treinadores", label: "Equipa" },
  { href: "/instalacoes", label: "Instalações" },
  { href: "/contactos", label: "Contactos" },
];

export const stats = [
  { value: "2026", suffix: "", label: "Ano de abertura" },
  { value: "2", suffix: "", label: "Fundadores" },
  { value: "15", suffix: "", label: "Vagas Muay Thai" },
  { value: "5", suffix: "", label: "Vagas Treino Funcional" },
];

export type Differentiator = {
  icon: "shield" | "flame" | "users" | "trophy" | "building" | "calendar";
  title: string;
  description: string;
};

export const differentiators: Differentiator[] = [
  {
    icon: "shield",
    title: "Treinador certificado",
    description:
      "O Daniel Coelho vai acompanhar de perto cada aluno, em todas as aulas, com certificação em Muay Thai e em treino funcional.",
  },
  {
    icon: "building",
    title: "Instalações premium",
    description:
      "Tatami, zona de sparring e zona de treino funcional — o espaço está a ser preparado agora, para abrir em outubro de 2026 já pronto para treinar a sério.",
  },
  {
    icon: "users",
    title: "Comunidade Quartel",
    description:
      "Queremos um grupo que se apoia e exige mutuamente, desde o primeiro dia. Sê um dos primeiros a fazer parte.",
  },
  {
    icon: "flame",
    title: "Duas modalidades, um objetivo",
    description:
      "Muay Thai para técnica tailandesa autêntica, Treino Funcional para força e resistência — combinadas, aceleram a tua evolução.",
  },
  {
    icon: "trophy",
    title: "Acesso 24/7 com Face ID",
    description:
      "Com o plano Completo, entras na academia a qualquer hora, todos os dias, com reconhecimento facial — sem depender do horário das aulas.",
  },
  {
    icon: "calendar",
    title: "365 dias de disciplina",
    description:
      "O nome não é por acaso: acreditamos em constância, não em picos de motivação. Open mat livre em Segunda, Quarta, Sexta e Domingo para quem quer treinar por conta própria.",
  },
];

export type Modality = {
  slug: string;
  name: string;
  audience: string;
  description: string;
  bullets: string[];
  image: string;
  trainer: string;
  level: "Todos os níveis";
};

export const modalities: Modality[] = [
  {
    slug: "muay-thai",
    name: "Muay Thai",
    audience: "Para todos os níveis, do zero à evolução contínua",
    description:
      "Técnica tailandesa autêntica — da primeira guarda às combinações mais avançadas, sempre com acompanhamento técnico próximo do treinador.",
    bullets: [
      "Turmas até 15 alunos, às terças, quintas e sábados",
      "Guarda, deslocamentos, socos, cotoveladas, joelhadas e pontapés",
      "Sparring controlado e progressivo para quem já está preparado",
    ],
    image: "/images/hero-fighter.jpg",
    trainer: "Daniel Coelho",
    level: "Todos os níveis",
  },
  {
    slug: "treino-funcional",
    name: "Treino Funcional",
    audience: "Para quem quer condição física completa",
    description:
      "Treino de alta intensidade que combina força, resistência e mobilidade — o complemento perfeito ao Muay Thai ou uma modalidade própria para quem procura forma física a sério.",
    bullets: [
      "Turmas em grupo reduzido, até 5 alunos, às terças e quintas de manhã",
      "Trabalho de força, resistência cardiovascular e mobilidade",
      "Ideal para complementar o Muay Thai ou treinar de forma independente",
    ],
    image: "/images/hero-fighter.jpg",
    trainer: "Daniel Coelho",
    level: "Todos os níveis",
  },
];

export type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Aula Experimental",
    price: "5€",
    period: "1 aula",
    description: "Vem sentir o ambiente e conhecer o treinador, assim que abrirmos portas.",
    features: [
      "1 aula à escolha (Muay Thai ou Treino Funcional)",
      "Equipamento base emprestado",
      "Sem compromisso",
    ],
    cta: "Marcar aula experimental",
  },
  {
    name: "Muay Thai",
    price: "40€",
    period: "/mês",
    description: "Aulas de Muay Thai às terças, quintas e sábados.",
    features: [
      "Terças, quintas e sábados",
      "Turmas até 15 alunos",
      "Open mat livre à segunda, quarta, sexta e domingo",
    ],
    cta: "Escolher plano Muay Thai",
  },
  {
    name: "Treino Funcional",
    price: "40€",
    period: "/mês",
    description: "Treino funcional em grupo reduzido, às terças e quintas de manhã.",
    features: [
      "Terças e quintas de manhã",
      "Turmas até 5 alunos",
      "Open mat livre à segunda, quarta, sexta e domingo",
    ],
    cta: "Escolher plano Treino Funcional",
  },
  {
    name: "Completo",
    price: "65€",
    period: "/mês",
    description: "Muay Thai, Treino Funcional e acesso 24/7 à academia.",
    features: [
      "Muay Thai e Treino Funcional",
      "Acesso 24/7 com Face ID",
      "Open mat livre sempre disponível",
    ],
    highlighted: true,
    cta: "Escolher plano Completo",
  },
];

export type Trainer = {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  credentials: string[];
  bio: string;
  // PLACEHOLDER — sem foto real ainda. Quando existir, define aqui o
  // caminho (ex: "/images/trainers/daniel-coelho.jpg") e o cartão passa
  // a mostrar a foto automaticamente em vez do placeholder com iniciais.
  photo?: string;
};

// O Daniel Coelho é o único treinador da academia — dá tanto as aulas de
// Muay Thai como as de Treino Funcional. A Maria Miranda é cofundadora,
// mas não dá aulas (ver `cofounders` abaixo).
export const trainers: Trainer[] = [
  {
    slug: "daniel-coelho",
    name: "Daniel Coelho",
    role: "Cofundador & Head Coach",
    specialty: "Muay Thai & Treino Funcional",
    credentials: [
      "Instrutor certificado — Federação Portuguesa de Kickboxing e Muay Thai",
      "Certificação em treino funcional e condição física",
      "Formação técnica na Tailândia, em campos de Muay Thai tradicionais",
    ],
    bio: "Está a fundar o Quartel 365, com abertura prevista para outubro de 2026, com a ideia de trazer a Felgueiras um Muay Thai técnico e autêntico, sem atalhos. Vai ser o único treinador da academia — responsável por todas as aulas, tanto de Muay Thai como de Treino Funcional, do primeiro dia de um iniciante ao sparring mais exigente.",
  },
];

export type Cofounder = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

// Cofundadora do Quartel 365, sem participação nas aulas — responsável
// pela gestão da academia. Não usar `trainers` para ela, para não sugerir
// que dá aulas.
export const cofounders: Cofounder[] = [
  {
    slug: "maria-miranda",
    name: "Maria Miranda",
    role: "Cofundadora",
    bio: "Está a fundar o Quartel 365 ao lado do Daniel, com abertura prevista para outubro de 2026. Não vai dar aulas — é responsável pela gestão da academia, do acompanhamento aos alunos fora do tatami à organização do dia a dia.",
  },
];

// Nota: sem testemunhos de alunos — o Quartel 365 ainda não abriu portas,
// por isso não existem (ainda) alunos reais para citar. Não inventar
// testemunhos até haver alunos verdadeiros.

export type GalleryImage = {
  src: string;
  alt: string;
  category: "Tatami" | "Sparring" | "Treino Funcional" | "Comunidade";
};

// PLACEHOLDER — a mesma foto está repetida em todas as entradas até
// existirem fotos reais e distintas de cada zona da academia. Não há
// balneários no espaço (entra e sai já equipado).
export const galleryImages: GalleryImage[] = [
  { src: "/images/hero-fighter.jpg", alt: "Tatami do Quartel 365", category: "Tatami" },
  { src: "/images/hero-fighter.jpg", alt: "Zona de treino no tatami", category: "Tatami" },
  { src: "/images/hero-fighter.jpg", alt: "Zona de sparring", category: "Sparring" },
  { src: "/images/hero-fighter.jpg", alt: "Zona de sacos pesados para treino técnico", category: "Sparring" },
  { src: "/images/hero-fighter.jpg", alt: "Zona de treino funcional", category: "Treino Funcional" },
  { src: "/images/hero-fighter.jpg", alt: "Receção e área de convívio", category: "Comunidade" },
  { src: "/images/hero-fighter.jpg", alt: "Zona de aulas em grupo", category: "Comunidade" },
];

// Nota: sem blog — o Quartel 365 ainda não abriu portas, por isso ainda não
// há aulas dadas nem alunos reais sobre quem escrever. Faz sentido criar
// esta secção depois da abertura, com conteúdo genuíno.

export const faqs = [
  {
    question: "Quando abre o Quartel 365?",
    answer: `Abrimos em ${siteConfig.openingDisplay}, em Felgueiras. Já podes reservar o teu lugar nas turmas antes da abertura.`,
  },
  {
    question: "Preciso de experiência prévia para começar?",
    answer:
      "Não. As turmas têm progressão gradual e segura, pensadas tanto para quem nunca treinou como para quem já tem base técnica, sempre com acompanhamento próximo do treinador.",
  },
  {
    question: "Que equipamento preciso para a primeira aula?",
    answer:
      "Roupa confortável e água — não temos balneários, por isso vem já equipado de casa. Para a aula experimental, emprestamos ligaduras e luvas. Se decidires continuar, ajudamos-te a escolher o equipamento certo.",
  },
  {
    question: "Qual a diferença entre Muay Thai e Treino Funcional?",
    answer:
      "O Muay Thai foca-se em técnica de combate — socos, cotoveladas, joelhadas e pontapés. O Treino Funcional foca-se em força, resistência e mobilidade, sem componente técnica de combate. As duas são dadas pelo Daniel Coelho — podes escolher só uma ou combinar as duas.",
  },
  {
    question: "Como faço para reservar uma aula?",
    answer:
      "Na página \"Reservar aula\" escolhes a turma (dia e hora), vês as vagas disponíveis em tempo real e preenches o formulário. As turmas de Muay Thai têm um limite de 15 alunos e as de Treino Funcional um limite de 5 — garante o teu lugar antes da abertura, em outubro de 2026.",
  },
  {
    question: "Como posso pagar a mensalidade?",
    answer:
      `Aceitamos pagamento via MB WAY para o número ${siteConfig.contact.mbway.number}. Também podes pagar diretamente na receção, depois da abertura.`,
  },
  {
    question: "O que é o open mat?",
    answer:
      "É acesso livre ao espaço para treinares por conta própria, sem professor — disponível à segunda, quarta, sexta e domingo. Com o plano Completo, tens ainda acesso 24/7 à academia com Face ID.",
  },
  {
    question: "Posso experimentar antes de me inscrever?",
    answer:
      "Sim — a aula experimental custa 5€ e não tem compromisso. Basta reservares através da página de reservas ou por telefone.",
  },
];
