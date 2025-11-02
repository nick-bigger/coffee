import { format } from "date-fns/format";
import { Link as LinkIcon } from "lucide-react";
import Markdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";

import { Layout } from "../components/Layout";
import { Link } from "../components/Link";
import { type Article } from "../utils";

export { Page };

function Page({ articles }: { articles: Article[] }) {
  return (
    <Layout>
      <article className="mb-12 space-y-24">
        {articles.map((article) => (
          <section key={article.slug} className="space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <Link
                  href={article.link}
                  target="_blank"
                  className="uppercase underline decoration-[0.2px] underline-offset-[4px]"
                >
                  <h2 className="mt-0 text-lg font-normal">{article.title}</h2>
                </Link>
                <Link
                  href={`/articles/${article.slug}`}
                  title={`Permanent link to ${article.title}`}
                >
                  <LinkIcon className="m-1 h-4" />
                </Link>
              </div>
              <small>
                {format(article.pubDate, "PPP")} at{" "}
                {format(article.pubDate, "p")} CST
              </small>
            </div>
            <Markdown
              remarkPlugins={[remarkFrontmatter]}
              components={{
                a(props) {
                  return (
                    <a
                      className="text-sm leading-[23px] text-blue-300"
                      {...props}
                    />
                  );
                },
                p(props) {
                  return <p className="leading-[23px]" {...props} />;
                },
              }}
            >
              {article.content}
            </Markdown>
          </section>
        ))}
      </article>
    </Layout>
  );
}
