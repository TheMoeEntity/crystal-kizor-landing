import type { ImageAsset } from "./media";

export type ProjectStatus = "built" | "visualisation";

export interface Project {
  slug: string;
  name: string;
  type: string;
  location: string | null;
  year: number | null;
  status: ProjectStatus;
  summary: string;
  href: string | null;
  cover: ImageAsset;
  gallery: readonly ImageAsset[];
  featured: boolean;
}
