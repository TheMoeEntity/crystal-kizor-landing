import type { Project } from "@/types/project";

const BASE = "https://studiocoka.com/projects";

const projects: readonly Project[] = [
  {
    slug: "tesh-nsukka",
    name: "TESH Nsukka",
    type: "Healthcare / Renovation",
    location: "Nsukka, Nigeria",
    year: null,
    summary: "A derelict building turned into Nsukka's first eye hospital, powered fully by solar.",
    href: `${BASE}/nigeria-first-off-grid-hospital`,
    image: null,
    featured: true,
  },
  {
    slug: "international-event-center-enugu",
    name: "International Event Center",
    type: "Civic / Cultural",
    location: "Enugu, Nigeria",
    year: 2024,
    summary: "Deep overhangs and layered facades cut heat gain before any mechanical cooling.",
    href: `${BASE}/international-event-center-enugu`,
    image: null,
    featured: true,
  },
  {
    slug: "garden-home-kigali",
    name: "Garden Home",
    type: "Residential",
    location: "Kigali, Rwanda",
    year: null,
    summary: "A tropical home designed to work with the climate rather than against it.",
    href: `${BASE}/garden-home-kigali`,
    image: null,
    featured: true,
  },
  {
    slug: "pine-towers-enugu",
    name: "Pine Towers",
    type: "Mixed-use",
    location: "Enugu, Nigeria",
    year: null,
    summary: null,
    href: `${BASE}/pine-towers-enugu`,
    image: null,
    featured: false,
  },
  {
    slug: "nature-home-2",
    name: "Nature Home 2",
    type: "Private Residential",
    location: "Enugu, Nigeria",
    year: null,
    summary: null,
    href: `${BASE}/nature-home-2`,
    image: null,
    featured: false,
  },
];

export function getProjects(): readonly Project[] {
  return projects;
}

export function getFeaturedProjects(): readonly Project[] {
  return projects.filter((project) => project.featured);
}
