import type { Person, WithContext } from "schema-dts";
import type { Brand } from "@/types/brand";
import type { Profile } from "@/types/profile";

export function buildPersonSchema(
  profile: Profile,
  brands: readonly Brand[],
  siteUrl: string,
): WithContext<Person> {
  const sameAs = brands.flatMap((brand) =>
    brand.link.kind === "external" ? [brand.link.href] : [],
  );

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    jobTitle: profile.jobTitle,
    description: profile.summary,
    worksFor: {
      "@type": "Organization",
      name: "Studio COKA",
      url: "https://studiocoka.com",
    },
    sameAs,
  };
}
