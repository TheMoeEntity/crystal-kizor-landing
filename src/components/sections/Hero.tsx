import { BreezeScreen } from "@/components/ui/BreezeScreen";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { getProfile } from "@/content/profile";
import { formatList } from "@/utils/format";

export async function Hero() {
  const profile = await getProfile();

  return (
    <section aria-labelledby="hero-title" className="pt-16 pb-24 md:pt-24 md:pb-32">
      <Container>
        <p className="text-stone text-lg">{formatList(profile.roles)}</p>
        <h1 id="hero-title" className="font-wide text-display mt-4 font-semibold">
          {profile.name}
        </h1>

        <div className="mt-12 grid items-end gap-12 md:mt-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-2xl leading-snug font-medium md:text-3xl">{profile.thesis}</p>
            <p className="text-stone mt-6 max-w-prose text-lg leading-relaxed">{profile.summary}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="#enquire">Work with Crystal</ButtonLink>
              <ButtonLink href="#work" variant="secondary">
                See the work
              </ButtonLink>
            </div>
          </div>
          <div className="md:col-span-6">
            <BreezeScreen className="aspect-[4/3] w-full rounded-sm" />
          </div>
        </div>
      </Container>
    </section>
  );
}
