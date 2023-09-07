import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import { useRouter } from "next/router";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></Script>
    </>
  );
}
