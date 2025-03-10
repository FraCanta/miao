import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />{" "}
        <meta
          name="google-site-verification"
          content="Hqy3nt81_2N8PfqFnJbWpxy6Rhc-rjD1hDTDfUyU2sA"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="google-site-verification"
          content="6WDfIu3pIELXHelT5H2YxmCYWbcTna589ZfqrIjBwj4"
        />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="../sitemap.xml"
        />{" "}
        <Script
          src="https://widgets.tree-nation.com/js/widgets/v1/widgets.min.js?v=1.0"
          strategy="beforeInteractive"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
