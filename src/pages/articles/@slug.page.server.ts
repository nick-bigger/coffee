import type { PageContextBuiltIn } from "vite-plugin-ssr/types";
import ATXCoffeeFestContent from "../../articles/austin-coffee-fest.md?raw";
import CoffeeGroundsContent from "../../articles/coffee-grounds.md?raw";

const articleContents: Record<string, string> = {
  "atx-coffee-fest": ATXCoffeeFestContent,
  "coffee-grounds": CoffeeGroundsContent,
};

type PageProps = {
  title: string;
  content: string;
};

export async function onBeforeRender(pageContext: PageContextBuiltIn) {
  const { slug } = pageContext.routeParams;
  const content = articleContents[slug];

  if (!content) {
    throw new Error(`Article with slug "${slug}" not found.`);
  }

  const titleMatch = content.match(/title:\s*(.*)/);
  const title = titleMatch ? titleMatch[1].trim() : slug;

  const pageProps: PageProps = {
    title,
    content,
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}