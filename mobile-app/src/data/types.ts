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
  emoji: string;
  description: string;
}

export interface Drill {
  title: string;
  duration: string;
  instructions: string;
}

export interface Technique {
  id: string;
  sport: SportId;
  level: Level;
  name: string;
  objective: string;
  cues: string[];
  soloDrills: Drill[];
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
