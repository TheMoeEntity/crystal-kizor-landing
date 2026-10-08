import type { SocialLink } from "@/types/social";

const socialLinks: readonly SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/studio.coka/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/studio-coka/" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC21NBowgir5hC8ZStfBCXIg" },
];

export async function getSocialLinks(): Promise<readonly SocialLink[]> {
  return socialLinks;
}
