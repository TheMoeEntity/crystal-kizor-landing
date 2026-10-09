import "server-only";
import { siteConfig } from "@/config/site";
import { getEnquiryFormCopy } from "@/content/enquiry";
import { brandImages } from "@/content/media";
import type { VisitorIntent } from "@/types/brand";
import type { EmailRow, EnquiryEmailModel } from "@/types/email";
import type { Enquiry } from "@/types/enquiry";
import { assertNever } from "@/utils/assert";
import { firstName, formatIsoDate, formatNumber } from "@/utils/format";

const SUBJECT_TAGS: Record<VisitorIntent, string> = {
  build: "Project",
  learn: "Learning",
  book: "Speaking",
  support: "Partnership",
};

function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function preview(value: string, length: number): string {
  const flat = singleLine(value);
  return flat.length > length ? `${flat.slice(0, length - 1)}…` : flat;
}

// One model, two renderers (HTML and plain text), so both versions always say the same thing.
export async function buildEnquiryEmailModel(enquiry: Enquiry): Promise<EnquiryEmailModel> {
  const copy = await getEnquiryFormCopy();
  const rows: EmailRow[] = [
    { label: "Name", value: enquiry.name },
    { label: "Email", value: enquiry.email, href: `mailto:${enquiry.email}` },
  ];
  if (enquiry.organisation) rows.push({ label: "Organisation", value: enquiry.organisation });

  switch (enquiry.intent) {
    case "build":
      rows.push({ label: "Project type", value: copy.projectTypeOptions[enquiry.projectType] });
      if (enquiry.location) rows.push({ label: "Location", value: enquiry.location });
      break;
    case "book":
      rows.push({ label: "Event date", value: formatIsoDate(enquiry.eventDate) });
      if (enquiry.audienceSize) {
        rows.push({ label: "Expected audience", value: formatNumber(enquiry.audienceSize) });
      }
      break;
    case "learn":
    case "support":
      break;
    default:
      assertNever(enquiry);
  }

  const intentLabel = copy.intentOptions[enquiry.intent];

  return {
    subject: `[${SUBJECT_TAGS[enquiry.intent]}] New enquiry from ${singleLine(enquiry.name)}`,
    preheader: `${intentLabel}: ${preview(enquiry.message, 90)}`,
    intentTag: SUBJECT_TAGS[enquiry.intent],
    intentLabel,
    name: singleLine(enquiry.name),
    firstName: firstName(enquiry.name),
    email: enquiry.email,
    rows,
    message: enquiry.message,
    logoUrl: new URL(brandImages.logoHorizontal.src, siteConfig.url).toString(),
    siteHost: new URL(siteConfig.url).host,
  };
}
