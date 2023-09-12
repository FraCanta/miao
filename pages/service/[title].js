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
const Servizi = ({ servizio, others }) => {
  return (
    <>
      <Head>
        <title>{`Miao - ${servizio?.name}`}</title>
      </Head>
      <SlideAnimation>
        <HeroPage
          title={servizio?.title}
          img={servizio?.img}
          link={servizio?.img}
        />
        <div className="w-[90%] mx-auto flex flex-col justify-between mt-[100px] 3xl:mt-[250px]">
          <div className="min-h-[40vh] h-full flex flex-col gap-8 2xl:p-6">
            <h3 className="text-main font-bold capitalize text-4xl lg:text-6xl leading-[2.5rem] fxl:text-7xl 3xl:text-8xl">
              Non solo {servizio?.name}
            </h3>
            <p className="text-second text-[1.25rem] 3xl:text-4xl 3xl:leading-[50px] leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sed
              praesentium fuga, earum nulla reiciendis officiis, ducimus
              blanditiis magnam ut accusamus minima corporis laborum maxime
              sunt? Sequi deleniti aspernatur reiciendis!
            </p>
            <p className="text-second text-[1.25rem] 3xl:text-4xl 3xl:leading-[50px] leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, sed
              praesentium fuga, earum nulla reiciendis officiis, ducimus
              blanditiis magnam ut accusamus minima corporis laborum maxime
              sunt? Sequi deleniti aspernatur reiciendis!
            </p>
          </div>
          <div className="min-h-[40vh] flex flex-col gap-8 2xl:p-6 mt-[100px]">
            <h3 className="text-main font-bold capitalize text-4xl lg:text-6xl leading-[2.5rem] fxl:text-7xl 3xl:text-8xl">
              Come procediamo?
            </h3>

            <ul className="list-disc text-[1.25rem] 3xl:text-4xl flex flex-col gap-4 3xl:gap-6 ml-6 mt-4">
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
              <li>
                Now this is a story all about how, my life got flipped-turned
                upside down
              </li>
            </ul>
          </div>
          <div className="min-h-[40vh] flex flex-col gap-8 2xl:p-6 mt-[100px]">
            <h3 className="text-main font-bold capitalize text-4xl lg:text-6xl leading-[2.5rem] fxl:text-7xl 3xl:text-8xl py-6">
              Ecco alcuni esempi
            </h3>
            <Gallery
              imageArray={servizio?.gallery}
              galleryID="gallery--click-to-next"
              galleryTitle={"Gallery"}
            />
          </div>
          <div className="2xl:w-[90%] min-h-[40vh] justify-between items-center gap-[39px] flex flex-col 2xl:flex-row mx-auto mt-[100px]">
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
          </div>
          <div className="w-full mx-auto 2xl:p-6 mt-[150px]">
            <h3 className="text-main font-bold capitalize text-4xl lg:text-4xl leading-[2.5rem] fxl:text-7xl 3xl:text-8xl">
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
