import Image from "next/image";
import type { PictureProps } from "@/types/ui";
import { cn } from "@/utils/cn";

export function Picture({ image, sizes, preload = false, className }: PictureProps) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      preload={preload}
      className={cn("h-auto w-full", className)}
    />
  );
}
