import type { Profile } from "@/types/profile";

const profile: Profile = {
  name: "Crystal Kizor",
  roles: ["Architect", "Designer", "Entrepreneur", "Speaker", "Researcher"],
  thesis: "Designing for how people were meant to live.",
  summary:
    "Architect, designer and founder of Studio COKA, a climate-responsive design-build studio in Enugu, Nigeria. Her work spans buildings, furniture, education and community, all asking how spaces and systems can better serve the people inside them.",
  credentials: [
    "B.Sc Architecture, University of Nigeria",
    "M.A. Interior Architecture, Coventry University",
    "Sustainable Real Estate, University of Cambridge",
  ],
  benchmark: {
    title: "Nigeria's first off-grid hospital",
    description:
      "Designed by Crystal before founding Studio COKA and completed in 2019: a derelict building transformed into Nsukka's first eye hospital, running entirely on solar power.",
    href: "https://studiocoka.com/projects/nigeria-first-off-grid-hospital",
    metrics: [
      { value: "100%", label: "Solar powered, off the national grid" },
      { value: "400%", label: "Increase in patient visits" },
      { value: "95%", label: "Reduction in diesel use" },
      { value: "₦8M", label: "Saved in energy costs every year" },
    ],
  },
  portrait: null, // replaced when assets arrive
};

export function getProfile(): Profile {
  return profile;
}
