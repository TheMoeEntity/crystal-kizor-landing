import { BrandEntry } from "@/components/ui/BrandEntry";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getBrandsByIntent } from "@/content/brands";
import { getSectionCopy } from "@/content/sections";

export async function Mission() {
  const [copy, brands] = await Promise.all([
    getSectionCopy("mission"),
    getBrandsByIntent("support"),
  ]);

  return (
    <section
      id="mission"
      aria-labelledby="mission-title"
      className="bg-canopy text-limewash py-24 md:py-32"
    >
      <Container>
        <SectionHeader id="mission-title" copy={copy} tone="dark" />
        <ul className="border-limewash/15 mt-16 grid border-t md:grid-cols-2 md:gap-x-10">
          {brands.map((brand) => (
            <BrandEntry key={brand.slug} brand={brand} tone="dark" />
          ))}
        </ul>
      </Container>
    </section>
  );
}
