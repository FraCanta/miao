import "@/styles/globals.css";
import "@/styles/contact.css";
import "@/styles/wordpress.css";
import "@/styles/portfolio.css";

import Layout from "@/components/layout/layout";
import { useRouter } from "next/router";
import Script from "next/script";
import Image from "next/image";

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
      {/* <!-- Meta Pixel Code --> */}
      <script
        defer
        dangerouslySetInnerHTML={{
          __html: `
  !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '359143763306681');
fbq('track', 'PageView');
  `,
        }}
      ></script>
      <noscript>
        <Image
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=797931211189612&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      {/* <!-- End Meta Pixel Code --> */}

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
