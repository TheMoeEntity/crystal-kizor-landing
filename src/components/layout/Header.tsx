import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { getNavItems } from "@/content/navigation";
import { getProfile } from "@/content/profile";

export async function Header() {
  const [profile, navItems] = await Promise.all([getProfile(), getNavItems()]);

  return (
    <header className="border-canopy/10 border-b">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#main" className="font-wide text-lg font-semibold tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-stone hover:text-canopy transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink href="#enquire" variant="secondary" className="px-4 py-2 text-sm">
          Enquire
        </ButtonLink>
      </Container>
    </header>
  );
}
