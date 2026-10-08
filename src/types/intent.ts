import type { VisitorIntent } from "./brand";

export interface IntentPath {
  intent: VisitorIntent;
  title: string;
  audience: string;
  description: string;
  cta: {
    label: string;
    href: `#${string}`;
  };
}
