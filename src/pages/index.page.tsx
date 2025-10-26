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
            <h2 className="text-lg font-normal mt-0">
              <Link href={`/articles/${article.slug}`} className="uppercase underline underline-offset-[4px] decoration-[0.2px]">
                {article.title}
              </Link>
            </h2>
            <Markdown
              remarkPlugins={[remarkFrontmatter]}
              components={{
                a(props) {
                  return <a className="text-sm text-blue-300 leading-[23px]" {...props} />;
                },
                p(props) {
                  return <p className="leading-[23px]" {...props} />;
                }
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