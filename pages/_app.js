import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </AnimatePresence>
  );
}
