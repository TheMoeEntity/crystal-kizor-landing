import type { TextLinkProps } from "@/types/ui";
import { cn } from "@/utils/cn";

export function TextLink({ href, className, children }: TextLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "decoration-ochre hover:decoration-ink inline-block text-lg font-medium underline decoration-2 underline-offset-8 transition-colors",
        "focus-visible:outline-canopy rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4",
        className,
      )}
    >
      {children}
    </a>
  );
}
