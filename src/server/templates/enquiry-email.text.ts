import "server-only";
import type { EnquiryEmailModel } from "@/types/email";

export function renderEnquiryText(model: EnquiryEmailModel): string {
  const rows = model.rows.map((row) => `${row.label}: ${row.value}`);
  return [
    `New enquiry: ${model.intentLabel}`,
    "",
    ...rows,
    "",
    "Message:",
    model.message,
    "",
    `Reply to this email to answer ${model.firstName} directly.`,
    `Sent from the enquiry form at ${model.siteHost}.`,
  ].join("\n");
}
