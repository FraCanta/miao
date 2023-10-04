import React from "react";
import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import translationIT from "../public/locales/it/it.json";
import translationEN from "../public/locales/en/en.json";
import translationFR from "../public/locales/fr/fr.json";

import HeroPage from "@/components/heros/heroPage";
import Head from "next/head";
import WorksItem from "@/components/worksItem/worksItem";

const Me = ({ translation }) => {
  // console.log(translation);
  return (
    <>
      <Head>
        <title>Miao - Portfolio</title>
      </Head>
      <SlideAnimation>
        <div className="w-full min-h-[calc(100vh_-_80px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(100vh_-_100px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row items-center justify-center 2xl:justify-between">
          <HeroPage
            title={translation?.hero?.title}
            img={translation?.hero?.img}
          />
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2  min-h-[40vh] mt-[100px]">
          {translation?.worksItem?.map((el, i) => {
            return (
              <WorksItem
                key={i}
                img={el?.img}
                name={el?.name}
                descrizione={el?.descrizione}
                link={el?.link}
              />
            );
          })}
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
      translation: obj?.portfolio,
    },
    revalidate: 60,
  };
}
