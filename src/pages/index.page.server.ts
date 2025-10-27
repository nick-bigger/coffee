import * as path from "path";

import { type Article, getArticlesFromMarkdown } from "../utils";

export async function onBeforeRender() {
  const articlesDirectory = path.join(process.cwd(), "src", "articles");
  const articles = getArticlesFromMarkdown(articlesDirectory).filter(
    (article) => !article.draft,
  );

  // Sort articles by pubDate in reverse order (newest first)
  articles.sort(
    (a: Article, b: Article) => b.pubDate.getTime() - a.pubDate.getTime(),
  );

  const pageProps = { articles };
  return {
    pageContext: {
      pageProps,
    },
  };
}
