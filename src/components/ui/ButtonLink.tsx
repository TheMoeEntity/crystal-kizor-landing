import type { ButtonLinkProps } from "@/types/ui";
import { buttonStyles } from "@/utils/button";
import Link from "next/link";

export function ButtonLink({ href, variant = "primary", className, children }: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonStyles(variant, className)}>
      {children}
    </Link>
  );
}
