import { BreezeScreen } from "@/components/ui/BreezeScreen";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { getNotFoundCopy } from "@/content/pages";

export default async function NotFound() {
  const copy = await getNotFoundCopy();

  return (
    <main id="main" className="py-24 md:py-32">
      <Container className="grid items-center gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-7">
          <p className="text-stone text-lg">{copy.status}</p>
          <h1 className="font-wide text-heading mt-4 max-w-[16ch] font-semibold">{copy.title}</h1>
          <p className="text-stone mt-6 max-w-prose text-lg leading-relaxed">{copy.body}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/">{copy.homeLabel}</ButtonLink>
            <ButtonLink href="/#enquire" variant="secondary">
              {copy.enquireLabel}
            </ButtonLink>
          </div>
        </div>
        <div className="md:col-span-5">
          <BreezeScreen className="aspect-square w-full rounded-sm" />
        </div>
      </Container>
    </main>
  );
}
