import React from "react";
import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";

export { render };

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const viewHtml = ReactDOMServer.renderToString(
    <Page {...pageProps} />
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