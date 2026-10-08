import type { ContainerProps } from "@/types/ui";
import { cn } from "@/utils/cn";

export function Container({ as: Tag = "div", id, className, children }: ContainerProps) {
  return (
    <Tag id={id} className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10", className)}>
      {children}
    </Tag>
  );
}
