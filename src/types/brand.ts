export type VisitorIntent = "build" | "learn" | "book" | "support";

export type BrandLink =
  | { kind: "external"; href: string }
  | { kind: "internal"; href: `#${string}` }
  | { kind: "pending" };

export interface Brand {
  slug: string;
  name: string;
  category: string;
  description: string;
  intent: VisitorIntent;
  link: BrandLink;
  featured: boolean;
}
