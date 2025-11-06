import { Layout } from "../components/Layout";
import { Link } from "../components/Link";

export { Page };

function Page() {
  return (
    <Layout>
      <article className="mb-12 space-y-4">
        <p className="text-xl font-bold">Syndicated Feeds</p>
        <p className="mt-8 font-black tracking-wider">TWITTER</p>
        <p>
          You can follow on{" "}
          <Link
            className="underline underline-offset-4"
            href="https://x.com/coffeeatx"
            target="_blank"
          >
            Twitter
          </Link>{" "}
          to be notified of new posts and to add your thoughts and comments.
        </p>
        <p className="mt-14 font-black tracking-wider">SUBSCRIBE TO THE FEED</p>
        <p>
          You can use any RSS reader to recieve new articles directly without
          having to visit the site! Just copy the link below:
        </p>
        <li className="ml-6">
          RSS:{" "}
          <Link
            href="https://coffeeatx.com/feeds/main"
            className="underline underline-offset-4"
          >
            https://coffeeatx.com/feeds/main
          </Link>
        </li>
      </article>
    </Layout>
  );
}
