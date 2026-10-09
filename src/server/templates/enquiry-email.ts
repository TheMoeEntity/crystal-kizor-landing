import "server-only";
import type { RenderedEmail } from "@/types/email";
import type { Enquiry } from "@/types/enquiry";
import { renderEnquiryHtml } from "./enquiry-email.html";
import { buildEnquiryEmailModel } from "./enquiry-email.model";
import { renderEnquiryText } from "./enquiry-email.text";

export async function buildEnquiryEmail(enquiry: Enquiry): Promise<RenderedEmail> {
  const model = await buildEnquiryEmailModel(enquiry);
  return {
    subject: model.subject,
    html: renderEnquiryHtml(model),
    text: renderEnquiryText(model),
  };
}
