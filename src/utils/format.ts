const listFormatter = new Intl.ListFormat("en", { style: "long", type: "conjunction" });

export function formatList(items: readonly string[]): string {
  return listFormatter.format(items);
}
