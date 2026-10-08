import { projectImages } from "@/content/media";
import type { Project } from "@/types/project";
import type { ProjectStatus } from "@/types/project";

const STUDIO_PROJECTS = "https://studiocoka.com/projects";

const projects: readonly Project[] = [
  {
    slug: "nature-home",
    name: "Nature Home",
    type: "Private Residential",
    location: null,
    year: null,
    status: "built",
    summary:
      "A completed family home shaded by mature trees and deep cantilevered roofs, with warm timber-lined interiors.",
    href: null,
    cover: projectImages.natureHome.cantileverShade,
    gallery: [
      projectImages.natureHome.frontTreeShade,
      projectImages.natureHome.slattedDivider,
      projectImages.natureHome.familySittingRoom,
      projectImages.natureHome.study,
      projectImages.natureHome.backGarden,
    ],
    featured: true,
  },
  {
    slug: "community-centre",
    name: "Community Centre",
    type: "Civic / Community",
    location: null,
    year: null,
    status: "visualisation",
    summary:
      "Organised around a shaded courtyard tree, with perforated brick screens that let air and filtered light move through.",
    href: null,
    cover: projectImages.communityCentre.courtyardTree,
    gallery: [
      projectImages.communityCentre.screenGallery,
      projectImages.communityCentre.exterior,
      projectImages.communityCentre.amphitheatre,
      projectImages.communityCentre.corridor,
    ],
    featured: true,
  },
  {
    slug: "nature-home-2",
    name: "Nature Home 2",
    type: "Private Residential",
    location: "Enugu, Nigeria",
    year: null,
    status: "visualisation",
    summary:
      "A low, earth-walled home that opens fully to its garden, with lattice roofs filtering light into the living spaces.",
    href: `${STUDIO_PROJECTS}/nature-home-2`,
    cover: projectImages.natureHome2.gardenExterior,
    gallery: [
      projectImages.natureHome2.courtyardBedroom,
      projectImages.natureHome2.kitchen,
      projectImages.natureHome2.dining,
    ],
    featured: true,
  },
];

export async function getProjects(): Promise<readonly Project[]> {
  return projects;
}

export async function getFeaturedProjects(): Promise<readonly Project[]> {
  const all = await getProjects();
  return all.filter((project) => project.featured);
}

const statusLabels: Record<ProjectStatus, string> = {
  built: "Built",
  visualisation: "Visualisation",
};

export function getStatusLabel(status: ProjectStatus): string {
  return statusLabels[status];
}

export async function getPortfolioLink(): Promise<{ href: string; label: string }> {
  return { href: STUDIO_PROJECTS, label: "See every project on Studio COKA" };
}
