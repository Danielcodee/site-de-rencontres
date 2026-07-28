export interface LegendEntry {
  number: string;
  name: string;
  side: 'Mão da frente' | 'Mão de trás';
  description: string;
}

// Numeração universal usada em boxe, kickboxing e muay thai para os socos.
// Pontapés, joelhadas e cotoveladas não têm uma numeração universal, por
// isso aparecem sempre pelo nome (ex: "canelada", "chute circular").
export const COMBO_LEGEND: LegendEntry[] = [
  { number: '1', name: 'Jab', side: 'Mão da frente', description: 'Soco reto e rápido da mão da frente. Mede distância e abre combinações.' },
  { number: '2', name: 'Direto (Cruzado)', side: 'Mão de trás', description: 'Soco reto e forte da mão de trás, com rotação da anca.' },
  { number: '3', name: 'Gancho da frente', side: 'Mão da frente', description: 'Soco lateral e curvo com a mão da frente, cotovelo a 90°.' },
  { number: '4', name: 'Gancho de trás', side: 'Mão de trás', description: 'Soco lateral e curvo com a mão de trás.' },
  { number: '5', name: 'Upper da frente', side: 'Mão da frente', description: 'Soco ascendente com a mão da frente, de baixo para cima.' },
  { number: '6', name: 'Upper de trás', side: 'Mão de trás', description: 'Soco ascendente com a mão de trás, o mais potente dos uppers.' },
];
