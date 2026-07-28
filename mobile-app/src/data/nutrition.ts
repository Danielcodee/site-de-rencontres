import { DietPlan } from './types';

export const DIET_PLANS: Record<string, DietPlan> = {
  iniciante: {
    level: 'iniciante',
    goal: 'Criar hábitos alimentares consistentes para sustentar o treino.',
    principles: [
      'Faz 3 refeições principais + 1-2 lanches, evitando longos períodos sem comer.',
      'Inclui proteína em todas as refeições (carne, peixe, ovos, leguminosas, tofu).',
      'Prefere carboidratos complexos (arroz, batata-doce, aveia) antes dos treinos.',
      'Reduz ultraprocessados e açúcar refinado no dia a dia.',
    ],
    hydration: 'No mínimo 2L de água por dia, mais 500ml extra em dias de treino.',
    sampleDay: [
      { meal: 'Pequeno-almoço', suggestion: 'Aveia com fruta e iogurte natural + ovos mexidos.' },
      { meal: 'Almoço', suggestion: 'Frango grelhado, arroz integral, legumes variados.' },
      { meal: 'Lanche pré-treino', suggestion: 'Banana + punhado de frutos secos.' },
      { meal: 'Jantar', suggestion: 'Peixe ou carne magra, batata-doce, salada.' },
    ],
    supplementNote: 'Nesta fase, suplementos não são necessários — foca-te em comida real e consistência.',
  },
  intermedio: {
    level: 'intermedio',
    goal: 'Ajustar a alimentação ao aumento do volume de treino e apoiar a recuperação.',
    principles: [
      'Aumenta ligeiramente a ingestão calórica em dias de treino mais intenso.',
      'Prioriza proteína pós-treino (20-30g) dentro de 1-2h após o exercício.',
      'Planeia as refeições à volta dos horários de treino (2-3h antes, refeição completa).',
      'Inclui gorduras saudáveis (azeite, abacate, frutos secos) para suporte hormonal.',
    ],
    hydration: '2.5-3L de água por dia; considera eletrólitos em treinos acima de 60 min.',
    sampleDay: [
      { meal: 'Pequeno-almoço', suggestion: 'Panquecas de aveia com whey ou ovos + fruta.' },
      { meal: 'Almoço', suggestion: 'Carne/peixe/frango + arroz ou massa integral + vegetais.' },
      { meal: 'Pré-treino', suggestion: 'Batata-doce ou pão integral + fonte de proteína magra.' },
      { meal: 'Pós-treino', suggestion: 'Shake de proteína ou iogurte grego com fruta.' },
      { meal: 'Jantar', suggestion: 'Proteína magra + legumes + fonte de carboidrato moderada.' },
    ],
    supplementNote: 'Whey protein e creatina monohidratada podem ser úteis, sempre com orientação profissional.',
  },
  profissional: {
    level: 'profissional',
    goal: 'Otimizar performance, recuperação e, quando aplicável, gestão de peso para categoria.',
    principles: [
      'Periodiza a nutrição conforme a fase de treino (base, pico de intensidade, corte de peso, competição).',
      'Distribui proteína ao longo do dia (0.3-0.4g/kg por refeição) para maximizar recuperação muscular.',
      'Ajusta carboidratos ao volume de treino: mais alto em dias de alta intensidade, mais baixo em dias leves.',
      'Se precisar de fazer corte de peso para categoria, planeia com um nutricionista desportivo — nunca de forma improvisada.',
    ],
    hydration: '3L+ de água por dia; monitoriza cor da urina e peso corporal para ajustar hidratação, especialmente perto de pesagens.',
    sampleDay: [
      { meal: 'Pequeno-almoço', suggestion: 'Ovos + aveia + fruta + gordura saudável (abacate/azeite).' },
      { meal: 'Almoço', suggestion: 'Proteína magra de alta qualidade + carboidrato complexo + vegetais variados.' },
      { meal: 'Pré-treino', suggestion: 'Carboidrato de rápida absorção + proteína ligeira, 1-2h antes.' },
      { meal: 'Pós-treino', suggestion: 'Proteína de rápida absorção + carboidrato para repor glicogénio.' },
      { meal: 'Jantar', suggestion: 'Proteína + vegetais + gordura saudável, carboidrato ajustado ao dia seguinte.' },
    ],
    supplementNote: 'Considera creatina, whey, e eletrólitos conforme necessidade — idealmente com acompanhamento de nutricionista desportivo, especialmente perto de competições.',
  },
};
