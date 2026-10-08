import { AnchorHref } from "./common";

export type VisitorIntent = "build" | "learn" | "book" | "support";

export type BrandLink =
  | { kind: "external"; href: string; label: string }
  | { kind: "internal"; href: AnchorHref; label: string }
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
