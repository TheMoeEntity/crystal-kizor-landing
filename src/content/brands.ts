import type { Brand, VisitorIntent } from "@/types/brand";

const brands: readonly Brand[] = [
  {
    slug: "studio-coka",
    name: "Studio COKA",
    category: "Architecture, Interiors & Construction",
    description:
      "A design-build studio creating climate-responsive buildings and interiors that cut energy demand and improve comfort.",
    intent: "build",
    link: { kind: "external", href: "https://studiocoka.com" },
    featured: true,
  },
  {
    slug: "elevated",
    name: "ELEvated",
    category: "Furniture & Product Design",
    description:
      "Contemporary furniture and products rooted in African context, materials and ideas.",
    intent: "build",
    link: { kind: "pending" },
    featured: false,
  },
  {
    slug: "the-effective-architect",
    name: "The Effective Architect",
    category: "Education & Media",
    description:
      "An education and media platform helping architects and built-environment professionals learn, grow and build better careers.",
    intent: "learn",
    link: { kind: "pending" },
    featured: true,
  },
  {
    slug: "writing",
    name: "Research & Writing",
    category: "Ideas",
    description:
      "Research, writing and media on architecture, climate and the built environment, published under Crystal's own name.",
    intent: "learn",
    link: { kind: "external", href: "https://studiocoka.com/journal" },
    featured: false,
  },
  {
    slug: "speaking",
    name: "Speaking",
    category: "Talks & Conversations",
    description:
      "Talks on architecture, climate-responsive design, African cities, entrepreneurship and the built environment.",
    intent: "book",
    link: { kind: "internal", href: "#enquire" },
    featured: true,
  },
  {
    slug: "ako-alliance",
    name: "AKO Alliance",
    category: "Education Access",
    description:
      "Expanding access to education and creating opportunities for children and young people.",
    intent: "support",
    link: { kind: "pending" },
    featured: false,
  },
  {
    slug: "alive-and-free",
    name: "Alive and Free",
    category: "Youth Movement",
    description:
      "A Christian youth movement helping young people walk in truth, healing, freedom, identity and purpose in Christ.",
    intent: "support",
    link: { kind: "pending" },
    featured: false,
  },
];

export function getBrands(): readonly Brand[] {
  return brands;
}

export function getBrandsByIntent(intent: VisitorIntent): readonly Brand[] {
  return brands.filter((brand) => brand.intent === intent);
}
