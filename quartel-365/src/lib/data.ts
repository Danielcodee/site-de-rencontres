// Conteúdo central do site. Tudo o que é texto/imagem "de negócio" vive aqui
// para ser fácil de substituir mais tarde por informação real — não é preciso
// mexer nos componentes, basta atualizar os valores abaixo.
//
// Os campos marcados com "PLACEHOLDER" têm de ser confirmados/substituídos
// antes de publicar o site (morada exata, preços, fotos dos treinadores, etc.).

export const siteConfig = {
  name: "Quartel 365",
  shortName: "Q365",
  tagline: "Disciplina todos os dias do ano.",
  description:
    "Academia premium de Muay Thai e Treino Funcional em Felgueiras. Técnica tailandesa autêntica, comunidade séria, treinadores certificados — 365 dias por ano.",
  url: "https://www.quartel365.pt", // PLACEHOLDER — domínio final
  locale: "pt_PT",
  founded: 2016,

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
  { href: "/treinadores", label: "Treinadores" },
  { href: "/instalacoes", label: "Instalações" },
  { href: "/blog", label: "Blog" },
  { href: "/contactos", label: "Contactos" },
];

export const stats = [
  { value: "9", suffix: "+", label: "Anos de existência" },
  { value: "450", suffix: "+", label: "Alunos ativos" },
  { value: "2", suffix: "", label: "Treinadores certificados" },
  { value: "35", suffix: "+", label: "Aulas por semana" },
];

export type Differentiator = {
  icon: "shield" | "flame" | "users" | "trophy" | "building" | "calendar";
  title: string;
  description: string;
};

export const differentiators: Differentiator[] = [
  {
    icon: "shield",
    title: "Treinadores certificados",
    description:
      "Daniel Coelho e Maria Miranda acompanham de perto cada aluno, com certificação em Muay Thai e em treino funcional.",
  },
  {
    icon: "building",
    title: "Instalações premium",
    description:
      "Ringue, zona de sacos pesados, sala de força e balneários cuidados — um espaço pensado para treinar a sério, todos os dias.",
  },
  {
    icon: "users",
    title: "Comunidade Quartel",
    description:
      "Aqui não é só um ginásio: é um grupo que se apoia e exige mutuamente. Iniciantes e alunos mais avançados treinam lado a lado, com respeito.",
  },
  {
    icon: "flame",
    title: "Duas modalidades, um objetivo",
    description:
      "Muay Thai para técnica tailandesa autêntica, Treino Funcional para força e resistência — combinadas, aceleram a tua evolução.",
  },
  {
    icon: "trophy",
    title: "Foco em resultados",
    description:
      "Sem promessas vazias: alunos que treinam há anos continuam a evoluir, tecnicamente e fisicamente, aula após aula.",
  },
  {
    icon: "calendar",
    title: "365 dias de disciplina",
    description:
      "O nome não é por acaso: acreditamos em constância, não em picos de motivação. Horários alargados para caber na tua rotina real.",
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
    trainer: "Maria Miranda",
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
    description: "Vem sentir o ambiente e conhecer os treinadores, sem compromisso.",
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
  specialty: "Muay Thai" | "Treino Funcional";
  credentials: string[];
  bio: string;
  // PLACEHOLDER — sem foto real ainda. Quando existir, define aqui o
  // caminho (ex: "/images/trainers/daniel-coelho.jpg") e os cartões passam
  // a mostrar a foto automaticamente em vez do placeholder com iniciais.
  photo?: string;
};

export const trainers: Trainer[] = [
  {
    slug: "daniel-coelho",
    name: "Daniel Coelho",
    role: "Cofundador & Head Coach de Muay Thai",
    specialty: "Muay Thai",
    credentials: [
      "Instrutor certificado — Federação Portuguesa de Kickboxing e Muay Thai",
      "Formação técnica na Tailândia, em campos de Muay Thai tradicionais",
      "+15 anos de prática e ensino de Muay Thai",
    ],
    bio: "Cofundou o Quartel 365 em 2016 com a ideia de trazer a Felgueiras um Muay Thai técnico e autêntico, sem atalhos. Lidera todas as aulas de Muay Thai, do primeiro dia de um iniciante ao sparring mais exigente.",
  },
  {
    slug: "maria-miranda",
    name: "Maria Miranda",
    role: "Cofundadora & Treinadora de Treino Funcional",
    specialty: "Treino Funcional",
    credentials: [
      "Certificação em treino funcional e condição física",
      "Especialização em prevenção de lesões e mobilidade aplicada ao combate",
      "+10 anos de experiência em preparação física",
    ],
    bio: "Cofundou o Quartel 365 ao lado do Daniel, trazendo a componente de força e condição física que complementa o Muay Thai. Desenha e lidera todas as sessões de Treino Funcional da academia.",
  },
];

export type Testimonial = {
  name: string;
  since: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "João Pinto",
    since: "Aluno desde 2019",
    quote:
      "Entrei sem saber nada de Muay Thai e hoje treino 5x por semana. A exigência do Daniel fez toda a diferença — aqui ninguém finge que está a trabalhar.",
  },
  {
    name: "Marta Silva",
    since: "Aluna desde 2021",
    quote:
      "O que mais valorizo é o ambiente: exigente no treino, mas acolhedor fora dele. Nunca me senti julgada por ser iniciante.",
  },
  {
    name: "André Costa",
    since: "Aluno desde 2017",
    quote:
      "Já treinei em vários ginásios. O nível técnico do Quartel 365 está a outro patamar — nota-se a formação do Daniel diretamente na Tailândia.",
  },
  {
    name: "Sofia Ramos",
    since: "Aluna desde 2022",
    quote:
      "Comecei só pelo Treino Funcional com a Maria e acabei também a fazer Muay Thai. As duas modalidades juntas fizeram-me evoluir muito mais depressa.",
  },
];

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
  { src: "/images/hero-fighter.jpg", alt: "Aula em grupo de Muay Thai", category: "Comunidade" },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  cover: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "fundamentos-tecnica-de-base",
    title: "5 fundamentos técnicos que todo o iniciante devia dominar primeiro",
    excerpt:
      "Antes de pensar em combinações vistosas, há uma base técnica que decide tudo o resto. Estes são os pontos que mais trabalhamos nas primeiras semanas de Muay Thai.",
    date: "2026-06-12",
    author: "Daniel Coelho",
    cover: "/images/hero-fighter.jpg",
    tags: ["Técnica", "Muay Thai"],
    content: [
      "Quando um aluno novo entra no tatame do Quartel 365, a tentação é sempre a mesma: querer aprender o pontapé mais espetacular ou a combinação que viu num vídeo. Mas a diferença entre um praticante sólido e um praticante frágil está quase sempre na base.",
      "1. Guarda — a tua guarda é a tua primeira linha de defesa e o ponto de partida de qualquer ataque. Trabalhamos a posição das mãos, dos cotovelos e do queixo antes de qualquer coisa.",
      "2. Deslocamento — mover-se bem no ringue não é opcional. Sem uma base de pés estável, nenhuma técnica funciona sob pressão.",
      "3. Soco reto — parece simples, mas é a técnica que revela mais rapidamente erros de rotação de anca e de equilíbrio.",
      "4. Joelhada frontal — uma das armas mais eficazes do Muay Thai e também uma das mais mal executadas quando a base não está trabalhada.",
      "5. Respiração e ritmo — controlar a respiração durante o esforço é o que separa quem aguenta 3 minutos de round de quem se apaga ao segundo.",
      "Nas primeiras semanas, o foco está sempre aqui. É repetitivo, sim — mas é essa repetição que constrói a confiança para tudo o que vem a seguir.",
    ],
  },
  {
    slug: "nutricao-para-quem-treina-combate",
    title: "Nutrição para quem treina Muay Thai a sério",
    excerpt:
      "Não precisas de ser atleta profissional para beneficiar de alguns ajustes simples na alimentação. Aqui ficam as prioridades que mais impacto têm no treino.",
    date: "2026-05-03",
    author: "Maria Miranda",
    cover: "/images/hero-fighter.jpg",
    tags: ["Nutrição", "Performance"],
    content: [
      "Muitos alunos perguntam-nos o que devem comer antes e depois do treino. A resposta curta: depende dos teus objetivos, mas há princípios que se aplicam a quase todos.",
      "Antes do treino, prioriza hidratos de absorção moderada 60 a 90 minutos antes — dão energia sem pesar. Evita treinar em jejum prolongado se o treino for de alta intensidade.",
      "Depois do treino, a janela seguinte é a mais importante para recuperação: proteína de qualidade e hidratos para repor glicogénio. Não precisa de ser complicado — ovos, arroz e vegetais fazem o trabalho.",
      "Hidratação é frequentemente subestimada. Um aluno desidratado perde técnica muito antes de perder força — e é normalmente a primeira coisa que se nota num dia mais fraco.",
      "Por fim, se precisas de gerir peso ou tens objetivos específicos, fala sempre com os treinadores antes de fazer alterações drásticas — nunca cortes feitos às cegas.",
    ],
  },
  {
    slug: "muay-thai-e-treino-funcional",
    title: "Porque é que Muay Thai e Treino Funcional se complementam tão bem",
    excerpt:
      "Um não substitui o outro — mas juntos aceleram resultados. Percebe porque o Daniel e a Maria recomendam as duas modalidades a quem quer evoluir a sério.",
    date: "2026-03-22",
    author: "Daniel Coelho",
    cover: "/images/hero-fighter.jpg",
    tags: ["Treino Funcional", "Muay Thai"],
    content: [
      "É uma pergunta que ouço muitas vezes: \"só preciso de Muay Thai ou também devo fazer Treino Funcional?\" A resposta curta é que dependem um do outro mais do que parece.",
      "O Muay Thai exige técnica, mas também força explosiva, resistência cardiovascular e mobilidade nas ancas e ombros. Sem essa base física, a técnica satura mais depressa — cansas-te antes de conseguires aplicar o que treinaste.",
      "É aí que entra o Treino Funcional da Maria: sessões pensadas para construir força e resistência de forma directamente aplicável ao Muay Thai, sem o desgaste técnico de mais uma aula de sparring.",
      "Ao mesmo tempo, o Treino Funcional sozinho também beneficia de alguma exposição ao Muay Thai — a coordenação, o trabalho de core rotacional e a disciplina mental que o Muay Thai exige tornam qualquer treino físico mais eficiente.",
      "Por isso, sempre que um aluno pergunta qual das duas modalidades escolher, a resposta honesta costuma ser: começa por uma, mas experimenta as duas antes de decidir ficar só com uma.",
    ],
  },
];

export const faqs = [
  {
    question: "Preciso de experiência prévia para começar?",
    answer:
      "Não. A maioria dos nossos alunos começou do zero. As turmas têm progressão gradual e segura, com acompanhamento próximo do treinador.",
  },
  {
    question: "Que equipamento preciso para a primeira aula?",
    answer:
      "Roupa confortável e água. Para a aula experimental, emprestamos ligaduras e luvas. Se decidires continuar, ajudamos-te a escolher o equipamento certo.",
  },
  {
    question: "Qual a diferença entre Muay Thai e Treino Funcional?",
    answer:
      "O Muay Thai foca-se em técnica de combate — socos, cotoveladas, joelhadas e pontapés, com o Daniel. O Treino Funcional foca-se em força, resistência e mobilidade, com a Maria. Podes escolher só uma ou combinar as duas.",
  },
  {
    question: "Como faço para reservar uma aula?",
    answer:
      "Na página \"Reservar aula\" escolhes a turma (dia e hora), vês as vagas disponíveis em tempo real e preenches o formulário. Cada turma tem um limite de 15 alunos — quando esgota, fica marcada como completa.",
  },
  {
    question: "Como posso pagar a mensalidade?",
    answer:
      `Aceitamos pagamento via MB WAY para o número ${siteConfig.contact.mbway.number}. Também podes pagar diretamente na receção.`,
  },
  {
    question: "Posso experimentar antes de me inscrever?",
    answer:
      "Sim — a aula experimental é gratuita e sem compromisso. Basta reservares através da página de reservas ou por telefone.",
  },
];
