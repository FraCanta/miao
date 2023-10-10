import React from "react";
import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import translationIT from "../public/locales/it/it.json";
import translationEN from "../public/locales/en/en.json";
import translationFR from "../public/locales/fr/fr.json";

import HeroPage from "@/components/heros/heroPage";
import Head from "next/head";
import WorksItem from "@/components/worksItem/worksItem";
import Link from "next/link";
import Image from "next/image";
import Behance from "@/public/assets/Behance-logo2.png";
import { Icon } from "@iconify/react";
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
        <section className="w-[90%] mx-auto min-h-[20vh] flex flex-col gap-6 mt-[50px]  md:mt-[150px]">
          {translation?.intro.map((el, i) => {
            return (
              <p
                key={i}
                className="text-[8vw] md:text-[5vw] lg:text-[2.5vw]"
                dangerouslySetInnerHTML={{ __html: el }}
              ></p>
            );
          })}
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2  min-h-[40vh] mt-[100px]">
          {translation?.worksItem?.map((el, i) => {
            return (
              <WorksItem
                key={i}
                img={el?.img}
                name={el?.name}
                descrizione={el?.descrizione}
                link={el?.link}
                button={el?.button}
                location={el?.location}
              />
            );
          })}
        </section>
        <section className="w-[90%] mx-auto min-h-[20vh] flex flex-col gap-6 mt-[50px]  md:mt-[150px] text-center justify-center items-center">
          <h3 className="capitalize text-[5vw] md:text-[2.5vw]">
            La mia creatività non finisce qui...
            <br /> continua su
          </h3>
          <Link
            href="https://miaographics.myportfolio.com/work"
            target="_blank"
            className="hand-pointer font-medium gap-2 w-54 py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 border 2xl:text-xl fxl:text-2xl 3xl:text-3xl rounded shadow  hover:transition-all border-red  bg-red flex items-center justify-center"
          >
            <Image src={Behance} alt="behance logo" className="w-[5rem]" />{" "}
            <Icon icon="ph:arrow-up-right-light" className="text-white" />
          </Link>
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
