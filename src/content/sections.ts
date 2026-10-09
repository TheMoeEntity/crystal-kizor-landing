import type { SectionCopy, SectionKey } from "@/types/section";

const sections: Record<SectionKey, SectionCopy> = {
  enquire: {
    title: "Start a conversation",
    intro:
      "Tell us what you have in mind, whether it's a project, a talk or a partnership, and it will reach the right part of Crystal's work.",
  },
  paths: {
    title: "Where would you like to start?",
    intro:
      "Crystal's work moves between buildings, objects, ideas and communities. Choose the path that fits why you're here.",
  },
  work: {
    title: "Built for this climate",
    intro:
      "Through Studio COKA, Crystal designs and builds homes and public spaces that stay cool, bright and comfortable while using far less energy.",
  },
  ideas: {
    title: "Teaching what she builds",
    intro:
      "Through teaching, writing and speaking, Crystal shares what practice has taught her with architects, students and the wider public.",
  },
  mission: {
    title: "Building people, not only places",
    intro:
      "Beyond architecture, Crystal invests in children's education and in young people's faith, identity and purpose.",
  },
  about: {
    title: "About Crystal",
    intro: null,
  },
};

export async function getSectionCopy(key: SectionKey): Promise<SectionCopy> {
  return sections[key];
}
