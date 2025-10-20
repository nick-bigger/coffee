import React from "react";
import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";
import { PageShell } from "./PageShell";

export { render };

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell>
      <Page {...pageProps} />
    </PageShell>
  )


  const title = "Coffee Grounds";

  const pageViewStyle = 'width: 100%; min-height: 100vh;'; 

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        </head>
      <body>
        <div id="page-view" style="${pageViewStyle}">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}