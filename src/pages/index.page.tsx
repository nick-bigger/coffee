import Markdown from "react-markdown";
import ATXCoffeeFestContent from "../articles/austin-coffee-fest.md?raw";
import CoffeeGroundsContent from "../articles/coffee-grounds.md?raw";
import { Layout } from "../components/Layout";

export { Page };

function Page() {
  const articles = [
    { slug: "atx-coffee-fest", title: "ATX Coffee Fest", content: ATXCoffeeFestContent },
    { slug: "coffee-grounds", title: "Coffee Grounds", content: CoffeeGroundsContent },
  ];

  return (
    <Layout>
      <article className="mb-12 space-y-24">
        {articles.map((article) => (
          <section key={article.slug} className="space-y-4">
            <h2 className="text-lg font-normal mt-0">
              <p className="font-normal underline underline-offset-[4px] decoration-[0.2px]">
                {article.title}
              </p>
            </h2>
            <Markdown components={{
              a(props) {
                return <a className="text-sm" {...props} />;
              },
              p(props) {
                return <p className="leading-[23px]" {...props} />;
              }
            }}>
                {article.content}
            </Markdown>
          </section>
        ))}
      </article>
    </Layout>
  );
}