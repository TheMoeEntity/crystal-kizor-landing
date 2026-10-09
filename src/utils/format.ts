const listFormatter = new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" });
const longDateFormatter = new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeZone: "UTC" });
const numberFormatter = new Intl.NumberFormat("en-GB");

export function formatList(items: readonly string[]): string {
  return listFormatter.format(items);
}

// "2026-11-20" -> "20 November 2026". Read as UTC so the date never shifts a day.
export function formatIsoDate(isoDate: string): string {
  return longDateFormatter.format(new Date(`${isoDate}T00:00:00Z`));
}

export function formatNumber(value: number): string {
  return numberFormatter.format(value);
}

export function firstName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] ?? fullName;
}
