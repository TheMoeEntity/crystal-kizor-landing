import { z } from "zod";

const envSchema = z
  .object({
    NEXT_PUBLIC_SITE_URL: z.url(),
    SITE_INDEXABLE: z
      .enum(["true", "false"])
      .default("false")
      .transform((value) => value === "true"),
  })
  // A Vercel production build pointing at localhost ships broken canonical URLs,
  // social previews and email images. Fail the deploy instead.
  .refine(
    (env) =>
      process.env.VERCEL_ENV !== "production" || !env.NEXT_PUBLIC_SITE_URL.includes("localhost"),
    {
      message: "NEXT_PUBLIC_SITE_URL points at localhost in a Vercel production build.",
      path: ["NEXT_PUBLIC_SITE_URL"],
    },
  );

// Keys are listed explicitly: Next.js only inlines NEXT_PUBLIC_* variables
// when they're referenced by their full name, so parse(process.env) would miss them in the browser.
export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  SITE_INDEXABLE: process.env.SITE_INDEXABLE,
});
