import { Layout } from "../components/Layout";

export { Page };

function Page() {
  return (
    <Layout>
      <article className="mb-12 space-y-4">
        <h2 className="text-lg font-normal mt-0">
          <p className="font-normal underline underline-offset-[4px]">
            Feeds
          </p>
        </h2>
      </article>
    </Layout>
  );
}