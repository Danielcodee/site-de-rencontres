import { Sport } from './types';

export const SPORTS: Sport[] = [
  { id: 'boxe', name: 'Boxe', emoji: '🥊', description: 'Trabalho de mãos, jogo de pernas e defesa.' },
  { id: 'muay-thai', name: 'Muay Thai', emoji: '🦵', description: 'As "oito armas": punhos, cotovelos, joelhos e canelas.' },
  { id: 'kickboxing', name: 'Kickboxing', emoji: '🥋', description: 'Combinações de socos e pontapés em pé.' },
  { id: 'mma', name: 'MMA', emoji: '🤼', description: 'Luta mista: em pé, clinch e solo.' },
  { id: 'jiu-jitsu', name: 'Jiu-Jitsu Brasileiro', emoji: '🥋', description: 'Grappling, controlo posicional e finalizações.' },
  { id: 'luta-olimpica', name: 'Luta Olímpica', emoji: '🤸', description: 'Quedas, controlo e transições no chão.' },
];

export const LEVEL_LABEL: Record<string, string> = {
  iniciante: 'Iniciante',
  intermedio: 'Intermédio',
  profissional: 'Profissional',
};
