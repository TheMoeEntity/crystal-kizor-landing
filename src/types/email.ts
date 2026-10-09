export interface EmailRow {
  label: string;
  value: string;
  href?: string;
}

export interface EnquiryEmailModel {
  subject: string;
  preheader: string;
  intentTag: string;
  intentLabel: string;
  name: string;
  firstName: string;
  email: string;
  rows: readonly EmailRow[];
  message: string;
  logoUrl: string;
  siteHost: string;
}

export interface RenderedEmail {
  subject: string;
  html: string;
  text: string;
}
