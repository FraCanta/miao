import "@/styles/globals.css";
import "@/styles/contact.css";
import "@/styles/wordpress.css";
import "@/styles/portfolio.css";

import Layout from "@/components/layout/layout";
import PageTransition from "@/components/layout/PageTransition";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "lenis/dist/lenis.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SmoothScroll />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <PageTransition />
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
        type="text/javascript"
        src="//embeds.iubenda.com/widgets/84eee3af-e426-44dd-9f41-2b18f1c37d19.js"
        strategy="afterInteractive"
      ></Script>
      {/* <Script
        type="text/javascript"
        charset="UTF-8"
        src="//cdn.cookie-script.com/s/6206605853f8d2265c8c18f1fec772d8.js"
        strategy="afterInteractive"
      ></Script> */}
    </>
  );
}
