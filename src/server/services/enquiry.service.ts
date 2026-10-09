import "server-only";
import { serverEnv } from "@/lib/env.server";
import { resend } from "@/lib/resend";
import { buildEnquiryEmail } from "@/server/templates/enquiry-email";
import type { Enquiry, ServiceResult } from "@/types/enquiry";

export async function sendEnquiry(enquiry: Enquiry): Promise<ServiceResult> {
  const email = await buildEnquiryEmail(enquiry);

  try {
    const { error } = await resend.emails.send({
      from: serverEnv.ENQUIRY_FROM,
      to: serverEnv.ENQUIRY_TO,
      replyTo: enquiry.email,
      subject: email.subject,
      html: email.html,
      text: email.text,
    });

    if (error) {
      // Log the failure, never the visitor's personal details.
      console.error("[enquiry] provider rejected message", {
        intent: enquiry.intent,
        reason: error.name,
      });
      return { ok: false };
    }
    return { ok: true };
  } catch (cause) {
    console.error("[enquiry] provider unreachable", {
      intent: enquiry.intent,
      reason: cause instanceof Error ? cause.message : "unknown",
    });
    return { ok: false };
  }
}
