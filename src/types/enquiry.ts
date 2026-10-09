import type { z } from "zod";
import type { PROJECT_TYPES } from "@/constants/enquiry";
import type { enquirySchema } from "@/schemas/enquiry.schema";
import type { VisitorIntent } from "./brand";

export type ProjectType = (typeof PROJECT_TYPES)[number];

export type Enquiry = z.infer<typeof enquirySchema>;

export type EnquiryField =
  | "intent"
  | "name"
  | "email"
  | "organisation"
  | "projectType"
  | "location"
  | "eventDate"
  | "audienceSize"
  | "message";

export type EnquiryFieldErrors = Partial<Record<EnquiryField, string[]>>;
export type EnquiryFormValues = Partial<Record<EnquiryField, string>>;

export type EnquiryFormState =
  | { status: "idle" }
  | { status: "invalid"; fieldErrors: EnquiryFieldErrors; values: EnquiryFormValues }
  | { status: "error"; values: EnquiryFormValues }
  | { status: "success" };

export type ServiceResult = { ok: true } | { ok: false };

export interface EnquiryFormCopy {
  intentLegend: string;
  intentOptions: Record<VisitorIntent, string>;
  projectTypePlaceholder: string;
  projectTypeOptions: Record<ProjectType, string>;
  submitLabel: string;
  pendingLabel: string;
  privacyNote: string;
  successTitle: string;
  successBody: string;
  errorMessage: string;
}
