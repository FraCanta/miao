import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "../public/assets/logo.png";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Miao - grafismi itineranti</title>
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
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <Image src={Logo} alt="Miao grafismi itineranti" width={500} priority />
        <p className="text-3xl mt-10">work in progress...</p>
      </div>
    </>
  );
}
