import type { ReactNode } from "react";

export interface ContainerProps {
  as?: "div" | "section" | "header" | "footer" | "nav";
  id?: string;
  className?: string;
  children: ReactNode;
}
