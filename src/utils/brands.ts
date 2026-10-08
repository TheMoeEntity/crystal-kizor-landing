import type { Brand, BrandLink, VisitorIntent } from "@/types/brand";
import { assertNever } from "./assert";

export function groupBrandsByIntent(
  brands: readonly Brand[],
): Record<VisitorIntent, readonly Brand[]> {
  const groups: Record<VisitorIntent, Brand[]> = { build: [], learn: [], book: [], support: [] };
  for (const brand of brands) {
    groups[brand.intent].push(brand);
  }
  return groups;
}

export function getBrandHref(link: BrandLink): string | null {
  switch (link.kind) {
    case "external":
    case "internal":
      return link.href;
    case "pending":
      return null;
    default:
      return assertNever(link);
  }
}
