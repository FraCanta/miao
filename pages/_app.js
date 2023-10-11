import "@/styles/globals.css";
import "@/styles/contact.css";
import "@/styles/wordpress.css";
import "@/styles/portfolio.css";

import Layout from "@/components/layout/layout";
import { useRouter } from "next/router";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <main>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-57G0ZKF60T"
      ></Script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());


  gtag('config', 'G-57G0ZKF60T');
        `}
      </Script>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></Script>
      <Script
        type="text/javascript"
        charset="UTF-8"
        src="//cdn.cookie-script.com/s/6206605853f8d2265c8c18f1fec772d8.js"
        strategy="afterInteractive"
      ></Script>
    </main>
  );
}
