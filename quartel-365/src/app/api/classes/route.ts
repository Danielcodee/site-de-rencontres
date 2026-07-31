import { NextResponse } from "next/server";
import { getClassesWithAvailability } from "@/lib/db";

// Nunca cachear: os lugares disponíveis mudam a cada reserva.
export const dynamic = "force-dynamic";

export async function GET() {
  const classes = getClassesWithAvailability();
  return NextResponse.json({ classes });
}
