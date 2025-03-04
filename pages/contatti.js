import React from "react";
import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import translationIT from "../public/locales/it/it.json";

import HeroPage from "@/components/heros/heroPage";
import Head from "next/head";
import ContactForm from "@/components/contactForm/contactForm";

const Me = ({ translation }) => {
  // console.log(translation);
  return (
    <>
      <Head>
        <title>Miao Grafismi itineranti - Contatti</title>
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
          content="https://www.miaographics.it/contatti"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`Miao grafismi itineranti - Contatti`}
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
      </Head>
      <SlideAnimation>
        <div className="w-full min-h-[calc(100vh_-_80px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(100vh_-_100px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row items-center justify-center 2xl:justify-between">
          <HeroPage
            title={translation?.hero?.title}
            img={translation?.hero?.img}
          />
        </div>
        <section className="w-[90%] min-h-auto justify-between flex flex-col 2xl:flex-row mx-auto">
          <ContactForm translation={translation?.contactForm} />
        </section>
      </SlideAnimation>
    </>
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
      translation: obj?.contatti,
    },
    revalidate: 60,
  };
}
