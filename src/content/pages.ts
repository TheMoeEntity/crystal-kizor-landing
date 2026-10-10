import type { NotFoundCopy } from "@/types/page";

const notFound: NotFoundCopy = {
  status: "Page not found (404)",
  title: "This room hasn't been built yet.",
  body: "The page you're looking for doesn't exist or has moved. Everything about Crystal's work, from buildings to talks, is on the home page.",
  homeLabel: "Go to the home page",
  enquireLabel: "Start a conversation",
};

export async function getNotFoundCopy(): Promise<NotFoundCopy> {
  return notFound;
}
