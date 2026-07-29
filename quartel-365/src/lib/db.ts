// Persistência das reservas de aulas.
//
// Escolha técnica: SQLite (via better-sqlite3), guardado em ficheiro local
// (`data/bookings.db`), em vez de Supabase.
//
// Porquê: não é preciso nenhuma conta/API key externa para isto funcionar —
// corre em qualquer servidor Node (VPS, Docker, `next start`) sem
// configuração adicional, o que é ideal para uma academia pequena que não
// quer gerir credenciais de terceiros. O limite de 15 alunos por turma é
// aplicado com um TRIGGER a nível da própria base de dados (não apenas em
// código da aplicação), por isso é impossível ultrapassar o limite mesmo
// com pedidos em simultâneo.
//
// Aviso para produção: se este site for alojado em plataformas serverless
// com múltiplas instâncias e disco efémero (ex: Vercel), um ficheiro SQLite
// local NÃO é fiável — cada instância/deploy pode ver um ficheiro
// diferente. Nesse cenário, troca este módulo por Supabase (Postgres) ou
// Turso (SQLite distribuído), mantendo a mesma trigger de capacidade a
// nível de base de dados. Para um servidor Node tradicional e persistente,
// esta solução é suficiente e robusta.

import path from "node:path";
import fs from "node:fs";
import Database from "better-sqlite3";

export type BookableClass = {
  id: string;
  name: string;
  day: string;
  dayOrder: number;
  time: string;
  trainer: string;
  capacity: number;
};

// Fonte de verdade da grelha semanal de aulas reserváveis. A grelha
// apresentada em /modalidades e a lista de turmas em /reservar derivam
// ambas destes dados (via a base de dados), para nunca ficarem
// dessincronizadas.
const CLASS_SEED: BookableClass[] = [
  { id: "segunda-0700", name: "Treino Funcional", day: "Segunda", dayOrder: 1, time: "07h00", trainer: "Daniel Coelho", capacity: 15 },
  { id: "segunda-1830", name: "Muay Thai", day: "Segunda", dayOrder: 1, time: "18h30", trainer: "Daniel Coelho", capacity: 15 },
  { id: "segunda-2000", name: "Muay Thai", day: "Segunda", dayOrder: 1, time: "20h00", trainer: "Daniel Coelho", capacity: 15 },
  { id: "terca-1900", name: "Treino Funcional", day: "Terça", dayOrder: 2, time: "19h00", trainer: "Daniel Coelho", capacity: 15 },
  { id: "terca-2000", name: "Muay Thai", day: "Terça", dayOrder: 2, time: "20h00", trainer: "Daniel Coelho", capacity: 15 },
  { id: "quarta-0700", name: "Treino Funcional", day: "Quarta", dayOrder: 3, time: "07h00", trainer: "Daniel Coelho", capacity: 15 },
  { id: "quarta-1830", name: "Muay Thai", day: "Quarta", dayOrder: 3, time: "18h30", trainer: "Daniel Coelho", capacity: 15 },
  { id: "quarta-2000", name: "Muay Thai", day: "Quarta", dayOrder: 3, time: "20h00", trainer: "Daniel Coelho", capacity: 15 },
  { id: "quinta-1900", name: "Treino Funcional", day: "Quinta", dayOrder: 4, time: "19h00", trainer: "Daniel Coelho", capacity: 15 },
  { id: "quinta-2000", name: "Muay Thai", day: "Quinta", dayOrder: 4, time: "20h00", trainer: "Daniel Coelho", capacity: 15 },
  { id: "sexta-0700", name: "Treino Funcional", day: "Sexta", dayOrder: 5, time: "07h00", trainer: "Daniel Coelho", capacity: 15 },
  { id: "sexta-1830", name: "Muay Thai", day: "Sexta", dayOrder: 5, time: "18h30", trainer: "Daniel Coelho", capacity: 15 },
  { id: "sabado-1000", name: "Muay Thai", day: "Sábado", dayOrder: 6, time: "10h00", trainer: "Daniel Coelho", capacity: 15 },
  { id: "sabado-1100", name: "Treino Funcional", day: "Sábado", dayOrder: 6, time: "11h00", trainer: "Daniel Coelho", capacity: 15 },
];

export class ClassFullError extends Error {
  constructor(public classId: string) {
    super(`A turma "${classId}" está completa.`);
    this.name = "ClassFullError";
  }
}

export class DuplicateBookingError extends Error {
  constructor(public classId: string, public email: string) {
    super(`Já existe uma reserva para ${email} nesta turma.`);
    this.name = "DuplicateBookingError";
  }
}

export class ClassNotFoundError extends Error {
  constructor(public classId: string) {
    super(`Turma "${classId}" não encontrada.`);
    this.name = "ClassNotFoundError";
  }
}

let dbInstance: Database.Database | null = null;

function getDb(): Database.Database {
  if (dbInstance) return dbInstance;

  const dataDir = path.join(process.cwd(), "data");
  fs.mkdirSync(dataDir, { recursive: true });
  const db = new Database(path.join(dataDir, "bookings.db"));
  db.pragma("journal_mode = WAL");
  db.pragma("foreign_keys = ON");

  db.exec(`
    CREATE TABLE IF NOT EXISTS classes (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      day TEXT NOT NULL,
      day_order INTEGER NOT NULL,
      time TEXT NOT NULL,
      trainer TEXT NOT NULL,
      capacity INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      class_id TEXT NOT NULL REFERENCES classes(id),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE (class_id, email)
    );

    -- Aplica o limite de vagas dentro da própria base de dados: mesmo que
    -- dois pedidos cheguem "ao mesmo tempo", o SQLite serializa as escritas
    -- e esta trigger recusa a inserção assim que a turma atinge a
    -- capacidade — nunca é possível ultrapassar o limite.
    CREATE TRIGGER IF NOT EXISTS enforce_class_capacity
    BEFORE INSERT ON bookings
    FOR EACH ROW
    WHEN (SELECT COUNT(*) FROM bookings WHERE class_id = NEW.class_id)
      >= (SELECT capacity FROM classes WHERE id = NEW.class_id)
    BEGIN
      SELECT RAISE(ABORT, 'CLASS_FULL');
    END;
  `);

  const seedCount = db.prepare("SELECT COUNT(*) AS n FROM classes").get() as { n: number };
  if (seedCount.n === 0) {
    const insert = db.prepare(
      `INSERT INTO classes (id, name, day, day_order, time, trainer, capacity)
       VALUES (@id, @name, @day, @dayOrder, @time, @trainer, @capacity)`,
    );
    const insertMany = db.transaction((rows: BookableClass[]) => {
      for (const row of rows) insert.run(row);
    });
    insertMany(CLASS_SEED);
  }

  dbInstance = db;
  return db;
}

export type ClassAvailability = BookableClass & {
  booked: number;
  available: number;
  full: boolean;
};

export function getClassesWithAvailability(): ClassAvailability[] {
  const db = getDb();
  const rows = db
    .prepare(
      `SELECT c.id, c.name, c.day, c.day_order AS dayOrder, c.time, c.trainer, c.capacity,
              COUNT(b.id) AS booked
       FROM classes c
       LEFT JOIN bookings b ON b.class_id = c.id
       GROUP BY c.id
       ORDER BY c.day_order ASC, c.time ASC`,
    )
    .all() as (BookableClass & { booked: number })[];

  return rows.map((row) => ({
    ...row,
    available: Math.max(row.capacity - row.booked, 0),
    full: row.booked >= row.capacity,
  }));
}

export function getClassAvailability(classId: string): ClassAvailability | null {
  return getClassesWithAvailability().find((c) => c.id === classId) ?? null;
}

export type NewBooking = {
  classId: string;
  name: string;
  email: string;
  phone: string;
};

export type Booking = NewBooking & { id: number; createdAt: string };

export function createBooking(input: NewBooking): Booking {
  const db = getDb();

  const klass = db.prepare("SELECT id FROM classes WHERE id = ?").get(input.classId);
  if (!klass) throw new ClassNotFoundError(input.classId);

  try {
    const result = db
      .prepare(
        `INSERT INTO bookings (class_id, name, email, phone) VALUES (?, ?, ?, ?)`,
      )
      .run(input.classId, input.name, input.email.toLowerCase(), input.phone);

    const row = db
      .prepare("SELECT id, class_id AS classId, name, email, phone, created_at AS createdAt FROM bookings WHERE id = ?")
      .get(result.lastInsertRowid) as Booking;

    return row;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.includes("CLASS_FULL")) throw new ClassFullError(input.classId);
    if (message.includes("UNIQUE constraint failed")) {
      throw new DuplicateBookingError(input.classId, input.email);
    }
    throw error;
  }
}
