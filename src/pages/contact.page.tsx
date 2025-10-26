import { Layout } from "../components/Layout";
import { Link } from "../components/Link";

export { Page };

function Page() {
  return (
    <Layout>
      <article className="mb-12 space-y-4">
        <p className="text-xl font-bold">
          Contact Information
        </p>
        <p>Please feel both free and encouraged to share your feelings on Coffee Grounds! I am always learning and growing, so please notify me of any errors. Please also feel free to reach out with information or suggestions on topics that you would like to see written about.</p>
        <p>Please send all emails to:</p>
        <Link href="mailto:comments@coffeeatx.com">comments@coffeeatx.com</Link>
      </article>
    </Layout>
  );
}