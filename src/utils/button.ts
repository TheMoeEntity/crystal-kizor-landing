import type { ButtonVariant } from "@/types/ui";
import { cn } from "@/utils/cn";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-canopy text-limewash hover:bg-canopy-soft",
  secondary: "text-canopy ring-1 ring-canopy/30 hover:bg-limewash",
};

export function buttonStyles(variant: ButtonVariant = "primary", className?: string): string {
  return cn(
    "inline-flex items-center justify-center rounded-sm px-6 py-3 text-base font-medium transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-canopy",
    "disabled:cursor-not-allowed disabled:opacity-60",
    variantStyles[variant],
    className,
  );
}
