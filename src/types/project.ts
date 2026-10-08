import type { ImageAsset } from "./media";

export interface Project {
  slug: string;
  name: string;
  type: string;
  location: string;
  year: number | null;
  summary: string | null;
  href: string;
  image: ImageAsset | null;
  featured: boolean;
}
