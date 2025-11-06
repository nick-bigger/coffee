import React from "react";

import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";

import { PageShell } from "./PageShell";

export const passToClient = ["pageProps", "title", "description"];
export { render };

async function render(pageContext) {
  const { Page, pageProps, title, description } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell>
      <Page {...pageProps} />
    </PageShell>,
  );

  const titleContent = title ? `Coffee Grounds: ${title}` : "Coffee Grounds";
  const descriptionContent =
    description ||
    "Coffee Grounds is my place to write about the growing coffee scene in Austin, Texas and all of it's many facets along the way.";

  return escapeInject`<!DOCTYPE html>
    <html>
    <head>
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XLFPY5S88N"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XLFPY5S88N');
      </script>
      <!-- End Google tag (gtag.js) -->
      <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KNGSSDX2');</script>
      <!-- End Google Tag Manager -->
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="og:title" content="${titleContent}" />
      <meta
        name="og:description"
        content="${descriptionContent}"
      />
      <meta property="og:image" content="https://coffeeatx.com/cg-wide-card.png" />
      <meta property="og:type" content="article" />
      <meta name="msapplication-TileColor" content="#111827" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta
        name="theme-color"
        content="#111827"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#111827"
        media="(prefers-color-scheme: dark)"
      />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed"
        href="/feeds/rss.xml"
      />
      <title>${titleContent}</title>
      <meta name="description" content="${descriptionContent}" />
      <meta property="og:title" content="${titleContent}" />
      <meta property="og:description" content="${descriptionContent}" />
      <meta property="og:image" content="https://coffeeatx.com/cg-wide-card.png" />
      <meta property="og:type" content="article" />
      <!-- Twitter stuff -->
      <meta name="twitter:card" content="summary">
      <meta name="twitter:site" content="@coffeeatx" />
      <meta name="twitter:creator" content="@conifercrown" />
      <meta name="twitter:title" content="${titleContent}" />
      <meta name="twitter:description" content="${descriptionContent}" />
      <meta name="twitter:image" content="https://coffeeatx.com/cg-wide-card.png" />
      <!-- End Twitter stuff -->
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://coffeeatx.com/#website",
              "url": "https://coffeeatx.com",
              "name": "Coffee Grounds",
              "description": "Coffee Grounds is my place to write about the growing coffee scene in Austin, Texas and all of it's many facets along the way.",
              "publisher": {
                "@id": "https://coffeeatx.com/#person"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://coffeeatx.com/?s={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@type": "Person",
              "@id": "https://coffeeatx.com/#person",
              "name": "Nick Bigger",
              "url": "https://coffeeatx.com",
              "description": "Coffee Grounds is my place to write about the growing coffee scene in Austin, Texas and all of it's many facets along the way.",
              "sameAs": [
                "https://conifercrown.com/#/blog",
                "https://conifercrown.com/#/poems",
                "https://conifercrown.com/#/thoughts",
                "https://beliapp.co/app/daizycrown",
                "https://www.goodreads.com/user/show/34398985-nick",
                "https://boxd.it/ec5Jr",
                "https://open.spotify.com/user/1136204305?si=e34a13bd7c7149e4",
                "https://www.instagram.com/nick.bigger/",
                "https://www.linkedin.com/in/nickbigger/",
                "https://github.com/nick-bigger"
              ]
            }
          ]
        }
      </script>
    </head>
      <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNGSSDX2"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
