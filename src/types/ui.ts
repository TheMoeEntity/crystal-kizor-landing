import type { ReactNode } from "react";

export interface ContainerProps {
  as?: "div" | "section" | "header" | "footer" | "nav";
  id?: string;
  className?: string;
  children: ReactNode;
}

export type ButtonVariant = "primary" | "secondary";

export interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

export interface BreezeScreenProps {
  className?: string;
}
import type { ImageAsset } from "./media";

export interface PictureProps {
  image: ImageAsset;
  sizes: string;
  preload?: boolean;
  className?: string;
}

export interface TextLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

import type { Brand, BrandLink } from "./brand";
import type { BenchmarkProject } from "./profile";
import type { Project } from "./project";
import type { SectionCopy } from "./section";

export type Tone = "light" | "dark";

export interface ToneStyle {
  muted: string;
  border: string;
  link: string;
}

import type { EnquiryFormCopy } from "./enquiry";

export interface FieldProps {
  id: string;
  label: string;
  optional?: boolean;
  errors?: readonly string[];
  children: ReactNode;
}

export interface EnquiryFormProps {
  copy: EnquiryFormCopy;
}

export interface SectionHeaderProps {
  id: string;
  copy: SectionCopy;
  tone?: Tone;
  className?: string;
}

export interface BrandActionProps {
  link: BrandLink;
  tone?: Tone;
  className?: string;
}

export interface BrandEntryProps {
  brand: Brand;
  tone?: Tone;
}

export interface BenchmarkProps {
  benchmark: BenchmarkProject;
}

export interface ProjectFeatureProps {
  project: Project;
  reverse?: boolean;
}
