import { env } from "@/lib/env";
import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Crystal Kizor",
  url: env.NEXT_PUBLIC_SITE_URL,
  title: "Crystal Kizor | Architect, Designer & Founder of Studio COKA",
  description:
    "Architect and founder of Studio COKA, designing climate-responsive buildings, furniture, education and community programmes rooted in African context.",
  locale: "en_NG",
  indexable: env.SITE_INDEXABLE,
};
