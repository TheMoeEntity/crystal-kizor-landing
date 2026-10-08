import { TextLink } from "@/components/ui/TextLink";
import type { BrandActionProps } from "@/types/ui";
import { assertNever } from "@/utils/assert";
import { cn } from "@/utils/cn";
import { toneStyles } from "@/utils/tone";

export function BrandAction({ link, tone = "light", className }: BrandActionProps) {
  const styles = toneStyles[tone];

  switch (link.kind) {
    case "external":
    case "internal":
      return (
        <TextLink href={link.href} className={cn(styles.link, className)}>
          {link.label}
        </TextLink>
      );
    case "pending":
      return <p className={cn(styles.muted, className)}>Website coming soon</p>;
    default:
      return assertNever(link);
  }
}
