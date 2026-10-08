import type { Profile } from "@/types/profile";
import { portraitImages } from "./media";

const profile: Profile = {
  name: "Crystal Kizor",
  jobTitle: "Design Director, Studio COKA",
  roles: ["Architect", "Designer", "Entrepreneur", "Speaker", "Researcher"],
  thesis: "Designing for how people were meant to live.",
  summary:
    "Architect, designer and founder of Studio COKA, a climate-responsive design-build studio in Enugu, Nigeria. Her work spans buildings, furniture, education and community, all asking how spaces and systems can better serve the people inside them.",
  credentials: [
    "B.Sc Architecture, University of Nigeria",
    "M.A. Interior Architecture, Coventry University",
    "Sustainable Real Estate, University of Cambridge",
  ],
  bio: [
    "Crystal Kizor is the Design Director of Studio COKA, leading the creative direction of its architecture and interior work. Before founding the studio, she designed Nigeria's first off-grid hospital, completed in 2019.",
    "An award-winning entrepreneur and educator, she is driven by climate-responsive architecture: combining modern practice with contextual design to raise living standards. Alongside the studio, she teaches through The Effective Architect, speaks on African cities and the built environment, and supports education and youth development through AKO Alliance and Alive and Free.",
  ],
  benchmark: {
    linkLabel: "Read the case study",
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
  portrait: portraitImages.standingStudio,
};

export async function getProfile(): Promise<Profile> {
  return profile;
}
