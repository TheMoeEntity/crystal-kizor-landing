import type { ImageAsset } from "./media";

export interface Metric {
  value: string;
  label: string;
}

export interface BenchmarkProject {
  title: string;
  description: string;
  href: string;
  metrics: readonly Metric[];
}

export interface Profile {
  name: string;
  roles: readonly string[];
  thesis: string;
  summary: string;
  credentials: readonly string[];
  benchmark: BenchmarkProject;
  portrait: ImageAsset | null;
}
