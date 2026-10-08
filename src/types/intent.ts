import type { VisitorIntent } from "./brand";
import type { AnchorHref } from "./common";

export interface IntentPath {
  intent: VisitorIntent;
  title: string;
  audience: string;
  description: string;
  cta: {
    label: string;
    href: AnchorHref;
  };
}
