import Markdown from "react-markdown";
import CoffeeGroundsContent from "../articles/coffee-grounds.md?raw";

export { Page };

function Page() {
  const articles = [
    { slug: "coffee-grounds", title: "Coffee Grounds", content: CoffeeGroundsContent },
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen">

      <header className="max-w-5xl w-full px-8 pt-8 md:px-12 md:pt-12 lg:px-16 lg:pt-16 mb-16">
        <h1 className="!text-3xl !mb-0 font-bold uppercase tracking-widest">
          <h1 className="no-underline hover:no-underline">
            Coffee Grounds
          </h1>
        </h1>
      </header>
      
      <div className="flex max-w-5xl w-full px-8 pb-8 md:px-12 md:pb-12 lg:px-16 lg:pb-16">
        
        <aside className="w-36 pr-8 flex-shrink-0 hidden md:block">
          <p>By Nick Bigger</p>
        </aside>

        <main className="flex-1 max-w-xl md:pl-8">
          <article className="mb-12 space-y-12">
            
            {articles.map((article) => (
              <section key={article.slug} className="space-y-4">
                
                <h2 className="text-lg font-normal mt-0">
                  <p className="font-normal">
                    {article.title}
                  </p>
                </h2>

                <Markdown components={{
                  a(props) {
                    return <a className="text-sm" {...props} />;
                  },
                  p(props) {
                    return <p className="text-sm" {...props} />;
                  }
                }}>
                    {article.content}
                </Markdown>
                
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