export type MoveKey = 'jab' | 'direto' | 'gancho' | 'upper' | 'elbow' | 'knee' | 'kick' | 'lowkick';

export function resolveMove(label: string): MoveKey {
  const l = label.toLowerCase();
  if (l.includes('jab')) return 'jab';
  if (l.includes('direto')) return 'direto';
  if (l.includes('gancho')) return 'gancho';
  if (l.includes('upper')) return 'upper';
  if (l.includes('cotovelo')) return 'elbow';
  if (l.includes('joelho')) return 'knee';
  if (l.includes('canelada')) return 'lowkick';
  if (l.includes('chute') || l.includes('perna')) return 'kick';
  return 'jab';
}

interface StrikeGuide {
  name: string;
  cues: string[];
}

export const STRIKE_GUIDES: Record<MoveKey, StrikeGuide> = {
  jab: {
    name: 'Jab',
    cues: [
      'Sai do ombro da frente, em linha reta até ao alvo.',
      'O punho roda para baixo no momento do impacto (nós dos dedos primeiro).',
      'O ombro sobe ligeiramente a proteger o queixo.',
      'A mão de trás fica sempre junto à cara.',
      'Volta pelo mesmo caminho, rápido — não "empurres" o soco.',
    ],
  },
  direto: {
    name: 'Direto (Cruzado)',
    cues: [
      'Sai da mão de trás, com rotação da anca e do calcanhar de trás.',
      'O braço estica por completo, em linha reta.',
      'O ombro do braço que soca sobe a proteger o queixo.',
      'A outra mão mantém-se sempre junto à cara.',
      'O peso do corpo transfere para a perna da frente no impacto.',
    ],
  },
  gancho: {
    name: 'Gancho',
    cues: [
      'Cotovelo dobrado a 90°, braço quase paralelo ao chão.',
      'O movimento nasce da rotação da anca e do tronco, não só do braço.',
      'O punho vira para dentro (palma para baixo) no momento do impacto.',
      'O queixo esconde-se atrás do ombro do braço que ataca.',
      'O pé do mesmo lado gira ligeiramente para gerar potência.',
    ],
  },
  upper: {
    name: 'Upper (Uppercut)',
    cues: [
      'Sai de baixo para cima, com uma flexão curta do joelho antes do soco.',
      'O cotovelo aponta para baixo antes de disparar.',
      'O punho vira para dentro (palma virada para o corpo) no impacto.',
      'A outra mão protege sempre a cara.',
      'Não inclines demasiado o tronco para trás.',
    ],
  },
  elbow: {
    name: 'Cotovelo',
    cues: [
      'Curta distância — é o cotovelo que lidera o movimento, não o punho.',
      'Pode ser horizontal, ascendente ou descendente, sempre junto ao corpo.',
      'O ombro roda junto com o golpe para dar potência.',
      'A outra mão mantém-se sempre em guarda alta.',
    ],
  },
  knee: {
    name: 'Joelhada',
    cues: [
      'Puxa o alvo (ou o ar, no treino solo) na direção do joelho, não o contrário.',
      'Levanta o joelho na direção do alvo, com a anca projetada para a frente.',
      'O pé de apoio aponta ligeiramente para fora, para dares equilíbrio.',
      'As mãos mantêm-se sempre altas, junto à cabeça.',
    ],
  },
  kick: {
    name: 'Chute circular',
    cues: [
      'Roda por completo o pé de apoio na direção do alvo.',
      'A perna que chuta gira desde a anca — acerta com a canela, não com o pé.',
      'Os braços mantêm o equilíbrio; as mãos nunca descem da guarda.',
      'A perna volta rapidamente à posição de guarda depois do impacto.',
    ],
  },
  lowkick: {
    name: 'Canelada (Low Kick)',
    cues: [
      'Mesma rotação do chute circular, mas com trajetória mais baixa — ao nível da coxa.',
      'O corpo inclina-se ligeiramente para o lado oposto, para dar alcance.',
      'Acerta com a canela, mantendo o pé relaxado.',
      'Recupera a guarda imediatamente após o impacto.',
    ],
  },
};
