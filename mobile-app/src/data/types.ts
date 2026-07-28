export type Level = 'iniciante' | 'intermedio' | 'profissional';

export type SportId =
  | 'boxe'
  | 'muay-thai'
  | 'kickboxing'
  | 'mma'
  | 'jiu-jitsu'
  | 'luta-olimpica';

export interface Sport {
  id: SportId;
  name: string;
  description: string;
}

export interface Drill {
  title: string;
  duration: string;
  instructions: string;
}

export interface ComboStep {
  /** Standard boxing/kickboxing number (1=jab, 2=direto...). Omitted for kicks/knees/elbows, which have no universal number. */
  number?: string;
  label: string;
}

export interface Combo {
  label: string;
  sequence: ComboStep[];
}

export interface Technique {
  id: string;
  sport: SportId;
  level: Level;
  name: string;
  objective: string;
  cues: string[];
  soloDrills: Drill[];
  combos?: Combo[];
}

export interface Exercise {
  name: string;
  sets: string;
  notes?: string;
}

export interface WorkoutSession {
  id: string;
  day: string;
  focus: string;
  warmup: string;
  exercises: Exercise[];
  cooldown: string;
}

export interface WorkoutPlan {
  level: Level;
  summary: string;
  weeklyStructure: string;
  sessions: WorkoutSession[];
}

export interface MealSuggestion {
  meal: string;
  suggestion: string;
}

export interface DietPlan {
  level: Level;
  goal: string;
  principles: string[];
  hydration: string;
  sampleDay: MealSuggestion[];
  supplementNote: string;
}
