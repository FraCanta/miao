import translationIT from "../../public/locales/it/it.json";
import HeroWorks from "@/components/heros/heroWorks";
import SezioneIntro from "@/components/worksItem/sezioneIntro";
import Image from "next/image";
import Typography from "@/components/worksItem/typography";
import ColorBrand from "@/components/worksItem/colorBrand";
import Illustrazioni from "@/components/worksItem/illustrazioni";
import Label from "@/components/worksItem/label";
import Social from "@/components/worksItem/social";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Illustrazioni2 from "@/components/worksItem/illustrazioni2";

const Works = ({ works, previousWork, nextWork }) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <title>{`Miao - ${works?.name}`}</title>
        <meta name="description" content={works?.descrizione} />
        <meta name="keywords" content={works?.keywords} />
        <meta name="author" content="Elisa Avantey" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:url" content="https://www.miaographics.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Miao - ${works?.name}`} />
        <meta
          property="og:image"
          content="https://www.miaographics.it/assets/cover_web.png"
        />
        <meta
          property="og:description"
          content="Esplora il nostro blog e scopri il mondo del design attraverso gli occhi di un esperto. Approfondimenti, tendenze e ispirazione per il tuo prossimo progetto creativo. Entra nel nostro mondo di idee e creatività!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="miaographics.it" />
        <meta property="twitter:url" content="https://www.miaographics.it/" />
        <meta name="twitter:title" content={`Miao - ${works?.name}`} />
        <meta
          name="twitter:image"
          content="https://www.miaographics.it/assets/cover_web.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <div className="w-full min-h-[calc(50vh_-_60px)] md:h-[calc(60vh_-_100px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(100vh_-_100px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] flex flex-col lg:flex-row items-center justify-center 2xl:justify-center relative">
        <HeroWorks
          img={works.img}
          name={works.name}
          descrizione={works?.descrizione}
          location={works?.location}
          button={works?.button}
        />
      </div>
      <section className="flex flex-col gap-6 min-h-[40vh] w-[90%] mx-auto pt-6">
        <SezioneIntro translation={works} />
      </section>
      {works?.logoImg && (
        <section className="w-[90%] mx-auto min-h-[40vh] lg:h-[90vh] relative">
          <Image
            src={works?.logoImg}
            fill
            alt="logo brand"
            className="object-contain"
          />
        </section>
      )}
      <section className="flex flex-col gap-6  w-[90%] mx-auto pt-6  overflow-y-hidden">
        <Typography translation={works?.typo} />
      </section>
      {works?.illustrazioni2 && (
        <section className="flex flex-col gap-6  w-[90%] mx-auto pt-6">
          <Illustrazioni2 translation={works?.illustrazioni2} />
        </section>
      )}
      {works?.color && (
        <section className="flex flex-col gap-6  w-[90%] mx-auto pt-6">
          <ColorBrand translation={works?.color} />
        </section>
      )}{" "}
      {works?.applyColor && (
        <section className="flex flex-col gap-6 w-[90%] mx-auto pt-6">
          <div>
            <h3 className="text-[6vw] md:text-[3.5vw] font-bold text-main leading-none">
              <span>{works.applyColor.descrizione}</span>
              <span className="text-red">.</span>
            </h3>
          </div>
          <div className="relative h-[20vh] lg:h-screen">
            <Image
              src={works?.applyColor.colorImg}
              fill
              className="object-contain h-full "
              alt=""
            ></Image>
          </div>
        </section>
      )}
      {works?.illustrazioni ? (
        <section className="flex flex-col gap-6  w-[90%] mx-auto pt-6">
          <Illustrazioni translation={works?.illustrazioni} />
        </section>
      ) : (
        ""
      )}
      {works?.fustella && (
        <section className="relative p-20 2xl:h-screen">
          <Image
            src={works?.fustella.fustellaImg}
            fill
            className="object-contain h-full "
            alt=""
          ></Image>
        </section>
      )}
      {works?.libro &&
        works.libro.illustrazioni.map((el, i) => {
          return (
            <section
              key={i}
              className="relative h-[30vh] lg:h-screen w-[90%] mx-auto my-3 lg:my-6"
            >
              <Image
                src={el}
                fill
                className="object-cover w-full h-full "
                alt=""
              ></Image>
            </section>
          );
        })}
      {works?.label ? (
        <section className="flex flex-col w-[90%] mx-auto pt-6">
          <Label translation={works?.label} />
        </section>
      ) : (
        ""
      )}
      {works?.social ? (
        <section className="flex flex-col gap-6  w-[90%] mx-auto pt-10">
          <Social translation={works?.social} />
        </section>
      ) : (
        ""
      )}
      <div
        className={`pagination-buttons ${isScrolling ? "show" : ""} ${
          previousWork ? "show-reverse" : ""
        }`}
      >
        {previousWork && (
          <Link
            href={`/portfolio/${previousWork}`}
            className="pagination-button"
          >
            <Icon icon="raphael:arrowleft" />
          </Link>
        )}
        {nextWork && (
          <Link
            href={`/portfolio/${nextWork}`}
            className="ml-auto pagination-button"
          >
            <Icon icon="raphael:arrowright" />
          </Link>
        )}
      </div>
    </>
  );
};

export default Works;

export async function getStaticProps(context) {
  const { params, locale } = context;
  let obj;

  switch (locale) {
    case "it":
      obj = translationIT;
      break;

    default:
      obj = translationIT;
      break;
  }

  let targetObj = obj?.portfolio?.singleWorks?.[params?.title];
  const arr = Object.keys(obj?.portfolio?.singleWorks);
  const currentIndex = arr.findIndex((el) => el === params.title);
  const previousWork = currentIndex > 0 ? arr[currentIndex - 1] : null;

  const nextWork = currentIndex < arr.length - 1 ? arr[currentIndex + 1] : null;
  const filteredOthers = arr
    .filter((el) => el !== params?.title) // Exclude the current service
    .map((el) => {
      return {
        name: obj?.portfolio?.singleWorks?.[el]?.name,
        img: obj?.portfolio?.singleWorks?.[el]?.img,
        descrizione: obj?.portfolio?.singleWorks?.[el]?.descrizione,
        button: obj?.portfolio?.singleWorks?.[el]?.button,
        link: el,
      };
    });

  return {
    props: {
      works: targetObj,
      others: filteredOthers,
      previousWork,
      nextWork,
    },
  };
}

export async function getStaticPaths({ locale }) {
  let obj;

  switch (locale) {
    case "it":
      obj = translationIT;
      break;

    default:
      obj = translationIT;
      break;
  }

  const works = Object.keys(obj?.portfolio?.singleWorks);

  const pathIt = works?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "it",
    };
  });
  const paths = pathIt;
  return {
    paths,
    fallback: false,
  };
}
