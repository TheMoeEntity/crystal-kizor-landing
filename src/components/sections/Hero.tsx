import { BreezeScreen } from "@/components/ui/BreezeScreen";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Picture } from "@/components/ui/Picture";
import { brandImages } from "@/content/media";
import { getProfile } from "@/content/profile";
import { formatList } from "@/utils/format";

export async function Hero() {
  const profile = await getProfile();

  return (
    <section aria-labelledby="hero-title" className="pt-12 pb-24 md:pt-20 md:pb-32">
      <Container className="grid items-center gap-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <h1 id="hero-title">
            <Picture
              image={brandImages.logoPrimary}
              sizes="(min-width: 768px) 420px, 70vw"
              className="w-[min(70vw,420px)]"
            />
          </h1>
          <p className="text-stone mt-8 text-lg">{formatList(profile.roles)}</p>
          <p className="font-wide text-heading mt-10 max-w-[18ch] font-semibold">
            {profile.thesis}
          </p>
          <p className="text-stone mt-6 max-w-prose text-lg leading-relaxed">{profile.summary}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="#enquire">Work with Crystal</ButtonLink>
            <ButtonLink href="#work" variant="secondary">
              See the work
            </ButtonLink>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative mx-auto max-w-sm md:max-w-none">
            <BreezeScreen className="absolute -right-3 -bottom-3 h-3/4 w-3/4 rounded-sm md:-right-8 md:-bottom-8" />
            <Picture
              image={profile.portrait}
              sizes="(min-width: 1280px) 500px, (min-width: 768px) 40vw, 384px"
              preload
              className="relative rounded-sm"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
