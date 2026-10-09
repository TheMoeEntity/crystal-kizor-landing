import { z } from "zod";
import { PROJECT_TYPES } from "@/constants/enquiry";
import { VISITOR_INTENTS } from "@/constants/intents";

// FormData sends "" for untouched inputs; treat that as "not provided".
const emptyToUndefined = (value: unknown) =>
  typeof value === "string" && value.trim() === "" ? undefined : value;

const optionalText = (max: number) =>
  z.preprocess(emptyToUndefined, z.string().trim().max(max).optional());

export const intentSchema = z.enum(VISITOR_INTENTS, "Choose what you'd like to talk about.");

export const enquiryBaseSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(100),
  email: z.string().trim().pipe(z.email("Enter a valid email address.")),
  organisation: optionalText(120),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a little more (at least 20 characters).")
    .max(2000, "Keep your message under 2,000 characters."),
});

export const enquirySchema = z.discriminatedUnion("intent", [
  enquiryBaseSchema.extend({
    intent: z.literal("build"),
    projectType: z.enum(PROJECT_TYPES, "Choose a project type."),
    location: optionalText(120),
  }),
  enquiryBaseSchema.extend({
    intent: z.literal("book"),
    eventDate: z.iso.date("Enter the event date."),
    audienceSize: z.preprocess(
      emptyToUndefined,
      z.coerce.number().int().positive().max(100_000).optional(),
    ),
  }),
  enquiryBaseSchema.extend({ intent: z.literal("learn") }),
  enquiryBaseSchema.extend({ intent: z.literal("support") }),
]);
