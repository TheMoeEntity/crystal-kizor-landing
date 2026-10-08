import type { SectionHeaderProps } from "@/types/ui";
import { cn } from "@/utils/cn";
import { toneStyles } from "@/utils/tone";

export function SectionHeader({ id, copy, tone = "light", className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <h2 id={id} className="font-wide text-heading font-semibold">
        {copy.title}
      </h2>
      {copy.intro && (
        <p className={cn("mt-6 max-w-prose text-lg leading-relaxed", toneStyles[tone].muted)}>
          {copy.intro}
        </p>
      )}
    </div>
  );
}
