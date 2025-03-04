import React from "react";
import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import translationIT from "../public/locales/it/it.json";

import HeroPage from "@/components/heros/heroPage";
import Head from "next/head";
import Image from "next/image";
import SectionMeUno from "@/components/sections/sectionMeUno";
import SectionMeDue from "@/components/sections/sectionMeDue";
import SectionMeTre from "@/components/sections/sectionMeTre";
import SliderCards from "@/components/serviziItem/sliderCards";
import Link from "next/link";

const Me = ({ translation, servizi }) => {
  return (
    <main data-scroll-container>
      <Head>
        <title>Miao - {translation?.meta?.title}</title>
        <meta
          name="description"
          content="Sono una Graphic Designer e Content Creator, e sono qui per essere la tua partner nella definizione dell’identità visiva della tua azienda."
        />
        <meta
          name="keywords"
          content="Graphic Design, Logo Design, Social Media"
        />
        <meta name="author" content="Elisa Avantey" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          property="og:url"
          content="https://www.miaographics.it/chi-sono"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Miao - ${translation?.meta?.title}`}
        />
        <meta
          property="og:image"
          content="https://www.miaographics.it/assets/cover_web.png"
        />
        <meta
          property="og:description"
          content="Sono una Graphic Designer e Content Creator, e sono qui per essere la tua partner nella definizione dell’identità visiva della tua azienda."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="miaographics.it/chi-sono" />
        <meta
          property="twitter:url"
          content="https://www.miaographics.it/chi-sono"
        />
        <meta
          name="twitter:title"
          content={`Miao - ${translation?.meta?.title}`}
        />
        <meta
          name="twitter:image"
          content="https://www.miaographics.it/assets/cover_web.png"
        />
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
      <SlideAnimation>
        <div className="w-full min-h-[calc(100vh_-_80px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(100vh_-_100px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row items-center justify-center 2xl:justify-between">
          <HeroPage
            title={translation?.hero?.title}
            img={translation?.hero?.img}
          />
        </div>
        <SectionMeUno translation={translation?.sezioneUno} />
        <SectionMeDue translation={translation?.sezioneDue} />
        <section className="w-[90%] mx-auto min-h-[40vh] mt-[150px] flex flex-col gap-6 lg:gap-20">
          <div className="grid grid-cols-1 gap-10 2xl:grid-cols-2">
            <Image
              className="object-cover w-[90vw] xl:w-[35vw] 2xl:w-[30vw] fxl:w-[35vw] 3xl:w-[40vw]"
              src={translation?.sezioneTre?.title}
              alt="welcome title"
              width={300}
              height={300}
            />
            <div className="flex items-end lg:justify-end">
              <Link
                className="capitalize font-bold py-2.5 px-6 text-[22px] border rounded shadow  text-white hover:transition-all border-red  bg-red"
                href="https://g.page/r/CVkCvxDyKu9aEBM/review"
                target="_blank"
              >
                {translation?.sezioneTre?.cta}
              </Link>
            </div>
          </div>
          <div
            className="elfsight-app-4232eb26-57ce-4f62-af4c-b940b9705c52"
            data-elfsight-app-lazy
          ></div>
        </section>
        <SectionMeTre translation={translation?.sezioneQuattro} />
        <div className="w-[90%] mx-auto mt-[100px]">
          <h3 className="text-main font-bold capitalize text-4xl lg:text-6xl 2xl:!leading-[4.5rem] fxl:text-7xl 3xl:text-8xl">
            {translation?.serviziMore?.title}
          </h3>
          <SliderCards servizi={servizi} />
        </div>
      </SlideAnimation>
    </main>
  );
};

export default Me;

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
    case "it":
      obj = translationIT;
      break;

    default:
      obj = translationIT;
      break;
  }

  return {
    props: {
      translation: obj?.me,
      servizi: obj?.servizi?.serviziItem,
    },
    revalidate: 60,
  };
}
