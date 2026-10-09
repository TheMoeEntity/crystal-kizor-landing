import { z } from "zod";

// Pure schema with no "server-only" guard, so next.config.ts can run it at startup.
const serverEnvSchema = z.object({
  RESEND_API_KEY: z.string().startsWith("re_", "RESEND_API_KEY must start with re_"),
  ENQUIRY_TO: z.email("ENQUIRY_TO must be a single valid email address"),
  ENQUIRY_FROM: z.string().min(1),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

export function readServerEnv(source: NodeJS.ProcessEnv): ServerEnv {
  return serverEnvSchema.parse({
    RESEND_API_KEY: source.RESEND_API_KEY,
    ENQUIRY_TO: source.ENQUIRY_TO,
    ENQUIRY_FROM: source.ENQUIRY_FROM,
  });
}
