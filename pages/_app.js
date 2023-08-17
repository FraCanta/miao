import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <Component {...pageProps} key={router.asPath} />
    </Layout>
  );
}
