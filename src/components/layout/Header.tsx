import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Picture } from "@/components/ui/Picture";
import { brandImages } from "@/content/media";
import { getNavItems } from "@/content/navigation";
import Link from "next/link";

export async function Header() {
  const navItems = await getNavItems();

  return (
    <header className="border-canopy/10 border-b">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="focus-visible:outline-canopy shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <Picture image={brandImages.logoMonogram} sizes="48px" className="h-9 w-auto" />
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-stone hover:text-ink transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink href="/#enquire" variant="secondary" className="px-4 py-2 text-sm">
          Enquire
        </ButtonLink>
      </Container>
    </header>
  );
}
