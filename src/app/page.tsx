import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { getBrands } from "@/content/brands";
import { getProfile } from "@/content/profile";
import { buildPersonSchema } from "@/lib/seo/structured-data";

const swatches = [
  "bg-canopy",
  "bg-canopy-soft",
  "bg-concrete",
  "bg-limewash",
  "bg-stone",
  "bg-ochre",
];

export default async function HomePage() {
  const [profile, brands] = await Promise.all([getProfile(), getBrands()]);
  return (
    <>
      <JsonLd data={buildPersonSchema(profile, brands, siteConfig.url)} />
      <main className="py-24">
        <Container>
          <h1 className="font-wide text-display font-semibold">Crystal Kizor</h1>
          <p className="text-stone mt-8 max-w-prose text-lg leading-relaxed">
            Architect, designer and founder of Studio COKA, a climate-responsive design-build studio
            in Enugu, Nigeria.
          </p>
          <h2 className="text-heading mt-20 font-semibold">Built for this climate</h2>
          <div className="mt-10 flex flex-wrap gap-4">
            {swatches.map((swatch) => (
              <div
                key={swatch}
                className={`${swatch} ring-canopy/10 h-20 w-32 rounded-sm ring-1`}
              />
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}
