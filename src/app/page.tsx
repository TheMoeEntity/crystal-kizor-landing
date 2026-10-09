import { About } from "@/components/sections/About";
import { Enquire } from "@/components/sections/Enquire";
import { Hero } from "@/components/sections/Hero";
import { Ideas } from "@/components/sections/Ideas";
import { IntentRouter } from "@/components/sections/IntentRouter";
import { Mission } from "@/components/sections/Mission";
import { Work } from "@/components/sections/Work";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { getBrands } from "@/content/brands";
import { getProfile } from "@/content/profile";
import { buildPersonSchema } from "@/lib/seo/structured-data";

export default async function HomePage() {
  const [profile, brands] = await Promise.all([getProfile(), getBrands()]);

  return (
    <>
      <JsonLd data={buildPersonSchema(profile, brands, siteConfig.url)} />
      <main id="main">
        <Hero />
        <IntentRouter />
        <Work />
        <Ideas />
        <Mission />
        <About />
        <Enquire />
      </main>
    </>
  );
}
