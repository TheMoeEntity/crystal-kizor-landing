import { BrandEntry } from "@/components/ui/BrandEntry";
import { Container } from "@/components/ui/Container";
import { Picture } from "@/components/ui/Picture";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getBrandsByIntent } from "@/content/brands";
import { portraitImages } from "@/content/media";
import { getSectionCopy } from "@/content/sections";

export async function Ideas() {
  const [copy, learn, book] = await Promise.all([
    getSectionCopy("ideas"),
    getBrandsByIntent("learn"),
    getBrandsByIntent("book"),
  ]);

  return (
    <section id="ideas" aria-labelledby="ideas-title" className="bg-limewash py-24 md:py-32">
      <Container className="grid gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Picture
            image={portraitImages.podcastMicrophone}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="rounded-sm md:sticky md:top-8"
          />
        </div>
        <div className="md:col-span-7">
          <SectionHeader id="ideas-title" copy={copy} />
          <ul className="border-canopy/15 mt-12 border-t">
            {[...learn, ...book].map((brand) => (
              <BrandEntry key={brand.slug} brand={brand} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
