import type { ReactNode } from "react";

export type Result<T, E> = { ok: true; value: T } | { ok: false; error: E };
export type AnchorHref = `#${string}`;
export type LayoutProps = Readonly<{
  children: ReactNode;
}>;
