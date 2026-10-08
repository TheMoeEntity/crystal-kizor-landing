import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  SITE_INDEXABLE: z
    .enum(["true", "false"])
    .default("false")
    .transform((value) => value === "true"),
});

// Keys are listed explicitly: Next.js only inlines NEXT_PUBLIC_* variables
// when they're referenced by their full name, so parse(process.env) would miss them in the browser.
export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  SITE_INDEXABLE: process.env.SITE_INDEXABLE,
});
