import "server-only";
import { cacheLife, cacheTag } from "next/cache";
import { fetchJson } from "@/lib/http";
import { geocodingResponseSchema } from "@/schemas/climate.schema";
import type { GeoLocation } from "@/types/climate";

const GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";

// Cached for the longest profile: towns don't move. "Not found" (null) is a real
// answer and is safe to cache; failures throw, so they are never stored.
export async function geocodeCity(city: string, countryCode: string): Promise<GeoLocation | null> {
  "use cache";
  cacheLife("max");
  cacheTag("geocode");

  const url = new URL(GEOCODING_URL);
  url.search = new URLSearchParams({
    name: city,
    count: "1",
    countryCode,
    language: "en",
    format: "json",
  }).toString();

  const data = await fetchJson("open-meteo-geocoding", url, geocodingResponseSchema);
  const match = data.results?.[0];
  if (!match) return null;

  return {
    name: match.name,
    region: match.admin1 ?? null,
    country: match.country ?? null,
    countryCode: match.country_code,
    latitude: match.latitude,
    longitude: match.longitude,
    elevationM: match.elevation ?? null,
  };
}
