import type { IntentPath } from "@/types/intent";

const intentPaths: readonly IntentPath[] = [
  {
    intent: "build",
    title: "Build with her",
    audience: "Clients & specifiers",
    description:
      "Commission a climate-responsive building or interior, or bring ELEvated pieces into your space.",
    cta: { label: "See the work", href: "#work" },
  },
  {
    intent: "learn",
    title: "Learn from her",
    audience: "Architects & students",
    description: "Teaching on architecture careers, practice and climate-responsive design.",
    cta: { label: "Explore her ideas", href: "#ideas" },
  },
  {
    intent: "book",
    title: "Book her to speak",
    audience: "Event organisers & media",
    description: "Talks on architecture, African cities, climate and building a design business.",
    cta: { label: "Book a talk", href: "#enquire" },
  },
  {
    intent: "support",
    title: "Join the mission",
    audience: "Partners, donors & young people",
    description: "Support education for children and faith-centred youth development.",
    cta: { label: "Get involved", href: "#mission" },
  },
];

export function getIntentPaths(): readonly IntentPath[] {
  return intentPaths;
}
