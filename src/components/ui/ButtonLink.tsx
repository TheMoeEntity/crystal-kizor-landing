import type { ButtonLinkProps } from "@/types/ui";
import { buttonStyles } from "@/utils/button";

export function ButtonLink({ href, variant = "primary", className, children }: ButtonLinkProps) {
  return (
    <a href={href} className={buttonStyles(variant, className)}>
      {children}
    </a>
  );
}
