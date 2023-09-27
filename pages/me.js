import React from "react";
import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import translationIT from "../public/locales/it/it.json";
import translationEN from "../public/locales/en/en.json";
import translationFR from "../public/locales/fr/fr.json";

import HeroPage from "@/components/heros/heroPage";
import Head from "next/head";
import Image from "next/image";
import SectionMeUno from "@/components/sections/sectionMeUno";
import SectionMeDue from "@/components/sections/sectionMeDue";
import SectionMeTre from "@/components/sections/sectionMeTre";
import SliderCards from "@/components/serviziItem/sliderCards";

const Me = ({ translation, servizi }) => {
  console.log(servizi);
  return (
    <main data-scroll-container>
      <Head>
        <title>Miao - Chi Sono</title>
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
        <section className="w-[90%] mx-auto min-h-[40vh] mt-[150px] flex flex-col gap-20">
          <Image
            className="object-cover w-[90vw] xl:w-[35vw] 2xl:w-[30vw] fxl:w-[35vw] 3xl:w-[40vw]"
            src={translation?.sezioneTre?.title}
            alt="welcome title"
            width={300}
            height={300}
            priority
          />
          <div className="elfsight-app-e5f28877-c53f-4c54-8037-22c0d90781f9"></div>{" "}
        </section>
        <SectionMeTre translation={translation?.sezioneQuattro} />
        <div className="w-[90%] mx-auto mt-[100px]">
          <h3 className="text-main font-bold capitalize text-4xl lg:text-6xl 2xl:!leading-[4.5rem] fxl:text-7xl 3xl:text-8xl">
            Cosa posso fare per te?
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
      servizi: obj?.servizi?.serviziItem,
    },
    revalidate: 60,
  };
}
