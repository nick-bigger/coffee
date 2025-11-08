import { format } from "date-fns/format";

import { Markdown } from "@/components/Markdown";

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
              {format(props.pubDate, "PPP")} at {format(props.pubDate, "p")} CST
            </small>
          </div>
          <Markdown>{props.content}</Markdown>
        </section>
      </article>
    </Layout>
  );
}
