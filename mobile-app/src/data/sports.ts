import { Sport } from './types';

export const SPORTS: Sport[] = [
  { id: 'boxe', name: 'Boxe', description: 'Trabalho de mãos, jogo de pernas e defesa.' },
  { id: 'muay-thai', name: 'Muay Thai', description: 'As "oito armas": punhos, cotovelos, joelhos e canelas.' },
  { id: 'kickboxing', name: 'Kickboxing', description: 'Combinações de socos e pontapés em pé.' },
  { id: 'mma', name: 'MMA', description: 'Luta mista: em pé, clinch e solo.' },
  { id: 'jiu-jitsu', name: 'Jiu-Jitsu Brasileiro', description: 'Grappling, controlo posicional e finalizações.' },
  { id: 'luta-olimpica', name: 'Luta Olímpica', description: 'Quedas, controlo e transições no chão.' },
];

export const LEVEL_LABEL: Record<string, string> = {
  iniciante: 'Iniciante',
  intermedio: 'Intermédio',
  profissional: 'Profissional',
};
