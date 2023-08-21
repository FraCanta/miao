import React from "react";
import translationIT from "../../public/locales/it/it.json";
import translationEN from "../../public/locales/en/en.json";
import translationFR from "../../public/locales/fr/fr.json";
import HeroPage from "@/components/heros/heroPage";
import Branding from "@/public/serviziImg/branding.png";
const Servizi = ({ servizio }) => {
  console.log(servizio?.name);
  return (
    <>
      <HeroPage title={"Branding"} img={Branding} />
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

export async function getStaticPaths() {
  const allLanguages = ["it", "en", "fr"];
  const paths = [];

  allLanguages.forEach((locale) => {
    const translationObj = {
      it: translationIT,
      en: translationEN,
      fr: translationFR,
    };

    const serviceKeys = Object.keys(
      translationObj[locale]?.servizi?.singleService
    );

    const localePaths = serviceKeys.map((title) => ({
      params: { title },
      locale,
    }));

    paths.push(...localePaths);
  });

  return {
    paths,
    fallback: false,
  };
}
