// Conteúdo central do site. Tudo o que é texto/imagem "de negócio" vive aqui
// para ser fácil de substituir mais tarde por informação real — não é preciso
// mexer nos componentes, basta atualizar os valores abaixo.
//
// Os campos marcados com "PLACEHOLDER" têm de ser confirmados/substituídos
// antes de publicar o site (morada exata, telefone, preços, fotos, etc.).

export const siteConfig = {
  name: "Quartel 365",
  shortName: "Q365",
  tagline: "Disciplina todos os dias do ano.",
  description:
    "Academia premium de Muay Thai e Treino Funcional em Felgueiras. Treino sério, comunidade forte e instrutor certificado — 365 dias por ano.",
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
    // PLACEHOLDER — número de telefone
    phoneDisplay: "+351 255 123 456",
    phoneHref: "+351255123456",
    // PLACEHOLDER — telemóvel/WhatsApp
    whatsappDisplay: "+351 912 345 678",
    whatsappHref: "351912345678",
    email: "geral@quartel365.pt", // PLACEHOLDER
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
  { href: "/programas", label: "Programas" },
  { href: "/instrutores", label: "Instrutor" },
  { href: "/instalacoes", label: "Instalações" },
  { href: "/blog", label: "Blog" },
  { href: "/contactos", label: "Contactos" },
];

export const stats = [
  { value: "9", suffix: "+", label: "Anos de existência" },
  { value: "450", suffix: "+", label: "Alunos ativos" },
  { value: "2", suffix: "", label: "Modalidades de treino" },
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
    title: "Instrutor certificado",
    description:
      "Certificação nacional em Muay Thai e em treino funcional, com anos de prática e ensino — acompanhamento próximo em cada aula.",
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
      "Muay Thai para técnica e disciplina, Treino Funcional para força e resistência — combinadas, aceleram a tua evolução.",
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

export type Program = {
  slug: string;
  name: string;
  audience: string;
  description: string;
  bullets: string[];
  image: string;
  level: "Todos os níveis";
};

export const programs: Program[] = [
  {
    slug: "muay-thai",
    name: "Muay Thai",
    audience: "Para todos os níveis, do zero à evolução contínua",
    description:
      "Aulas de Muay Thai para todas as idades e níveis — da primeira guarda às combinações mais avançadas, sempre com acompanhamento técnico próximo do instrutor.",
    bullets: [
      "Turmas para quem começa do zero e para quem já tem base técnica",
      "Guarda, deslocamentos, socos, cotoveladas, joelhadas e pontapés",
      "Sparring controlado e progressivo para quem já está preparado",
    ],
    image: "/images/hero-fighter.jpg",
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
    description: "Vem sentir o ambiente e conhecer o instrutor, sem compromisso.",
    features: [
      "1 aula de Muay Thai à escolha",
      "Equipamento base emprestado",
      "Avaliação inicial com instrutor",
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

export type ScheduleClass = {
  time: string;
  name: string;
  level: string;
};

export type ScheduleDay = {
  day: string;
  classes: ScheduleClass[];
};

// PLACEHOLDER — grelha de horários ilustrativa, confirmar horário real
export const weeklySchedule: ScheduleDay[] = [
  {
    day: "Segunda",
    classes: [
      { time: "07h00", name: "Treino Funcional", level: "Todos" },
      { time: "18h30", name: "Muay Thai", level: "Todos" },
      { time: "20h00", name: "Muay Thai", level: "Todos" },
    ],
  },
  {
    day: "Terça",
    classes: [
      { time: "19h00", name: "Treino Funcional", level: "Todos" },
      { time: "20h00", name: "Muay Thai", level: "Todos" },
    ],
  },
  {
    day: "Quarta",
    classes: [
      { time: "07h00", name: "Treino Funcional", level: "Todos" },
      { time: "18h30", name: "Muay Thai", level: "Todos" },
      { time: "20h00", name: "Muay Thai", level: "Todos" },
    ],
  },
  {
    day: "Quinta",
    classes: [
      { time: "19h00", name: "Treino Funcional", level: "Todos" },
      { time: "20h00", name: "Muay Thai", level: "Todos" },
    ],
  },
  {
    day: "Sexta",
    classes: [
      { time: "07h00", name: "Treino Funcional", level: "Todos" },
      { time: "18h30", name: "Muay Thai", level: "Todos" },
    ],
  },
  {
    day: "Sábado",
    classes: [
      { time: "10h00", name: "Muay Thai", level: "Todos" },
      { time: "11h00", name: "Treino Funcional", level: "Todos" },
    ],
  },
];

export type Instructor = {
  slug: string;
  name: string;
  role: string;
  credentials: string[];
  bio: string;
  image: string;
};

export const instructors: Instructor[] = [
  {
    slug: "nuno-ferreira",
    name: "Nuno Ferreira",
    role: "Head Coach & Fundador",
    credentials: [
      "Instrutor certificado — Federação Portuguesa de Kickboxing e Muay Thai",
      "Certificação em treino funcional e condição física",
      "+15 anos de prática e ensino de Muay Thai",
    ],
    bio: "Fundou o Quartel 365 em 2016 com a ideia de trazer um ambiente de treino sério a Felgueiras — sem perder o lado humano. É responsável por todas as aulas de Muay Thai e Treino Funcional, acompanhando de perto a evolução técnica e física de cada aluno.",
    image: "/images/hero-fighter.jpg",
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
      "Entrei sem saber nada de Muay Thai e hoje treino 5x por semana. A exigência do instrutor fez toda a diferença — aqui ninguém finge que está a trabalhar.",
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
      "Já treinei em vários ginásios. O nível técnico do Quartel 365 está a outro patamar — nota-se a experiência do instrutor.",
  },
  {
    name: "Sofia Ramos",
    since: "Aluna desde 2022",
    quote:
      "Comecei só pelo Treino Funcional e acabei também a fazer Muay Thai. As duas modalidades juntas fizeram-me evoluir muito mais depressa.",
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
      "Antes de pensar em combinações vistosas, há uma base técnica que decide tudo o resto. Estes são os pontos que mais trabalhamos nas primeiras semanas de Iniciação.",
    date: "2026-06-12",
    author: "Nuno Ferreira",
    cover: "/images/hero-fighter.jpg",
    tags: ["Técnica", "Iniciação"],
    content: [
      "Quando um aluno novo entra no tatame do Quartel 365, a tentação é sempre a mesma: querer aprender o pontapé mais espetacular ou a combinação que viu num vídeo. Mas a diferença entre um praticante sólido e um praticante frágil está quase sempre na base.",
      "1. Guarda — a tua guarda é a tua primeira linha de defesa e o ponto de partida de qualquer ataque. Trabalhamos a posição das mãos, dos cotovelos e do queixo antes de qualquer coisa.",
      "2. Deslocamento — mover-se bem no ringue não é opcional. Sem uma base de pés estável, nenhuma técnica funciona sob pressão.",
      "3. Soco reto — parece simples, mas é a técnica que revela mais rapidamente erros de rotação de anca e de equilíbrio.",
      "4. Joelhada frontal — uma das armas mais eficazes do Muay Thai e também uma das mais mal executadas quando a base não está trabalhada.",
      "5. Respiração e ritmo — controlar a respiração durante o esforço é o que separa quem aguenta 3 minutos de round de quem se apaga ao segundo.",
      "Nas primeiras semanas de Iniciação, o foco está sempre aqui. É repetitivo, sim — mas é essa repetição que constrói a confiança para tudo o que vem a seguir.",
    ],
  },
  {
    slug: "nutricao-para-quem-treina-combate",
    title: "Nutrição para quem treina Muay Thai a sério",
    excerpt:
      "Não precisas de ser atleta profissional para beneficiar de alguns ajustes simples na alimentação. Aqui ficam as prioridades que mais impacto têm no treino.",
    date: "2026-05-03",
    author: "Nuno Ferreira",
    cover: "/images/hero-fighter.jpg",
    tags: ["Nutrição", "Performance"],
    content: [
      "Muitos alunos perguntam-nos o que devem comer antes e depois do treino. A resposta curta: depende dos teus objetivos, mas há princípios que se aplicam a quase todos.",
      "Antes do treino, prioriza hidratos de absorção moderada 60 a 90 minutos antes — dão energia sem pesar. Evita treinar em jejum prolongado se o treino for de alta intensidade.",
      "Depois do treino, a janela seguinte é a mais importante para recuperação: proteína de qualidade e hidratos para repor glicogénio. Não precisa de ser complicado — ovos, arroz e vegetais fazem o trabalho.",
      "Hidratação é frequentemente subestimada. Um aluno desidratado perde técnica muito antes de perder força — e é normalmente a primeira coisa que se nota num dia mais fraco.",
      "Por fim, se precisas de gerir peso ou tens objetivos específicos, fala sempre com o instrutor antes de fazer alterações drásticas — nunca cortes feitos às cegas.",
    ],
  },
  {
    slug: "muay-thai-e-treino-funcional",
    title: "Porque é que Muay Thai e Treino Funcional se complementam tão bem",
    excerpt:
      "Um não substitui o outro — mas juntos aceleram resultados. Percebe porque recomendamos as duas modalidades a quem quer evoluir a sério.",
    date: "2026-03-22",
    author: "Nuno Ferreira",
    cover: "/images/hero-fighter.jpg",
    tags: ["Treino Funcional", "Muay Thai"],
    content: [
      "É uma pergunta que ouço muitas vezes: \"só preciso de Muay Thai ou também devo fazer Treino Funcional?\" A resposta curta é que dependem um do outro mais do que parece.",
      "O Muay Thai exige técnica, mas também força explosiva, resistência cardiovascular e mobilidade nas ancas e ombros. Sem essa base física, a técnica satura mais depressa — cansas-te antes de conseguires aplicar o que treinaste.",
      "É aí que entra o Treino Funcional: sessões pensadas para construir força e resistência de forma directamente aplicável ao Muay Thai, sem o desgaste técnico de mais uma aula de sparring.",
      "Ao mesmo tempo, o Treino Funcional sozinho também beneficia de alguma exposição ao Muay Thai — a coordenação, o trabalho de core rotacional e a disciplina mental que o Muay Thai exige tornam qualquer treino físico mais eficiente.",
      "Por isso, sempre que um aluno pergunta qual das duas modalidades escolher, a resposta honesta costuma ser: começa por uma, mas experimenta as duas antes de decidir ficar só com uma.",
    ],
  },
];

export const faqs = [
  {
    question: "Preciso de experiência prévia para começar?",
    answer:
      "Não. A maioria dos nossos alunos começou do zero. Temos turmas de Iniciação pensadas exatamente para isso, com progressão gradual e segura.",
  },
  {
    question: "Que equipamento preciso para a primeira aula?",
    answer:
      "Roupa confortável e água. Para a aula experimental, emprestamos ligaduras e luvas. Se decidires continuar, ajudamos-te a escolher o equipamento certo.",
  },
  {
    question: "Qual a diferença entre Muay Thai e Treino Funcional?",
    answer:
      "O Muay Thai foca-se em técnica de combate — socos, cotoveladas, joelhadas e pontapés. O Treino Funcional foca-se em força, resistência e mobilidade, sem componente técnica de combate. Podes escolher só uma ou combinar as duas.",
  },
  {
    question: "Posso experimentar antes de me inscrever?",
    answer:
      "Sim — a aula experimental é gratuita e sem compromisso. Basta marcares através do formulário de contacto ou por telefone.",
  },
];
