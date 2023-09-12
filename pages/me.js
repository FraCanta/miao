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
import ContactForm from "@/components/contactForm/contactForm";
import SliderCards from "@/components/serviziItem/sliderCards";

const Me = ({ translation, servizi }) => {
  console.log(servizi);
  return (
    <>
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
        <section className="w-[90%] mx-auto min-h-[40vh] 2xl:mt-[150px]">
          <Image
            className="object-cover w-full 2xl:w-[550px] fxl:w-[650px] 3xl:w-[800px] pb-14 2xl:py-14 3xl:py-24"
            src={translation?.sezioneTre?.title}
            alt="welcome title"
            width={300}
            height={300}
            priority
          />
          <div className="elfsight-app-e5f28877-c53f-4c54-8037-22c0d90781f9"></div>{" "}
        </section>
        <SectionMeTre translation={translation?.sezioneQuattro} />
        <div className="w-[90%] mx-auto mt-[150px]">
          <h3 className="text-main font-bold capitalize text-4xl lg:text-4xl leading-[2.5rem] fxl:text-7xl 3xl:text-8xl">
            Cosa posso fare per te?
          </h3>
          <SliderCards servizi={servizi} />
        </div>

        {/* <section className="w-[90%] min-h-[40vh] justify-between items-center gap-[39px] flex flex-col 2xl:flex-row mx-auto mt-[150px]">
          <div className="flex-col justify-start items-start gap-[50px] inline-flex">
            <Image
              className="object-cover w-[250px] 2xl:w-[300px] fxl:w-[450px] 3xl:w-[550px]"
              src={translation?.sezioneForm?.title}
              alt="welcome title"
              width={500}
              height={500}
              priority
            />
            <div className="w-full h-auto flex-col justify-start items-start gap-[45px] flex">
              <div className="w-full h-autotext-second text-xl font-normal leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                <br />
                <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.{" "}
              </div>
            </div>
          </div>
          <ContactForm />
        </section> */}
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
      translation: obj?.me,
      servizi: obj?.servizi?.serviziItem,
    },
    revalidate: 60,
  };
}
