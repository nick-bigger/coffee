import type { PageContextBuiltIn } from "vite-plugin-ssr/types";

import ATXCoffeeFestContent from "../../articles/austin-coffee-fest.md?raw";
import CoffeeGroundsContent from "../../articles/coffee-grounds.md?raw";
import PalominoSoftOpen from "../../articles/palomino-soft-open.md?raw";

const articleContents: Record<string, string> = {
  "atx-coffee-fest": ATXCoffeeFestContent,
  "coffee-grounds": CoffeeGroundsContent,
  "palomino-coffee-soft-open": PalominoSoftOpen,
};

type PageProps = {
  title: string;
  content: string;
  pubDate: Date;
  draft: boolean;
};

export async function onBeforeRender(pageContext: PageContextBuiltIn) {
  const { slug } = pageContext.routeParams;
  const content = articleContents[slug];

  if (!content) {
    throw new Error(`Article with slug "${slug}" not found.`);
  }

  const titleMatch = content.match(/title:\s*(.*)/);
  const title = titleMatch ? titleMatch[1].trim() : slug;

  const draftMatch = content.match(/draft:\s*(true)/);
  const draft = !!draftMatch;

  const pubDateMatch = content.match(/pubDate:\s*(.*)/);
  let pubDate: Date;
  if (pubDateMatch) {
    const parsedDate = new Date(pubDateMatch[1].trim());
    pubDate = isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
  } else {
    pubDate = new Date();
  }

  const pageProps: PageProps = {
    title,
    content,
    pubDate,
    draft,
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}

export async function prerender() {
  const urls = Object.keys(articleContents).map((slug) => `/articles/${slug}`);
  return urls.map((url) => ({ url }));
}
