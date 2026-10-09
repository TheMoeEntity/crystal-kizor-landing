import type { EnquiryFormCopy } from "@/types/enquiry";

const formCopy: EnquiryFormCopy = {
  intentLegend: "What would you like to talk about?",
  intentOptions: {
    build: "A building, interior or furniture project",
    learn: "Learning or education",
    book: "A speaking invitation",
    support: "Partnership or support",
  },
  projectTypePlaceholder: "Choose a project type",
  projectTypeOptions: {
    residential: "Residential",
    commercial: "Commercial or civic",
    interior: "Interior design",
    furniture: "Furniture (ELEvated)",
  },
  submitLabel: "Send enquiry",
  pendingLabel: "Sending…",
  privacyNote: "Your details are only used to reply to this enquiry.",
  successTitle: "Thank you. Your enquiry is on its way.",
  successBody: "It has been sent to Crystal's team, who will reply by email.",
  errorMessage: "Your enquiry couldn't be sent just now. Please try again in a few minutes.",
};

export async function getEnquiryFormCopy(): Promise<EnquiryFormCopy> {
  return formCopy;
}
