import { jsxs, jsx } from "react/jsx-runtime";
function Page() {
  return /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ jsx("p", { className: "text-red-500", children: "Coffee Beans" }),
    /* @__PURE__ */ jsx("a", { href: "/", className: "text-blue-500 hover:underline", children: "← Back to Home" })
  ] });
}
export {
  Page
};
