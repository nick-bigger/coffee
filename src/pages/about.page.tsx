import { Layout } from "../components/Layout";

export { Page };

function Page() {
  return (
    <Layout>
      <article className="mb-12 space-y-4">
        <p className="text-xl font-bold">About</p>
        <p>
          Hey! I'm Nick. Coffee Grounds is my place to write about the growing
          coffee scene in Austin, Texas and all of it's many facets along the
          way.
        </p>
        <p>
          I am by no means a coffee expert - I can only claim to be a passionate
          and dedicated fan. Coffee, like any art, is an extremely subjective
          and passionate thing. This is my side! Everything written here is my
          opinion and my opinion only.
        </p>
        <p>I don't run ads and don't do sponsored posts. No AI.</p>
        <p>Thanks for stopping by. :)</p>
      </article>
    </Layout>
  );
}
