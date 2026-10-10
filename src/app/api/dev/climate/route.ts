import type { NextRequest } from "next/server";
import { getClimateForCity } from "@/server/services/climate.service";

// Development-only probe for the climate pipeline. Returns 404 in production.
export async function GET(request: NextRequest) {
  if (process.env.NODE_ENV !== "development") return new Response(null, { status: 404 });

  const city = request.nextUrl.searchParams.get("city") ?? "Enugu";
  const started = performance.now();
  const result = await getClimateForCity(city);

  return Response.json({ ms: Math.round(performance.now() - started), result });
}
