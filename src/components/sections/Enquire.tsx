import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getEnquiryFormCopy } from "@/content/enquiry";
import { getSectionCopy } from "@/content/sections";

export async function Enquire() {
  const [copy, formCopy] = await Promise.all([getSectionCopy("enquire"), getEnquiryFormCopy()]);

  return (
    <section id="enquire" aria-labelledby="enquire-title" className="bg-limewash py-24 md:py-32">
      <Container className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <SectionHeader id="enquire-title" copy={copy} />
        </div>
        <div className="md:col-span-7">
          <EnquiryForm copy={formCopy} />
        </div>
      </Container>
    </section>
  );
}
