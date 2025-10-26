import Markdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";

import { Layout } from "../../components/Layout";

export { Page };

type PageProps = {
  title: string;
  content: string;
};

function Page(props: PageProps) {
  return (
    <Layout>
      <article className="mb-12 space-y-24">
        <section className="space-y-4">
          <h2 className="mt-0 text-lg font-normal">
            <p className="font-normal uppercase underline decoration-[0.2px] underline-offset-[4px]">
              {props.title}
            </p>
          </h2>
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
            {props.content}
          </Markdown>
        </section>
      </article>
    </Layout>
  );
}
