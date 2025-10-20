import React from "react";
import ReactDOM from "react-dom/client";

export { render };

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  ReactDOM.hydrateRoot(
    document.getElementById("root"),
    <Page {...pageProps} />
  );
}