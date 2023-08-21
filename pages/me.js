import React from "react";
import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import translationIT from "../public/locales/it/it.json";
import translationEN from "../public/locales/en/en.json";
import translationFR from "../public/locales/fr/fr.json";

import HeroPage from "@/components/heros/heroPage";
import Lampadina from "@/public/pageImg/lampadina.png";
import Graffa from "@/public/pageImg/meTitle.png";
import Head from "next/head";
import Image from "next/image";
import SectionMeUno from "@/components/sections/sectionMeUno";
import SectionMeDue from "@/components/sections/sectionMeDue";

const Me = ({ translation }) => {
  console.log(translation);
  return (
    <>
      <Head>
        <title>Miao - Chi Sono</title>
      </Head>
      <div className="w-full min-h-[calc(40vh_-_80px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(100vh_-_100px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row items-center justify-between">
        <HeroPage
          title={translation?.hero?.title}
          img={translation?.hero?.img}
        />
      </div>
      <SectionMeUno translation={translation?.sezioneUno} />
      <SectionMeDue translation={translation?.sezioneDue} />
      <div className="w-[90%] mx-auto mt-[150px]">
        <Image
          className="object-cover w-[300px] 2xl:w-[550px] fxl:w-[650px] 3xl:w-[800px] py-14 3xl:py-24"
          src={translation?.sezioneTre?.title}
          alt="welcome title"
          width={300}
          height={300}
          priority
        />
        <div class="elfsight-app-e5f28877-c53f-4c54-8037-22c0d90781f9"></div>{" "}
      </div>
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
      translation: obj?.me,
    },
    revalidate: 60,
  };
}
