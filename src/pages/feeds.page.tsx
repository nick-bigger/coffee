import { Layout } from "../components/Layout";
import { Link } from "../components/Link";

export { Page };

function Page() {
  return (
    <Layout>
      <article className="mb-12 space-y-4">
        <p className="text-xl font-bold">
          Syndicated Feeds
        </p>
        <p>I'm working on setting up some feeds so that you can subscribe and recieve new posts wherever you please! Once I get that working, you'll be able to subscribe here:</p>
        <li>RSS: <Link>https://coffeeatx.com/feeds/main</Link></li>
        <li>JSON: <Link>https://coffeeatx.com/feeds/json</Link></li>
      </article>
    </Layout>
  );
}