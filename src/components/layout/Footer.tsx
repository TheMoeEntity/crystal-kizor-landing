import { Container } from "@/components/ui/Container";
import { Picture } from "@/components/ui/Picture";
import { siteConfig } from "@/config/site";
import { getBrands } from "@/content/brands";
import { brandImages } from "@/content/media";
import { getSocialLinks } from "@/content/social";
import { getBrandHref } from "@/utils/brands";

export async function Footer() {
  const [brands, socials] = await Promise.all([getBrands(), getSocialLinks()]);

  return (
    <footer className="border-canopy/10 border-t py-16">
      <Container className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Picture image={brandImages.logoSignature} sizes="192px" className="w-48" />
        </div>

        <nav aria-labelledby="footer-brands" className="md:col-span-5">
          <h2 id="footer-brands" className="font-semibold">
            The ecosystem
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {brands.map((brand) => {
              const href = getBrandHref(brand.link);
              return (
                <li key={brand.slug}>
                  {href ? (
                    <a href={href} className="text-stone hover:text-ink transition-colors">
                      {brand.name}
                    </a>
                  ) : (
                    <span className="text-stone">
                      {brand.name} <span className="text-sm">(coming soon)</span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="font-semibold">Follow Studio COKA</h2>
          <ul className="mt-4 space-y-2">
            {socials.map((social) => (
              <li key={social.href}>
                <a href={social.href} className="text-stone hover:text-ink transition-colors">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="mt-16">
        <p className="text-stone text-sm">{siteConfig.attribution}</p>
      </Container>
    </footer>
  );
}
