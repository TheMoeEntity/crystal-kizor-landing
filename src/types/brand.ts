import { AnchorHref } from "./common";

import type { VISITOR_INTENTS } from "@/constants/intents";

export type VisitorIntent = (typeof VISITOR_INTENTS)[number];

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
