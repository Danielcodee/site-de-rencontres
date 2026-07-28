import { Technique } from './types';

export const TECHNIQUES: Technique[] = [
  // BOXE
  {
    id: 'boxe-iniciante-jab-guarda',
    sport: 'boxe',
    level: 'iniciante',
    name: 'Guarda, Jab e Deslocamento',
    objective: 'Construir a base: postura, guarda alta e o soco mais importante do boxe.',
    cues: [
      'Pés à largura dos ombros, pé de trás ligeiramente levantado no calcanhar.',
      'Mãos junto à cara, cotovelos protegendo o tronco.',
      'Jab sai em linha reta e volta pelo mesmo caminho — não "empurres" o soco.',
      'Move-te em pequenos passos, nunca cruzando os pés.',
    ],
    soloDrills: [
      { title: 'Shadow boxing – guarda e jab', duration: '3 x 3 min', instructions: 'Em frente ao espelho, pratica manter a guarda alta enquanto atiras jabs a andar para a frente, trás e lados.' },
      { title: 'Jab no saco', duration: '4 x 2 min', instructions: 'Jabs simples e duplos no saco, focando em voltar sempre à guarda depois de cada soco.' },
    ],
    combos: [
      { label: 'Jab simples', sequence: [{ number: '1', label: 'Jab' }] },
      { label: 'Jab duplo', sequence: [{ number: '1', label: 'Jab' }, { number: '1', label: 'Jab' }] },
    ],
  },
  {
    id: 'boxe-intermedio-combinacoes',
    sport: 'boxe',
    level: 'intermedio',
    name: 'Combinações 1-2-3 e Esquiva',
    objective: 'Ligar socos em sequência e introduzir defesa ativa com esquiva de cabeça.',
    cues: [
      'Jab-Direto-Gancho (1-2-3): roda a anca no direto, mantém o queixo protegido no gancho.',
      'Esquiva com flexão de joelhos, não só do tronco.',
      'Depois de esquivar, responde imediatamente com um soco (slip and counter).',
    ],
    soloDrills: [
      { title: 'Combinações no saco', duration: '5 x 3 min', instructions: 'Alterna 1-2, 1-2-3 e 1-1-2, sempre a voltar à guarda entre séries.' },
      { title: 'Shadow com esquiva imaginária', duration: '4 x 2 min', instructions: 'Imagina um soco a chegar e pratica esquiva + contra-ataque em shadow boxing.' },
    ],
    combos: [
      { label: '1-2 (Jab, Direto)', sequence: [{ number: '1', label: 'Jab' }, { number: '2', label: 'Direto' }] },
      { label: '1-2-3 (Jab, Direto, Gancho)', sequence: [{ number: '1', label: 'Jab' }, { number: '2', label: 'Direto' }, { number: '3', label: 'Gancho' }] },
      { label: '1-1-2 (Jab duplo, Direto)', sequence: [{ number: '1', label: 'Jab' }, { number: '1', label: 'Jab' }, { number: '2', label: 'Direto' }] },
    ],
  },
  {
    id: 'boxe-profissional-contra-ataque',
    sport: 'boxe',
    level: 'profissional',
    name: 'Contra-ataque e Trabalho de Ângulos',
    objective: 'Sair da linha reta de ataque e explorar ângulos após defesa.',
    cues: [
      'Após parry ou esquiva, pivota no pé da frente para criar ângulo de 45°.',
      'Usa feints para abrir a guarda do adversário antes da combinação real.',
      'Varia o ritmo: pausas seguidas de explosões curtas.',
    ],
    soloDrills: [
      { title: 'Shadow com ângulos', duration: '6 x 3 min', instructions: 'A cada combinação, pivota e muda de ângulo antes de continuar, simulando um adversário à tua frente.' },
      { title: 'Saco pesado – feint e explosão', duration: '5 x 3 min', instructions: 'Finta um soco, recua meio passo, e explode com uma combinação de 3-4 golpes.' },
    ],
    combos: [
      { label: '1-2-3-2', sequence: [{ number: '1', label: 'Jab' }, { number: '2', label: 'Direto' }, { number: '3', label: 'Gancho' }, { number: '2', label: 'Direto' }] },
      { label: '3-2 (contra-ataque)', sequence: [{ number: '3', label: 'Gancho' }, { number: '2', label: 'Direto' }] },
    ],
  },

  // MUAY THAI
  {
    id: 'muaythai-iniciante-clinch-basico',
    sport: 'muay-thai',
    level: 'iniciante',
    name: 'Postura, Chute Circular e Base do Clinch',
    objective: 'Aprender o chute circular (roundhouse kick) e a postura de clinch.',
    cues: [
      'Roda a anca completamente no chute, acertando com a canela, não com o pé.',
      'Mãos sempre altas a proteger a cara ao chutar.',
      'No clinch, mantém os cotovelos fechados e a cabeça no peito do adversário.',
    ],
    soloDrills: [
      { title: 'Chutes no ar por perna', duration: '5 x 10 chutes', instructions: 'Chuta devagar focando na rotação da anca e no equilíbrio na perna de apoio.' },
      { title: 'Shadow com joelhos', duration: '3 x 3 min', instructions: 'Simula clinch imaginário e pratica joelhadas rectas e circulares.' },
    ],
  },
  {
    id: 'muaythai-intermedio-cotovelos',
    sport: 'muay-thai',
    level: 'intermedio',
    name: 'Cotovelos e Combinações com Canelada',
    objective: 'Introduzir cotoveladas e ligar mãos + canelada em combinação.',
    cues: [
      'Cotovelo horizontal roda com o ombro, cotovelo vertical sobe em linha com o corpo.',
      'Depois de uma combinação de mãos, encaixa a canelada na perna de apoio do adversário.',
    ],
    soloDrills: [
      { title: 'Saco – mãos + canelada', duration: '5 x 3 min', instructions: 'Combinação: 1-2 seguido de canelada com a perna de trás.' },
      { title: 'Shadow de cotovelos', duration: '4 x 2 min', instructions: 'Alterna cotovelo horizontal, vertical e ascendente devagar, controlando a trajetória.' },
    ],
    combos: [
      {
        label: '1-2 + Canelada',
        sequence: [{ number: '1', label: 'Jab' }, { number: '2', label: 'Direto' }, { label: 'Canelada (perna trás)' }],
      },
    ],
  },
  {
    id: 'muaythai-profissional-teep-timing',
    sport: 'muay-thai',
    level: 'profissional',
    name: 'Teep de Distância e Timing Defensivo',
    objective: 'Controlar a distância com o teep (pontapé frontal) e quebrar o ritmo do adversário.',
    cues: [
      'Teep sai do quadril, não da perna — usa-o para interromper avanços.',
      'Trabalha o "check" (bloqueio de canela) como resposta automática a chutes.',
      'Combina teep + entrada rápida para criar aberturas.',
    ],
    soloDrills: [
      { title: 'Teep no saco pesado', duration: '5 x 10 repetições', instructions: 'Teeps fortes e rápidos, recuperando sempre a guarda entre cada um.' },
      { title: 'Shadow de checks', duration: '5 x 2 min', instructions: 'Simula chutes a chegar e pratica levantar o joelho para "check" seguido de contra-ataque.' },
    ],
  },

  // KICKBOXING
  {
    id: 'kickboxing-iniciante-low-kick',
    sport: 'kickboxing',
    level: 'iniciante',
    name: 'Low Kick e Guarda em Movimento',
    objective: 'Introduzir o low kick e manter a guarda enquanto te movimentas.',
    cues: [
      'Roda o pé de apoio na direção do chute para gerar potência sem perder equilíbrio.',
      'Mantém as mãos na guarda durante todo o movimento, não as baixes ao chutar.',
    ],
    soloDrills: [
      { title: 'Low kicks alternados', duration: '4 x 10 por perna', instructions: 'Pratica devagar, focando em não perder o equilíbrio na perna de apoio.' },
      { title: 'Shadow com deslocamento', duration: '3 x 3 min', instructions: 'Movimenta-te em círculo mantendo a guarda, intercalando com low kicks.' },
    ],
  },
  {
    id: 'kickboxing-intermedio-combos-mao-perna',
    sport: 'kickboxing',
    level: 'intermedio',
    name: 'Combos de Mãos + Pernas',
    objective: 'Ligar socos e pontapés na mesma sequência com fluidez.',
    cues: [
      'Termina sempre a combinação com o golpe mais forte (normalmente o chute rodado).',
      'Recupera a guarda imediatamente após o último golpe.',
    ],
    soloDrills: [
      { title: 'Saco – combo 1-2-chute', duration: '5 x 3 min', instructions: 'Jab, direto, chute circular com a perna de trás, recuperar guarda.' },
      { title: 'Shadow fluido', duration: '4 x 2 min', instructions: 'Alterna combinações de mãos puras com combinações mistas mão+perna.' },
    ],
    combos: [
      {
        label: '1-2 + Chute circular',
        sequence: [{ number: '1', label: 'Jab' }, { number: '2', label: 'Direto' }, { label: 'Chute circular (perna trás)' }],
      },
    ],
  },
  {
    id: 'kickboxing-profissional-ritmo',
    sport: 'kickboxing',
    level: 'profissional',
    name: 'Controlo de Ritmo e Feints Avançados',
    objective: 'Usar mudanças de ritmo e feints para controlar o round.',
    cues: [
      'Alterna entre pressão constante e pausas táticas para confundir o oponente.',
      'Usa feints de chute para abrir combinações de mão e vice-versa.',
    ],
    soloDrills: [
      { title: 'Shadow com mudança de ritmo', duration: '6 x 3 min', instructions: 'Alterna 20s intensos com 10s de movimentação lenta e feints, repetindo o ciclo.' },
    ],
  },

  // MMA
  {
    id: 'mma-iniciante-sprawl',
    sport: 'mma',
    level: 'iniciante',
    name: 'Sprawl (Defesa de Queda) Básico',
    objective: 'Aprender a defender uma queda simples empurrando as ancas para trás.',
    cues: [
      'Ao sentir o ataque à perna, empurra as ancas para trás e para baixo.',
      'Mantém o peso sobre o adversário, não sobre os teus braços.',
    ],
    soloDrills: [
      { title: 'Sprint para sprawl', duration: '5 repetições', instructions: 'A partir da guarda, salta para trás em sprawl imaginando um ataque à perna, repete explosivamente.' },
    ],
  },
  {
    id: 'mma-intermedio-transicao',
    sport: 'mma',
    level: 'intermedio',
    name: 'Transição Em Pé → Clinch → Chão',
    objective: 'Praticar a fluidez entre as três fases da luta em MMA.',
    cues: [
      'Do shadow em pé, simula entrada em clinch e depois derrube controlado.',
      'Mantém sempre uma mão de controlo e outra a proteger a cara nas transições.',
    ],
    soloDrills: [
      { title: 'Shadow de transições', duration: '5 x 3 min', instructions: 'Simula: combinação em pé → entrada em clinch → simulação de queda → posição no chão.' },
    ],
  },
  {
    id: 'mma-profissional-ground-and-pound',
    sport: 'mma',
    level: 'profissional',
    name: 'Controlo Posicional e Ground and Pound',
    objective: 'Manter controlo de posição no chão enquanto gera dano.',
    cues: [
      'Prioriza sempre a posição antes da finalização ou do dano.',
      'Usa a base (peso distribuído) antes de libertar golpes do chão.',
    ],
    soloDrills: [
      { title: 'Simulação solo de montada', duration: '5 x 2 min', instructions: 'No colchão, pratica a postura de montada e golpes controlados no ar, focando na base.' },
    ],
  },

  // JIU-JITSU
  {
    id: 'jiujitsu-iniciante-guarda-fechada',
    sport: 'jiu-jitsu',
    level: 'iniciante',
    name: 'Guarda Fechada e Postura',
    objective: 'Aprender a manter a guarda fechada e a base defensiva.',
    cues: [
      'Quadris colados ao adversário, tornozelos cruzados nas costas.',
      'Controla as mangas ou pulsos para impedir a postura do adversário.',
    ],
    soloDrills: [
      { title: 'Solo drill – hip escape (shrimping)', duration: '4 x 10 repetições', instructions: 'Pratica o movimento de fuga de anca no chão, essencial para todas as posições de guarda.' },
    ],
  },
  {
    id: 'jiujitsu-intermedio-passagem',
    sport: 'jiu-jitsu',
    level: 'intermedio',
    name: 'Passagem de Guarda Básica',
    objective: 'Introduzir conceitos de pressão e passagem de guarda.',
    cues: [
      'Controla um lado do corpo antes de tentar passar para o outro.',
      'Mantém a pressão no quadril do adversário durante a passagem.',
    ],
    soloDrills: [
      { title: 'Solo drill – técnica de base e pressão', duration: '5 x 2 min', instructions: 'Pratica movimentos de base baixa e mudanças de nível sem parceiro, simulando pressão de passagem.' },
    ],
  },
  {
    id: 'jiujitsu-profissional-finalizacoes',
    sport: 'jiu-jitsu',
    level: 'profissional',
    name: 'Encadeamento de Finalizações',
    objective: 'Ligar ameaças de finalização para criar dilemas ao adversário.',
    cues: [
      'Se a chave de braço for defendida, transita fluidamente para triângulo ou omoplata.',
      'Usa o movimento de reação do adversário a teu favor.',
    ],
    soloDrills: [
      { title: 'Shadow grappling', duration: '5 x 3 min', instructions: 'No colchão, simula sequências de finalização em fluxo, sem parceiro, focando nas transições.' },
    ],
  },

  // LUTA OLÍMPICA
  {
    id: 'luta-iniciante-postura',
    sport: 'luta-olimpica',
    level: 'iniciante',
    name: 'Postura de Luta e Penetration Step',
    objective: 'Base de luta e o passo de entrada para o ataque à perna.',
    cues: [
      'Joelhos flexionados, peso baixo, costas retas.',
      'No penetration step, o joelho da frente quase toca o chão perto do pé do adversário.',
    ],
    soloDrills: [
      { title: 'Penetration steps', duration: '5 x 8 repetições', instructions: 'Pratica o passo de entrada explosivo, alternando a perna de ataque.' },
    ],
  },
  {
    id: 'luta-intermedio-sprawl-avancado',
    sport: 'luta-olimpica',
    level: 'intermedio',
    name: 'Defesa de Ataques à Perna',
    objective: 'Reagir a ataques simples e duplos à perna.',
    cues: [
      'Recua a perna atacada e empurra a cabeça do adversário para baixo.',
      'Mantém sempre a base larga para não perderes o equilíbrio.',
    ],
    soloDrills: [
      { title: 'Sprawl explosivo', duration: '6 repetições', instructions: 'Simula um ataque à perna e reage com sprawl explosivo, repetindo com boa recuperação.' },
    ],
  },
  {
    id: 'luta-profissional-transicoes-chao',
    sport: 'luta-olimpica',
    level: 'profissional',
    name: 'Controlo e Transições no Chão',
    objective: 'Manter e melhorar posição de controlo após a queda.',
    cues: [
      'Prioriza sempre a pressão no centro de massa do adversário.',
      'Antecipa a fuga do adversário e corta o ângulo antes que aconteça.',
    ],
    soloDrills: [
      { title: 'Solo – drills de base no chão', duration: '5 x 2 min', instructions: 'Pratica mudanças de posição e base no colchão, simulando resistência do adversário.' },
    ],
  },
];

export function getTechniquesFor(sport: string, level: string): Technique[] {
  return TECHNIQUES.filter((t) => t.sport === sport && t.level === level);
}
