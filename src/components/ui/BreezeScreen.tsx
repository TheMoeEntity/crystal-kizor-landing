import type { BreezeScreenProps } from "@/types/ui";
import { cn } from "@/utils/cn";

// A breeze-block screen wall: sunlight drifts behind it and shows through the openings.
export function BreezeScreen({ className }: BreezeScreenProps) {
  return (
    <div aria-hidden="true" className={cn("bg-limewash relative overflow-hidden", className)}>
      <div className="motion-safe:animate-sun-drift absolute -inset-1/4 bg-[radial-gradient(circle_at_70%_70%,var(--color-ochre),transparent_60%)] opacity-90" />
      <div className="bg-canopy breeze-screen absolute inset-0" />
    </div>
  );
}
