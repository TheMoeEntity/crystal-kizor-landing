"use server";

import { z } from "zod";
import { ENQUIRY_HONEYPOT_FIELD } from "@/constants/enquiry";
import { enquiryBaseSchema, enquirySchema, intentSchema } from "@/schemas/enquiry.schema";
import { sendEnquiry } from "@/server/services/enquiry.service";
import type { EnquiryFormState } from "@/types/enquiry";
import { formDataToRecord } from "@/utils/form";

export async function submitEnquiry(
  _previous: EnquiryFormState,
  formData: FormData,
): Promise<EnquiryFormState> {
  const { [ENQUIRY_HONEYPOT_FIELD]: honeypot, ...values } = formDataToRecord(formData);

  // Bots fill every field. Tell them it worked, and send nothing.
  if (honeypot) return { status: "success" };

  // 1. Route on intent first: without it we don't know which schema applies.
  const intent = intentSchema.safeParse(values.intent);
  if (!intent.success) {
    const base = enquiryBaseSchema.safeParse(values);
    return {
      status: "invalid",
      values,
      fieldErrors: {
        ...(base.success ? {} : z.flattenError(base.error).fieldErrors),
        intent: intent.error.issues.map((issue) => issue.message),
      },
    };
  }

  // 2. Validate the full enquiry for that intent.
  const parsed = enquirySchema.safeParse(values);
  if (!parsed.success) {
    return { status: "invalid", values, fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  // 3. Hand clean, typed data to the service.
  const result = await sendEnquiry(parsed.data);
  return result.ok ? { status: "success" } : { status: "error", values };
}
