import { Container } from "@/components/ui/Container";
import { Picture } from "@/components/ui/Picture";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { portraitImages } from "@/content/media";
import { getProfile } from "@/content/profile";
import { getSectionCopy } from "@/content/sections";

export async function About() {
  const [copy, profile] = await Promise.all([getSectionCopy("about"), getProfile()]);

  return (
    <section id="about" aria-labelledby="about-title" className="py-24 md:py-32">
      <Container className="grid gap-12 md:grid-cols-12 md:items-center md:gap-10">
        <div className="md:col-span-6">
          <Picture
            image={portraitImages.armsCrossedMoodboard}
            sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
            className="rounded-sm"
          />
        </div>
        <div className="md:col-span-6">
          <SectionHeader id="about-title" copy={copy} />
          <div className="mt-8 space-y-5 text-lg leading-relaxed">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <h3 className="mt-10 font-semibold">Education</h3>
          <ul className="text-stone mt-3 space-y-1">
            {profile.credentials.map((credential) => (
              <li key={credential}>{credential}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
