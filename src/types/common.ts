import type { ReactNode } from "react";

export type AnchorHref = `#${string}`;
export type LayoutProps = Readonly<{
  children: ReactNode;
}>;
