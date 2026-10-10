// "  ENUGU " and "Enugu" should share one cache entry.
export function normaliseCityName(city: string): string {
  return city.trim().replace(/\s+/g, " ").toLowerCase();
}
