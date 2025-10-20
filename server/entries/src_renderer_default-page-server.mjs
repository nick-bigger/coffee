import { jsx } from "react/jsx-runtime";
import "react";
import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const viewHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(Page, { ...pageProps })
  );
  const title = "Coffee Grounds";
  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link href="/src/index.css" rel="stylesheet">
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(viewHtml)}</div>
      </body>
    </html>`;
}
export {
  render
};
