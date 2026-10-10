import type { NavItem } from "@/types/navigation";

const navItems: readonly NavItem[] = [
  { label: "Work", href: "/#work" },
  { label: "Ideas", href: "/#ideas" },
  { label: "Mission", href: "/#mission" },
  { label: "About", href: "/#about" },
];

export async function getNavItems(): Promise<readonly NavItem[]> {
  return navItems;
}
