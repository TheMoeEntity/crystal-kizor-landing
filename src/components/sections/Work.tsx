import { Benchmark } from "@/components/sections/Benchmark";
import { ProjectFeature } from "@/components/sections/ProjectFeature";
import { BrandEntry } from "@/components/ui/BrandEntry";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TextLink } from "@/components/ui/TextLink";
import { getBrandsByIntent } from "@/content/brands";
import { getProfile } from "@/content/profile";
import { getFeaturedProjects, getPortfolioLink } from "@/content/projects";
import { getSectionCopy } from "@/content/sections";

export async function Work() {
  const [copy, profile, projects, portfolio, buildBrands] = await Promise.all([
    getSectionCopy("work"),
    getProfile(),
    getFeaturedProjects(),
    getPortfolioLink(),
    getBrandsByIntent("build"),
  ]);
  const productBrands = buildBrands.filter((brand) => brand.slug !== "studio-coka");

  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-32">
      <Container>
        <SectionHeader id="work-title" copy={copy} />
        <Benchmark benchmark={profile.benchmark} />

        <div className="mt-24 space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectFeature key={project.slug} project={project} reverse={index % 2 === 1} />
          ))}
        </div>

        <TextLink href={portfolio.href} className="mt-16">
          {portfolio.label}
        </TextLink>

        <ul className="border-canopy/15 mt-24 border-t">
          {productBrands.map((brand) => (
            <BrandEntry key={brand.slug} brand={brand} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
