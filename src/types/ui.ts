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
