import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
