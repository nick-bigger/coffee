import type { PageContextBuiltIn } from "vite-plugin-ssr/types";

const modules = import.meta.glob("../../articles/*.md", { as: "raw" });

const articleContents: Record<string, string> = {};

// Dynamically pull in article content.
for (const path in modules) {
  const slug = path.replace("../../articles/", "").replace(/\.md$/, "");
  articleContents[slug] = (await modules[path]()) as string;
}

type PageProps = {
  title: string;
  content: string;
  pubDate: Date;
  draft: boolean;
  description: string;
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

  const descriptionMatch = content.match(/description:\s*(.*)/);
  const description = descriptionMatch
    ? descriptionMatch[1].trim()
    : content.split("\n")[0].trim(); // Take the first line as description if not specified

  const pageProps: PageProps = {
    title,
    content,
    pubDate,
    draft,
    description,
  };

  return {
    pageContext: {
      pageProps,
      title, // Pass title to pageContext for use in _default.page.server.jsx
      description, // Pass description to pageContext for use in _default.page.server.jsx
    },
  };
}

export async function prerender() {
  const urls = Object.keys(articleContents).map((slug) => `/articles/${slug}`);
  return urls.map((url) => ({ url }));
}
