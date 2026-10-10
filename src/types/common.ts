import type { ReactNode } from "react";

export type HomeAnchorHref = `/#${string}`;
export type AnchorHref = `#${string}`;
export type LayoutProps = Readonly<{
  children: ReactNode;
}>;
