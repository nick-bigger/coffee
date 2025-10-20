import { Link } from "../components/Link";

export { Page };

function Page() {
  const articles = [
    { slug: 'coffee-beans', title: 'The Best Coffee Beans' },
    { slug: 'brewing-methods', title: 'Top Brewing Methods' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Coffee Blog</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/${article.slug}`} className="text-blue-500 hover:underline">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}