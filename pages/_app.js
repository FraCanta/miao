import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <motion.div
        key={router.route} // Ensure proper transitions when changing pages
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </motion.div>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></Script>
    </>
  );
}
