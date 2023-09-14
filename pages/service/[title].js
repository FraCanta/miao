import React from "react";
import translationIT from "../../public/locales/it/it.json";
import translationEN from "../../public/locales/en/en.json";
import translationFR from "../../public/locales/fr/fr.json";
import HeroPage from "@/components/heros/heroPage";
import Branding from "@/public/serviziImg/branding.png";
import Head from "next/head";
import ServiziItem from "@/components/serviziItem/serviziItem";
import Gallery from "@/components/gallery/gallery";
import ContactForm from "@/components/contactForm/contactForm";
import Image from "next/image";
import Talk from "@/public/sectionsTitle/contact_form.png";
import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import Others from "@/components/serviziItem/others";
import Link from "next/link";
const Servizi = ({ servizio, others, serviziFra }) => {
  console.log(serviziFra);
  return (
    <>
      <Head>
        <title>{`Miao - ${servizio?.name}`}</title>
      </Head>
      <SlideAnimation>
        <div className="w-full h-full min-h-[calc(100vh_-_80px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(80vh_-_100px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row items-center justify-center 2xl:justify-between">
          <HeroPage
            title={servizio?.title}
            img={servizio?.img}
            link={servizio?.img}
          />
        </div>
        <div className="w-[90%] mx-auto flex flex-col justify-between mt-10">
          <div className="min-h-auto h-full flex flex-col gap-8 2xl:p-6">
            <h3 className="text-main font-bold capitalize text-4xl lg:text-6xl 2xl:!leading-[4.5rem] fxl:text-7xl 3xl:text-8xl">
              {servizio?.introTitle}
            </h3>
            {servizio?.intro?.map((p, i) => {
              return (
                <p
                  key={i}
                  className="text-second text-[1.25rem] 3xl:text-4xl 3xl:leading-[50px] leading-normal"
                >
                  {p}
                </p>
              );
            })}
          </div>

          <div className="min-h-auto flex flex-col gap-8 2xl:p-6 mt-10">
            {servizio?.titlePro && servizio?.descPro ? (
              <div className="flex  flex-col gap-6 mb-6">
                <h3 className="text-main font-bold capitalize text-4xl lg:text-6xl leading-[2.5rem] fxl:text-7xl 3xl:text-8xl">
                  {servizio?.titlePro}
                </h3>{" "}
                <p className="text-second text-[1.25rem] 3xl:text-4xl 3xl:leading-[50px] leading-normal">
                  {servizio?.descPro}
                </p>
              </div>
            ) : (
              ""
            )}

            <h3 className="text-main font-bold capitalize text-4xl lg:text-6xl leading-[2.5rem] fxl:text-7xl 3xl:text-8xl">
              {servizio?.titleList}
            </h3>

            <ul className="list-disc text-[1.25rem] 3xl:text-4xl flex flex-col gap-4 3xl:gap-6 ml-6 mt-4">
              {servizio?.list?.map((l, i) => {
                return <li key={i}>{l}</li>;
              })}
            </ul>
          </div>
          <div className="bg-main h-20 flex items-center justify-center 2xl:justify-end px-8 mt-[50px]">
            <Link
              href="/contatti"
              className="capitalize font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 border 2xl:text-xl fxl:text-2xl 3xl:text-3xl rounded shadow  text-white hover:transition-all border-red  bg-red"
            >
              Chiedi un preventivo
            </Link>
          </div>
          <div className="min-h-auto flex flex-col gap-8 2xl:p-6 mt-10 2xl:mt-[100px]">
            <h3 className="text-main font-bold capitalize text-4xl lg:text-6xl leading-[2.5rem] fxl:text-7xl 3xl:text-8xl py-6">
              Ecco alcuni esempi
            </h3>
            <Gallery
              imageArray={servizio?.gallery}
              galleryID="gallery--click-to-next"
              galleryTitle={"Gallery"}
            />
            <Gallery
              imageArray={servizio?.gallery2}
              galleryID="gallery--click-to-next"
              galleryTitle={"Gallery"}
            />
            <Gallery
              imageArray={servizio?.gallery3}
              galleryID="gallery--click-to-next"
              galleryTitle={"Gallery"}
            />
          </div>

          {/* <div className="2xl:w-[90%] min-h-[40vh] justify-between items-center gap-[39px] flex flex-col 2xl:flex-row mx-auto mt-[100px]">
            <div className="flex-col justify-start items-start gap-[50px] inline-flex">
              <Image
                className="object-cover w-[250px] 2xl:w-[300px] fxl:w-[450px] 3xl:w-[550px]"
                src={Talk}
                alt="welcome title"
                width={500}
                height={500}
                priority
              />
              <div className="w-full h-auto flex-col justify-start items-start gap-[45px] flex">
                <div className="w-full h-autotext-second text-xl font-normal leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  <br />
                  <br />
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.{" "}
                </div>
              </div>
            </div>
            <ContactForm />
          </div> */}
          <div className="w-full mx-auto 2xl:p-6 mt-10 2xl:mt-[100px] flex flex-col gap-6">
            <h3 className="text-main font-bold capitalize text-4xl lg:text-6xl 2xl:!leading-[4.5rem] fxl:text-7xl 3xl:text-8xl">
              {/* {servizio?.titleOpzioni} */}
              Perchè non volere di più? Ecco altre opzioni su misura per te
            </h3>
            <p className="text-second text-[1.25rem] 3xl:text-4xl 3xl:leading-[50px] leading-normal">
              Lavoreremo insieme a Francesca, web designer molto talentuosa, per
              ideare un sito web professionale cheti permetta di rafforzare la
              tua identità aziendale e così consolidando la tua presenza online.
              Grazie alle sue competenze, ti propongo queste opzioni:
            </p>
            <div className="grid grid-cols-1 2xl:grid-cols-4 ">
              {serviziFra?.map((f, i) => {
                return (
                  <ServiziItem
                    key={i}
                    img={f?.img}
                    name={f?.name}
                    link={f?.link}
                    descrizione={f?.descrizione}
                  />
                );
              })}
            </div>
            <div className="bg-main h-20 flex items-center justify-center 2xl:justify-end px-8 ">
              <Link
                href="/contatti"
                className="capitalize font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 border 2xl:text-xl fxl:text-2xl 3xl:text-3xl rounded shadow  text-white hover:transition-all border-red  bg-red"
              >
                Prenota una call con me
              </Link>
            </div>
          </div>
          <div className="w-full mx-auto 2xl:p-6 mt-20 2xl:mt-[100px]">
            <h3 className="text-main font-bold capitalize text-4xl lg:text-6xl 2xl:!leading-[4.5rem] fxl:text-7xl 3xl:text-8xl">
              {/* {servizio?.titleOpzioni} */}
              ti potrebbe anche interesssare
            </h3>
            <Others others={others} />
          </div>
        </div>
      </SlideAnimation>
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
      serviziFra: obj?.servizi?.fraService,
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
