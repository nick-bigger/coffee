import { Link } from "../components/Link";

export { Page };

function Page() {
  const articles = [
    { slug: "coffee-beans", title: "The Best Coffee Beans" },
    { slug: "brewing-methods", title: "Top Brewing Methods" },
  ];

  const loremIpsum = (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nunc vel risus commodo viverra maecenas accumsan lacus vel. Pellentesque habitant morbi tristique senectus et netus et malesuada.
      </p>
    </>
  );

  return (
    <div className="flex flex-col items-center w-full min-h-screen">

      <header className="max-w-5xl w-full px-8 pt-8 md:px-12 md:pt-12 lg:px-16 lg:pt-16 mb-16">
        <h1 className="!text-3xl !mb-0 font-bold uppercase tracking-widest">
          <Link href="/" className="no-underline hover:no-underline">
            Coffee Grounds
          </Link>
        </h1>
      </header>
      
      <div className="flex max-w-5xl w-full px-8 pb-8 md:px-12 md:pb-12 lg:px-16 lg:pb-16">
        
        <aside className="w-36 pr-8 flex-shrink-0 hidden md:block">
          <p>By Nick Bigger</p>
          <nav className="flex flex-col space-y-2 mb-8 text-end">
            <Link href="#">Archive</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Feeds</Link>
          </nav>
        </aside>

        <main className="flex-1 max-w-xl md:pl-8">
          <article className="mb-12 space-y-12">
            
            {articles.map((article) => (
              <section key={article.slug} className="space-y-4">
                
                <h2 className="text-lg font-normal mt-0">
                  <Link
                    href={`/${article.slug}`}
                    className="font-normal"
                  >
                    {article.title}
                  </Link>
                </h2>

                <div className="text-base leading-relaxed">{loremIpsum}</div>
                
              </section>
            ))}
          </article>
          
          <footer className="mt-12 pt-6 text-sm">
            © 2025 Coffee Grounds. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}