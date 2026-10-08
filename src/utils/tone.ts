import type { Tone, ToneStyle } from "@/types/ui";

export const toneStyles: Record<Tone, ToneStyle> = {
  light: {
    muted: "text-stone",
    border: "border-canopy/15",
    link: "hover:decoration-ink focus-visible:outline-canopy",
  },
  dark: {
    muted: "text-limewash/75",
    border: "border-limewash/15",
    link: "hover:decoration-limewash focus-visible:outline-limewash",
  },
};
