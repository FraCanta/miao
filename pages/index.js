import Head from "next/head";
import HeroHome from "../components/heros/heroHome";
import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import translationIT from "../public/locales/it/it.json";
import translationEN from "../public/locales/en/en.json";
import translationFR from "../public/locales/fr/fr.json";

import SectionUno from "@/components/sections/sectionUno";
import Image from "next/image";
import Link from "next/link";
import SectionDue from "@/components/sections/sectionDue";
import SectionTre from "@/components/sections/sectionTre";

export default function Home({ translation }) {
  console.log(translation);
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
      {/* <SlideAnimation direction="forward"> */}
      <div className="w-full min-h-[calc(40vh_-_80px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(100vh_-_100px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row items-center justify-between">
        <HeroHome translation={translation?.hero} />
      </div>
      <SectionUno translation={translation?.sezioneUno} />
      <SectionDue translation={translation?.sezioneDue} />
      <SectionTre translation={translation?.sezioneTre} />

      {/* </SlideAnimation> */}
    </>
  );
}

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = translationIT;
      break;

    case "en":
      obj = translationEN;
      break;
    case "fr":
      obj = translationFR;
      break;
    default:
      obj = translationIT;
      break;
  }

  return {
    props: {
      translation: obj?.home,
    },
    revalidate: 60,
  };
}
