import { BrandAction } from "@/components/ui/BrandAction";
import type { BrandEntryProps } from "@/types/ui";
import { cn } from "@/utils/cn";
import { toneStyles } from "@/utils/tone";

export function BrandEntry({ brand, tone = "light" }: BrandEntryProps) {
  const styles = toneStyles[tone];

  return (
    <li className={cn("border-b py-8", styles.border)}>
      <h3 className="font-wide text-xl font-semibold">{brand.name}</h3>
      <p className={cn("mt-1", styles.muted)}>{brand.category}</p>
      <p className="mt-4 max-w-prose text-lg leading-relaxed">{brand.description}</p>
      <BrandAction link={brand.link} tone={tone} className="mt-5" />
    </li>
  );
}
