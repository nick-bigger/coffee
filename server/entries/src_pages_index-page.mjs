import { jsxs, jsx } from "react/jsx-runtime";
function Page() {
  const articles = [
    { slug: "coffee-beans", title: "The Best Coffee Beans" },
    { slug: "brewing-methods", title: "Top Brewing Methods" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4", children: "Coffee Blog" }),
    /* @__PURE__ */ jsx("ul", { children: articles.map((article) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `/${article.slug}`, className: "text-blue-500 hover:underline", children: article.title }) }, article.slug)) })
  ] });
}
export {
  Page
};
