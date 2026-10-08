import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { getBrands } from "@/content/brands";
import { getIntentPaths } from "@/content/intents";
import { groupBrandsByIntent } from "@/utils/brands";
import { SectionHeader } from "../ui/SectionHeader";
import { getSectionCopy } from "@/content/sections";

export async function IntentRouter() {
  const [copy, paths, brands] = await Promise.all([
    getSectionCopy("paths"),
    getIntentPaths(),
    getBrands(),
  ]);
  const brandsByIntent = groupBrandsByIntent(brands);

  return (
    <section id="paths" aria-labelledby="paths-title" className="bg-limewash py-24 md:py-32">
      <Container>
        <SectionHeader id="paths-title" copy={copy} />

        <ul className="border-canopy/15 mt-16 border-t">
          {paths.map((path) => (
            <li
              key={path.intent}
              className="border-canopy/15 grid gap-6 border-b py-10 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-4">
                <h3 className="font-wide text-2xl font-semibold">{path.title}</h3>
                <p className="text-stone mt-2">For {path.audience}</p>
              </div>
              <div className="md:col-span-5">
                <p className="text-lg leading-relaxed">{path.description}</p>
                <ul
                  aria-label="Includes"
                  className="text-stone mt-4 flex flex-wrap gap-x-6 gap-y-1"
                >
                  {brandsByIntent[path.intent].map((brand) => (
                    <li key={brand.slug}>{brand.name}</li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-3 md:justify-self-end">
                <TextLink href={path.cta.href}>{path.cta.label}</TextLink>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
