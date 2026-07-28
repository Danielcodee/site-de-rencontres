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
    "Academia premium de Muay Thai em Felgueiras. Treino sério, comunidade forte e instrutores certificados — 365 dias por ano.",
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
  { href: "/instrutores", label: "Instrutores" },
  { href: "/instalacoes", label: "Instalações" },
  { href: "/blog", label: "Blog" },
  { href: "/contactos", label: "Contactos" },
];

export const stats = [
  { value: "9", suffix: "+", label: "Anos de existência" },
  { value: "450", suffix: "+", label: "Alunos ativos" },
  { value: "6", suffix: "", label: "Instrutores certificados" },
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
    title: "Instrutores certificados",
    description:
      "Equipa técnica com certificação nacional e internacional em Muay Thai, com percurso competitivo comprovado dentro e fora de Portugal.",
  },
  {
    icon: "building",
    title: "Instalações premium",
    description:
      "Ringue de competição, zona de sacos pesados, sala de força e balneários cuidados — um espaço pensado para treinar a sério, todos os dias.",
  },
  {
    icon: "users",
    title: "Comunidade Quartel",
    description:
      "Aqui não é só um ginásio: é um grupo que se apoia e exige mutuamente. Iniciantes e competidores treinam lado a lado, com respeito.",
  },
  {
    icon: "flame",
    title: "Metodologia progressiva",
    description:
      "Planos de treino estruturados por nível, da iniciação à competição, com avaliações periódicas de evolução técnica e física.",
  },
  {
    icon: "trophy",
    title: "Foco em resultados",
    description:
      "Alunos do Quartel 365 já representaram o clube em competições regionais e nacionais, com apoio total da equipa técnica.",
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
  level: "Iniciante" | "Intermédio" | "Avançado" | "Todos os níveis" | "Crianças";
};

export const programs: Program[] = [
  {
    slug: "iniciacao",
    name: "Muay Thai — Iniciação",
    audience: "Para quem começa do zero",
    description:
      "Base técnica sólida: guarda, deslocamentos, socos, cotoveladas, joelhadas e pontapés. Sem pressão de competir — só de aprender bem.",
    bullets: [
      "Turmas reduzidas para correção individual",
      "Sem experiência prévia necessária",
      "Foco em técnica, condição física e postura",
    ],
    image: "/images/programs/iniciacao.svg",
    level: "Iniciante",
  },
  {
    slug: "avancado",
    name: "Muay Thai — Avançado",
    audience: "Para alunos com base técnica",
    description:
      "Combinações complexas, clinch, sparring técnico e preparação tática. Intensidade mais alta, exigência mais alta.",
    bullets: [
      "Sparring controlado e progressivo",
      "Trabalho de clinch e defesa avançada",
      "Preparação física orientada ao combate",
    ],
    image: "/images/programs/avancado.svg",
    level: "Avançado",
  },
  {
    slug: "cardio-kickboxing",
    name: "Cardio Kickboxing / Fitness",
    audience: "Para quem quer forma física com técnica de combate",
    description:
      "Treino de alta intensidade baseado em Muay Thai, sem contacto, para condição física, queima calórica e libertação de stress.",
    bullets: [
      "Sem contacto — foco em condição física",
      "Ideal para complementar outros treinos",
      "Aulas dinâmicas em grupo",
    ],
    image: "/images/programs/fitness.svg",
    level: "Todos os níveis",
  },
  {
    slug: "competicao",
    name: "Equipa de Competição",
    audience: "Para atletas selecionados",
    description:
      "Preparação específica para competição amadora e profissional, com plano individualizado, acompanhamento próximo e presença em eventos.",
    bullets: [
      "Acesso por convite/avaliação da equipa técnica",
      "Planeamento de peso e performance",
      "Acompanhamento em competições oficiais",
    ],
    image: "/images/programs/competicao.svg",
    level: "Avançado",
  },
  {
    slug: "quartel-kids",
    name: "Quartel Kids",
    audience: "Dos 6 aos 12 anos",
    description:
      "Introdução ao Muay Thai adaptada a crianças: disciplina, coordenação motora, respeito e confiança, num ambiente seguro e supervisionado.",
    bullets: [
      "Turmas separadas por faixa etária",
      "Ênfase em disciplina e respeito",
      "Sem sparring de contacto pleno",
    ],
    image: "/images/programs/kids.svg",
    level: "Crianças",
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
    description: "Vem sentir o ambiente e conhecer a equipa, sem compromisso.",
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
      "Acesso a Muay Thai ou Cardio Kickboxing",
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
      "Acesso a todas as modalidades",
      "Prioridade em workshops e eventos",
    ],
    highlighted: true,
    cta: "Escolher plano Ilimitado",
  },
  {
    name: "Quartel Kids",
    price: "29€", // PLACEHOLDER
    period: "/mês",
    description: "Plano dedicado a crianças dos 6 aos 12 anos.",
    features: [
      "2x aulas por semana",
      "Turma exclusiva por faixa etária",
      "Reunião trimestral com encarregados de educação",
    ],
    cta: "Inscrever criança",
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
      { time: "07h00", name: "Muay Thai — Avançado", level: "Avançado" },
      { time: "12h30", name: "Cardio Kickboxing", level: "Todos" },
      { time: "18h30", name: "Muay Thai — Iniciação", level: "Iniciante" },
      { time: "20h00", name: "Muay Thai — Avançado", level: "Avançado" },
    ],
  },
  {
    day: "Terça",
    classes: [
      { time: "18h00", name: "Quartel Kids", level: "Crianças" },
      { time: "19h00", name: "Cardio Kickboxing", level: "Todos" },
      { time: "20h00", name: "Equipa de Competição", level: "Avançado" },
    ],
  },
  {
    day: "Quarta",
    classes: [
      { time: "07h00", name: "Muay Thai — Avançado", level: "Avançado" },
      { time: "12h30", name: "Cardio Kickboxing", level: "Todos" },
      { time: "18h30", name: "Muay Thai — Iniciação", level: "Iniciante" },
      { time: "20h00", name: "Muay Thai — Avançado", level: "Avançado" },
    ],
  },
  {
    day: "Quinta",
    classes: [
      { time: "18h00", name: "Quartel Kids", level: "Crianças" },
      { time: "19h00", name: "Cardio Kickboxing", level: "Todos" },
      { time: "20h00", name: "Equipa de Competição", level: "Avançado" },
    ],
  },
  {
    day: "Sexta",
    classes: [
      { time: "07h00", name: "Muay Thai — Avançado", level: "Avançado" },
      { time: "18h30", name: "Muay Thai — Iniciação", level: "Iniciante" },
      { time: "20h00", name: "Sparring livre", level: "Intermédio+" },
    ],
  },
  {
    day: "Sábado",
    classes: [
      { time: "10h00", name: "Muay Thai — Todos os níveis", level: "Todos" },
      { time: "11h30", name: "Quartel Kids", level: "Crianças" },
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
      "+15 anos de prática competitiva",
      "Ex-competidor amador nacional",
    ],
    bio: "Fundou o Quartel 365 em 2016 com a ideia de trazer um ambiente de treino sério a Felgueiras — sem perder o lado humano. Lidera a metodologia técnica de toda a academia e acompanha de perto a equipa de competição.",
    image: "/images/instructors/instrutor-01.svg",
  },
  {
    slug: "rui-santos",
    name: "Rui Santos",
    role: "Instrutor Principal — Muay Thai Avançado",
    credentials: [
      "Certificação internacional em Muay Thai (Tailândia)",
      "+10 anos de experiência a lecionar",
      "Especialista em clinch e trabalho de curta distância",
    ],
    bio: "Formou-se diretamente com treinadores tailandeses e trouxe essa base técnica para o Quartel 365. Responsável pelas turmas avançadas e pela preparação tática pré-competição.",
    image: "/images/instructors/instrutor-02.svg",
  },
  {
    slug: "catarina-oliveira",
    name: "Catarina Oliveira",
    role: "Instrutora — Cardio Kickboxing & Iniciação",
    credentials: [
      "Certificação em treino funcional e condição física",
      "Instrutora de Muay Thai recreativo",
      "Especialista em introdução técnica para adultos",
    ],
    bio: "É o primeiro contacto de muitos alunos com o Muay Thai. A sua paciência e clareza pedagógica tornam a curva de aprendizagem inicial muito mais natural.",
    image: "/images/instructors/instrutor-03.svg",
  },
  {
    slug: "tiago-almeida",
    name: "Tiago Almeida",
    role: "Instrutor — Quartel Kids",
    credentials: [
      "Formação em desporto infantil e juvenil",
      "Instrutor certificado de Muay Thai",
      "5 anos dedicados a turmas de crianças",
    ],
    bio: "Especializou-se em ensinar Muay Thai a crianças, com foco em disciplina, respeito e desenvolvimento motor — sempre num ambiente seguro e positivo.",
    image: "/images/instructors/instrutor-04.svg",
  },
];

export type Testimonial = {
  name: string;
  since: string;
  quote: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "João Pinto",
    since: "Aluno desde 2019",
    quote:
      "Entrei sem saber nada de Muay Thai e hoje treino 5x por semana. A exigência da equipa técnica fez toda a diferença — aqui ninguém finge que está a trabalhar.",
    avatar: "/images/avatars/aluno-01.svg",
  },
  {
    name: "Marta Silva",
    since: "Aluna desde 2021",
    quote:
      "O que mais valorizo é o ambiente: exigente no treino, mas acolhedor fora dele. Nunca me senti julgada por ser iniciante.",
    avatar: "/images/avatars/aluno-02.svg",
  },
  {
    name: "André Costa",
    since: "Aluno desde 2017",
    quote:
      "Já treinei em vários ginásios. O nível técnico dos instrutores do Quartel 365 está a outro patamar — nota-se a experiência internacional.",
    avatar: "/images/avatars/aluno-03.svg",
  },
  {
    name: "Rita Teixeira",
    since: "Encarregada de educação",
    quote:
      "O meu filho mudou de atitude desde que começou no Quartel Kids. Mais confiante, mais focado e mais respeitador em casa também.",
    avatar: "/images/avatars/aluno-04.svg",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: "Ringue" | "Ginásio" | "Balneários" | "Comunidade";
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/ringue-01.svg", alt: "Ringue de competição do Quartel 365", category: "Ringue" },
  { src: "/images/gallery/ringue-02.svg", alt: "Zona de sparring junto ao ringue principal", category: "Ringue" },
  { src: "/images/gallery/sacos-01.svg", alt: "Zona de sacos pesados para treino técnico", category: "Ginásio" },
  { src: "/images/gallery/musculacao-01.svg", alt: "Sala de força e condição física", category: "Ginásio" },
  { src: "/images/gallery/balnearios-01.svg", alt: "Balneários do Quartel 365", category: "Balneários" },
  { src: "/images/gallery/recepcao-01.svg", alt: "Receção e área de convívio", category: "Comunidade" },
  { src: "/images/gallery/aula-grupo-01.svg", alt: "Aula em grupo de Muay Thai", category: "Comunidade" },
  { src: "/images/gallery/kids-01.svg", alt: "Turma do Quartel Kids em treino", category: "Comunidade" },
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
    author: "Rui Santos",
    cover: "/images/blog/post-01.svg",
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
    author: "Catarina Oliveira",
    cover: "/images/blog/post-02.svg",
    tags: ["Nutrição", "Performance"],
    content: [
      "Muitos alunos perguntam-nos o que devem comer antes e depois do treino. A resposta curta: depende dos teus objetivos, mas há princípios que se aplicam a quase todos.",
      "Antes do treino, prioriza hidratos de absorção moderada 60 a 90 minutos antes — dão energia sem pesar. Evita treinar em jejum prolongado se o treino for de alta intensidade.",
      "Depois do treino, a janela seguinte é a mais importante para recuperação: proteína de qualidade e hidratos para repor glicogénio. Não precisa de ser complicado — ovos, arroz e vegetais fazem o trabalho.",
      "Hidratação é frequentemente subestimada. Um aluno desidratado perde técnica muito antes de perder força — e é normalmente a primeira coisa que os instrutores notam num dia mais fraco.",
      "Por fim, para quem está em fase de competição e precisa de gerir peso, recomendamos sempre acompanhamento próximo da equipa técnica — nunca cortes de peso feitos às cegas.",
    ],
  },
  {
    slug: "um-dia-na-vida-de-um-competidor",
    title: "Um dia na vida de um competidor do Quartel 365",
    excerpt:
      "Da preparação física à gestão mental antes de subir ao ringue — como é, na prática, o dia de treino de um atleta da nossa equipa de competição.",
    date: "2026-03-22",
    author: "Nuno Ferreira",
    cover: "/images/blog/post-03.svg",
    tags: ["Competição", "Comunidade"],
    content: [
      "A equipa de competição do Quartel 365 treina com uma rotina diferente da dos restantes alunos — mais volume, mais especificidade e mais acompanhamento individual.",
      "O dia costuma começar cedo, com trabalho de condição física antes do horário normal de aulas. Segue-se trabalho técnico individualizado com foco nos pontos fracos identificados na semana anterior.",
      "À noite, juntam-se às turmas avançadas para sparring controlado — sempre supervisionado, sempre com objetivo técnico definido, nunca só para \"bater\".",
      "Nas semanas antes de uma competição, o acompanhamento intensifica-se: gestão de peso, ajustes técnicos finos e trabalho mental para gerir a pressão do dia do evento.",
      "É um caminho exigente, mas é também o que dá à comunidade do Quartel 365 uma referência de exigência — mesmo para quem nunca vai competir, ver este trabalho de perto eleva o nível de todos.",
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
    question: "Qual a idade mínima para o Quartel Kids?",
    answer:
      "As turmas Quartel Kids recebem crianças dos 6 aos 12 anos, divididas por faixa etária e nível de desenvolvimento motor.",
  },
  {
    question: "Posso experimentar antes de me inscrever?",
    answer:
      "Sim — a aula experimental é gratuita e sem compromisso. Basta marcares através do formulário de contacto ou por telefone.",
  },
];
