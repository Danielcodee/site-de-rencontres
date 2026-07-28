import { WorkoutPlan } from './types';

export const WORKOUT_PLANS: Record<string, WorkoutPlan> = {
  iniciante: {
    level: 'iniciante',
    summary: 'Foco em construir base de força, resistência cardiovascular e mobilidade sem sobrecarregar o corpo.',
    weeklyStructure: '3 sessões por semana, com pelo menos 1 dia de descanso entre cada uma.',
    sessions: [
      {
        id: 'ini-1',
        day: 'Sessão 1',
        focus: 'Força de corpo inteiro',
        warmup: '5 min de saltos à corda + mobilidade articular (ombros, ancas, tornozelos).',
        exercises: [
          { name: 'Agachamento com peso do corpo', sets: '3 x 12' },
          { name: 'Flexões (de joelhos se necessário)', sets: '3 x 8-10' },
          { name: 'Prancha', sets: '3 x 20-30s' },
          { name: 'Remada invertida ou elástico', sets: '3 x 10' },
        ],
        cooldown: 'Alongamentos estáticos 5 min, foco em ombros e ancas.',
      },
      {
        id: 'ini-2',
        day: 'Sessão 2',
        focus: 'Condicionamento cardiovascular',
        warmup: '5 min de shadow boxing leve.',
        exercises: [
          { name: 'Corrida contínua ou bicicleta', sets: '20 min ritmo moderado' },
          { name: 'Burpees', sets: '3 x 8', notes: 'Ritmo controlado, técnica antes de velocidade.' },
          { name: 'Mountain climbers', sets: '3 x 20' },
        ],
        cooldown: 'Caminhada leve 5 min + respiração profunda.',
      },
      {
        id: 'ini-3',
        day: 'Sessão 3',
        focus: 'Core e mobilidade específica',
        warmup: '5 min mobilidade dinâmica de anca e coluna.',
        exercises: [
          { name: 'Prancha lateral', sets: '3 x 20s cada lado' },
          { name: 'Elevação de pernas deitado', sets: '3 x 12' },
          { name: 'Ponte de glúteos', sets: '3 x 15' },
          { name: 'Rotação de tronco com bastão/toalha', sets: '3 x 12' },
        ],
        cooldown: 'Alongamento completo 8-10 min.',
      },
    ],
  },
  intermedio: {
    level: 'intermedio',
    summary: 'Aumento de intensidade com treino de força específico, condicionamento por intervalos e trabalho de potência.',
    weeklyStructure: '4 sessões por semana, alternando força/potência com condicionamento.',
    sessions: [
      {
        id: 'int-1',
        day: 'Sessão 1',
        focus: 'Força — membros inferiores',
        warmup: '8 min: corda + mobilidade dinâmica + ativação de glúteos.',
        exercises: [
          { name: 'Agachamento búlgaro', sets: '4 x 10 cada perna' },
          { name: 'Levantamento terra romeno (halteres/barra)', sets: '4 x 8' },
          { name: 'Saltos ao caixote (box jumps)', sets: '3 x 6' },
          { name: 'Prancha com toque de ombro', sets: '3 x 12' },
        ],
        cooldown: 'Alongamento + foamroller pernas, 8 min.',
      },
      {
        id: 'int-2',
        day: 'Sessão 2',
        focus: 'Condicionamento em intervalos (HIIT)',
        warmup: '5 min shadow boxing progressivo.',
        exercises: [
          { name: 'Sprints de 30s / descanso 30s', sets: '8 rondas' },
          { name: 'Battle ropes ou saco pesado', sets: '5 x 1 min' },
          { name: 'Burpees com salto', sets: '4 x 10' },
        ],
        cooldown: 'Caminhada + respiração 5 min.',
      },
      {
        id: 'int-3',
        day: 'Sessão 3',
        focus: 'Força — membros superiores e core',
        warmup: '8 min mobilidade de ombros e coluna torácica.',
        exercises: [
          { name: 'Flexões explosivas (clap push-ups ou variação)', sets: '4 x 8' },
          { name: 'Remada com halteres', sets: '4 x 10' },
          { name: 'Press militar', sets: '3 x 8' },
          { name: 'Prancha dinâmica (get-ups)', sets: '3 x 10' },
        ],
        cooldown: 'Alongamento de peitoral e ombros, 8 min.',
      },
      {
        id: 'int-4',
        day: 'Sessão 4',
        focus: 'Potência e explosividade específica',
        warmup: '5 min ativação: saltos leves e mobilidade de anca.',
        exercises: [
          { name: 'Agachamento com salto', sets: '4 x 8' },
          { name: 'Socos com halteres leves (1kg) no ar', sets: '4 x 30s' },
          { name: 'Sprints curtos (10-15m)', sets: '6 repetições' },
        ],
        cooldown: 'Alongamento completo, 10 min.',
      },
    ],
  },
  profissional: {
    level: 'profissional',
    summary: 'Periodização de alta intensidade com foco em potência específica ao desporto, resistência anaeróbia e prevenção de lesões.',
    weeklyStructure: '5-6 sessões por semana, com periodização e semanas de descarga a cada 4 semanas.',
    sessions: [
      {
        id: 'pro-1',
        day: 'Sessão 1',
        focus: 'Força máxima',
        warmup: '10 min: mobilidade completa + ativação neural (saltos curtos).',
        exercises: [
          { name: 'Agachamento traseiro', sets: '5 x 5 (carga alta)' },
          { name: 'Levantamento terra', sets: '4 x 5' },
          { name: 'Press de banco ou flexões com peso extra', sets: '4 x 6' },
          { name: 'Prancha com carga', sets: '3 x 30-40s' },
        ],
        cooldown: 'Mobilidade + foamroller, 10 min.',
      },
      {
        id: 'pro-2',
        day: 'Sessão 2',
        focus: 'Condicionamento anaeróbio específico',
        warmup: '8 min shadow progressivo + mobilidade dinâmica.',
        exercises: [
          { name: 'Rounds de saco pesado (simulando combate)', sets: '5 x 3 min / 1 min descanso' },
          { name: 'Sprints de 15s máxima intensidade', sets: '10 rondas / 45s descanso' },
        ],
        cooldown: 'Caminhada + respiração controlada, 8 min.',
      },
      {
        id: 'pro-3',
        day: 'Sessão 3',
        focus: 'Potência explosiva',
        warmup: '10 min ativação neuromuscular.',
        exercises: [
          { name: 'Saltos pliométricos (box jump, broad jump)', sets: '5 x 5' },
          { name: 'Arremesso de medicine ball (rotacional)', sets: '4 x 8 cada lado' },
          { name: 'Sprints resistidos (com paraquedas/elástico)', sets: '6 x 10-15m' },
        ],
        cooldown: 'Alongamento dinâmico e estático, 10 min.',
      },
      {
        id: 'pro-4',
        day: 'Sessão 4',
        focus: 'Força — membros superiores e core avançado',
        warmup: '8 min mobilidade de ombros e tronco.',
        exercises: [
          { name: 'Remada com barra', sets: '5 x 6' },
          { name: 'Press militar com halteres', sets: '4 x 6' },
          { name: 'Rodas abdominais (ab wheel)', sets: '4 x 10' },
          { name: 'Farmer walk', sets: '4 x 30m' },
        ],
        cooldown: 'Mobilidade completa, 10 min.',
      },
      {
        id: 'pro-5',
        day: 'Sessão 5',
        focus: 'Resistência específica ao combate',
        warmup: '8 min shadow com intensidade crescente.',
        exercises: [
          { name: 'Rounds de sparring técnico controlado ou pao/mitts', sets: '6 x 3 min' },
          { name: 'Circuito de força funcional (kettlebell swings, burpees, cordas)', sets: '4 rondas x 1 min cada exercício' },
        ],
        cooldown: 'Alongamento + trabalho respiratório, 10 min.',
      },
    ],
  },
};
