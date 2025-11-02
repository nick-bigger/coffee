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
              <div>
                <Link
                  href={article.link}
                  target="_blank"
                  className="text-lg uppercase underline decoration-[0.2px] underline-offset-[4px]"
                >
                  {article.title}
                </Link>
                <Link
                  className="ml-1"
                  href={`/articles/${article.slug}`}
                  title={`Permanent link to ${article.title}`}
                >
                  <LinkIcon
                    className="mx-2 mb-1 inline justify-center"
                    size={14}
                  />
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
                blockquote(props) {
                  return (
                    <blockquote
                      className="border-l-1 border-[rgb(74,68,68)] pl-4"
                      {...props}
                    />
                  );
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
