import type { BreezeScreenProps } from "@/types/ui";
import { cn } from "@/utils/cn";

// A perforated screen wall: sunlight drifts behind it and shows through the openings.
export function BreezeScreen({ className }: BreezeScreenProps) {
  return (
    <div aria-hidden="true" className={cn("bg-limewash relative overflow-hidden", className)}>
      <div className="motion-safe:animate-sun-drift absolute -inset-1/4 bg-[radial-gradient(circle_at_35%_35%,var(--color-ochre),transparent_55%)] opacity-80" />
      <svg className="text-canopy absolute inset-0 h-full w-full">
        <defs>
          <pattern id="breeze-block" width="64" height="64" patternUnits="userSpaceOnUse">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M0 0H64V64H0Z M32 12a20 20 0 1 0 0 40a20 20 0 1 0 0-40Z"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#breeze-block)" />
      </svg>
    </div>
  );
}
