import React from "react";
import translationIT from "../../public/locales/it/it.json";
import translationEN from "../../public/locales/en/en.json";
import translationFR from "../../public/locales/fr/fr.json";
import HeroPage from "@/components/heros/heroPage";
import Branding from "@/public/serviziImg/branding.png";
import Head from "next/head";
import ServiziItem from "@/components/serviziItem/serviziItem";
const Servizi = ({ servizio, others }) => {
  return (
    <>
      <Head>
        <title>{`Miao - ${servizio?.name}`}</title>
      </Head>
      <HeroPage title={servizio?.title} img={servizio?.img} />{" "}
      <div className="w-[90%] mx-auto flex flex-col justify-between mt-[100px] 3xl:mt-[250px]">
        <div className="w-full 2xl:w-[90%] 3xl:w-full mx-auto">
          <h2 className="text-main font-bold capitalize text-4xl lg:text-4xl leading-[2.5rem] fxl:text-7xl 3xl:text-8xl">
            {/* {servizio?.titleOpzioni} */}
            ti potrebbe anche interesssare
          </h2>
        </div>
        <div className="grid gap-6 grid-cols-1 2xl:grid-cols-4 w-full 2xl:w-[90%] mt-10 mx-auto">
          {others?.map((el, i) => (
            <ServiziItem
              key={i}
              img={el?.img}
              name={el?.name}
              link={el?.link}
              descrizione={el?.descrizione}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Servizi;

export async function getStaticProps(context) {
  const { params, locale } = context;
  let obj;

  switch (locale) {
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
  let targetObj = obj?.servizi?.singleService?.[params?.title];
  const arr = Object.keys(obj?.servizi?.singleService);
  const filteredOthers = arr
    .filter((el) => el !== params?.title) // Exclude the current service
    .map((el) => {
      return {
        name: obj?.servizi?.singleService?.[el]?.name,
        img: obj?.servizi?.singleService?.[el]?.img,
        descrizione: obj?.servizi?.singleService?.[el]?.descrizione,

        link: el,
      };
    });

  return {
    props: {
      servizio: targetObj,
      others: filteredOthers,
    },
  };
}

export async function getStaticPaths({ locale }) {
  let obj;

  switch (locale) {
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

  const services = Object.keys(obj?.servizi?.singleService);
  const pathEn = services?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "en",
    };
  });
  const pathFr = services?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "fr",
    };
  });
  const pathIt = services?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "it",
    };
  });
  const paths = pathIt.concat(pathEn).concat(pathFr);
  return {
    paths,
    fallback: false,
  };
}
