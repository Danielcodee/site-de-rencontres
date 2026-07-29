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
    email: "geral@quartel365.pt", // PLACEHOLDER
    mbway: {
      // Número usado para receber pagamentos via MB WAY.
      number: "933 796 669",
    },
    mapsEmbedSrc:
      "https://www.google.com/maps?q=Felgueiras,Portugal&output=embed",
    mapsLinkHref: "https://www.google.com/maps/search/?api=1&query=Felgueiras+Portugal",
  },

  social: {
    instagram: "https://www.instagram.com/quartel365/", // PLACEHOLDER
    facebook: "https://www.facebook.com/quartel365/", // PLACEHOLDER
    youtube: "https://www.youtube.com/@quartel365", // PLACEHOLDER
    tiktok: "https://www.tiktok.com/@quartel365", // PLACEHOLDER
  },

  hours: [
    { day: "Segunda a Sexta", hours: "07h00 – 22h00" },
    { day: "Sábado", hours: "09h00 – 14h00" },
    { day: "Domingo", hours: "Encerrado" },
  ],
};

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
  { value: "2", suffix: "", label: "Modalidades" },
  { value: "15", suffix: "", label: "Vagas por turma" },
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
      "Ringue, zona de sacos pesados, sala de força e balneários — o espaço está a ser preparado agora, para abrir em outubro de 2026 já pronto para treinar a sério.",
  },
  {
    icon: "users",
    title: "Comunidade Quartel",
    description:
      "Não queremos ser só mais um ginásio: queremos um grupo que se apoia e exige mutuamente, desde o primeiro dia. Sê um dos primeiros a fazer parte.",
  },
  {
    icon: "flame",
    title: "Duas modalidades, um objetivo",
    description:
      "Muay Thai para técnica tailandesa autêntica, Treino Funcional para força e resistência — combinadas, aceleram a tua evolução.",
  },
  {
    icon: "trophy",
    title: "Foco em resultados desde o primeiro dia",
    description:
      "Sem promessas vazias: a estrutura, o método e o acompanhamento estão pensados para te fazerem evoluir desde a primeira aula, em outubro de 2026.",
  },
  {
    icon: "calendar",
    title: "365 dias de disciplina",
    description:
      "O nome não é por acaso: acreditamos em constância, não em picos de motivação. Horários alargados para caber na tua rotina real, a partir da abertura.",
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
      "Turmas para quem começa do zero e para quem já tem base técnica",
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
      "Sessões em grupo, ritmo elevado",
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
  price: string; // PLACEHOLDER — confirmar preçário final
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Aula Experimental",
    price: "Grátis",
    period: "1 aula",
    description: "Vem sentir o ambiente e conhecer o treinador, assim que abrirmos portas.",
    features: [
      "1 aula de Muay Thai à escolha",
      "Equipamento base emprestado",
      "Avaliação inicial com o treinador",
    ],
    cta: "Marcar aula experimental",
  },
  {
    name: "Base",
    price: "39€", // PLACEHOLDER
    period: "/mês",
    description: "Para quem quer construir hábito com 2 treinos por semana.",
    features: [
      "2x aulas por semana",
      "Acesso a Muay Thai ou Treino Funcional",
      "Acompanhamento de evolução técnica",
    ],
    cta: "Escolher plano Base",
  },
  {
    name: "Ilimitado",
    price: "59€", // PLACEHOLDER
    period: "/mês",
    description: "Acesso total à grelha de horários, sem limites de aulas.",
    features: [
      "Aulas ilimitadas todos os dias",
      "Acesso a Muay Thai e Treino Funcional",
      "Prioridade em workshops e eventos",
    ],
    highlighted: true,
    cta: "Escolher plano Ilimitado",
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
      "+15 anos de prática e ensino de Muay Thai",
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
    bio: "Está a fundar o Quartel 365 ao lado do Daniel, com abertura prevista para outubro de 2026. Não vai dar aulas — é responsável pela gestão da academia, do acompanhamento aos alunos fora do tatame à organização do dia a dia.",
  },
];

// Nota: sem testemunhos de alunos — o Quartel 365 ainda não abriu portas,
// por isso não existem (ainda) alunos reais para citar. Não inventar
// testemunhos até haver alunos verdadeiros.

export type GalleryImage = {
  src: string;
  alt: string;
  category: "Ringue" | "Ginásio" | "Balneários" | "Comunidade";
};

// PLACEHOLDER — a mesma foto está repetida em todas as entradas até
// existirem fotos reais e distintas de cada zona da academia.
export const galleryImages: GalleryImage[] = [
  { src: "/images/hero-fighter.jpg", alt: "Ringue do Quartel 365", category: "Ringue" },
  { src: "/images/hero-fighter.jpg", alt: "Zona de treino junto ao ringue principal", category: "Ringue" },
  { src: "/images/hero-fighter.jpg", alt: "Zona de sacos pesados para treino técnico", category: "Ginásio" },
  { src: "/images/hero-fighter.jpg", alt: "Sala de força e condição física", category: "Ginásio" },
  { src: "/images/hero-fighter.jpg", alt: "Balneários do Quartel 365", category: "Balneários" },
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
      "Roupa confortável e água. Para a aula experimental, emprestamos ligaduras e luvas. Se decidires continuar, ajudamos-te a escolher o equipamento certo.",
  },
  {
    question: "Qual a diferença entre Muay Thai e Treino Funcional?",
    answer:
      "O Muay Thai foca-se em técnica de combate — socos, cotoveladas, joelhadas e pontapés. O Treino Funcional foca-se em força, resistência e mobilidade, sem componente técnica de combate. As duas são dadas pelo Daniel Coelho — podes escolher só uma ou combinar as duas.",
  },
  {
    question: "Como faço para reservar uma aula?",
    answer:
      "Na página \"Reservar aula\" escolhes a turma (dia e hora), vês as vagas disponíveis em tempo real e preenches o formulário. Cada turma tem um limite de 15 alunos — garante o teu lugar antes da abertura, em outubro de 2026.",
  },
  {
    question: "Como posso pagar a mensalidade?",
    answer:
      `Aceitamos pagamento via MB WAY para o número ${siteConfig.contact.mbway.number}. Também podes pagar diretamente na receção, depois da abertura.`,
  },
  {
    question: "Posso experimentar antes de me inscrever?",
    answer:
      "Sim — a aula experimental é gratuita e sem compromisso. Basta reservares através da página de reservas ou por telefone.",
  },
];
