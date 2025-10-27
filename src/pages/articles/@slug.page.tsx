import Markdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";

import { Layout } from "../../components/Layout";

export { Page };

type PageProps = {
  title: string;
  content: string;
  pubDate: Date;
};

function Page(props: PageProps) {
  return (
    <Layout>
      <article className="mb-12 space-y-24">
        <section className="space-y-4">
          <div>
            <h2 className="text-lg uppercase underline decoration-[0.2px] underline-offset-[4px]">
              {props.title}
            </h2>
            <small>
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
                timeZone: "America/Chicago",
                timeZoneName: "short",
              }).format(new Date(props.pubDate))}
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
            {props.content}
          </Markdown>
        </section>
      </article>
    </Layout>
  );
}
