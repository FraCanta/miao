import React from "react";
import translationIT from "../../public/locales/it/it.json";
import translationEN from "../../public/locales/en/en.json";
import HeroPage from "@/components/heros/heroPage";
import Branding from "@/public/serviziImg/branding.png";
import Head from "next/head";
import ServiziItem from "@/components/serviziItem/serviziItem";
import Gallery from "@/components/gallery/gallery";
import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import Others from "@/components/serviziItem/others";
import Link from "next/link";
const Servizi = ({ servizio, others, serviziFra }) => {
  // console.log(servizio);
  return (
    <>
      <Head>
        <title>{`Miao - ${servizio?.name}`}</title>
        <meta name="description" content={servizio?.descrizione} />
        <meta
          name="keywords"
          content="Graphic Design, Logo Design, Social Media, content creator, illustrazioni, allestimenti"
        />
        <meta name="author" content="Elisa Avantey" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:url" content="https://www.miaographics.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Miao - ${servizio?.name}`} />
        <meta
          property="og:image"
          content="https://www.miaographics.it/assets/cover_web.png"
        />
        <meta property="og:description" content={servizio?.descrizione} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="miaographics.it" />
        <meta property="twitter:url" content="https://www.miaographics.it/" />
        <meta name="twitter:title" content={`Miao - ${servizio?.name}`} />
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
      <SlideAnimation>
        <div className="w-full h-full min-h-[calc(100vh_-_80px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(80vh_-_100px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row items-center justify-center 2xl:justify-between">
          <HeroPage
            title={servizio?.title}
            img={servizio?.img}
            link={servizio?.img}
          />
        </div>
        <div className="w-[90%] mx-auto flex flex-col justify-between mt-10">
          <div className="flex flex-col h-full gap-8 min-h-auto 2xl:p-6">
            <h3 className="text-main font-bold capitalize text-[8vw] leading-[1.2] md:leading-none md:text-[8vw] lg:text-[6vw] xl:text-[5vw] 2xl:text-[4vw] 3xl:text-[3.6vw] ">
              {servizio?.introTitle}
            </h3>
            {servizio?.intro?.map((p, i) => {
              return (
                <p
                  key={i}
                  className="text-second text-[5.6vw] md:text-[3.5vw] xl:text-[1.9vw] 2xl:text-[1.3vw]"
                  dangerouslySetInnerHTML={{ __html: p }}
                ></p>
              );
            })}
          </div>

          <div className="flex flex-col gap-8 mt-10 min-h-auto 2xl:p-6">
            {servizio?.titlePro && servizio?.descPro ? (
              <div className="flex flex-col gap-6 mb-6">
                <h3 className="text-main font-bold capitalize text-[8vw] leading-10 md:leading-none md:text-[8vw] lg:text-[6vw] xl:text-[5vw] 2xl:text-[4vw] 3xl:text-[3.6vw] ">
                  {servizio?.titlePro}
                </h3>{" "}
                {servizio?.descPro?.map((el, i) => {
                  return (
                    <p
                      key={i}
                      className="text-second text-[5.6vw] md:text-[3.5vw] xl:text-[1.9vw] 2xl:text-[1.3vw]"
                      dangerouslySetInnerHTML={{ __html: el }}
                    ></p>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            {servizio?.titleList ? (
              <h3 className="text-main font-bold capitalize text-[8vw] leading-none md:leading-none md:text-[8vw] lg:text-[6vw] xl:text-[5vw] 2xl:text-[4vw] 3xl:text-[3.6vw] ">
                {servizio?.titleList}
              </h3>
            ) : (
              ""
            )}
            {servizio?.sottoList ? (
              <p className="text-second text-[5.6vw] md:text-[3.5vw] xl:text-[1.9vw] 2xl:text-[1.9vw]">
                {servizio?.sottoList}
              </p>
            ) : (
              ""
            )}

            {servizio?.list ? (
              <ul className="list-disc text-second text-[5.6vw] md:text-[3.5vw] xl:text-[1.9vw] 2xl:text-[1.3vw] flex flex-col gap-4 3xl:gap-6 ml-6 mt-4">
                {servizio?.list?.map((l, i) => {
                  return <li key={i}>{l}</li>;
                })}
              </ul>
            ) : (
              ""
            )}
          </div>
          <div className="bg-main h-20 flex items-center justify-center 2xl:justify-end px-8 mt-[50px]">
            <Link
              href="/contatti"
              title="contattami per un preventivo"
              className="capitalize font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 border text-[4.5vw] md:text-[3.5vw] xl:text-[2vw]  2xl:text-xl fxl:text-2xl 3xl:text-3xl rounded shadow  text-white hover:transition-all border-red  bg-red"
            >
              {servizio?.preventivo}
            </Link>
          </div>
          <div className="min-h-auto flex flex-col gap-8 2xl:p-6 mt-10 md:gap-24 lg:mt-[150px] 2xl:mt-[100px]">
            <h3 className="text-main font-bold capitalize text-[8vw] leading-10 md:leading-none md:text-[8vw] lg:text-[6vw] xl:text-[5vw] 2xl:text-[4vw] 3xl:text-[3.6vw] ">
              {servizio?.galleryTitle}
            </h3>
            <Gallery
              imageArray={servizio?.gallery}
              galleryID="gallery--click-to-next"
              galleryTitle={"Gallery"}
            />
            {servizio?.gallery2 ? (
              <Gallery
                imageArray={servizio?.gallery2}
                galleryID="gallery--click-to-next"
                galleryTitle={"Gallery"}
              />
            ) : (
              ""
            )}
            {servizio?.gallery3 ? (
              <Gallery
                imageArray={servizio?.gallery3}
                galleryID="gallery--click-to-next"
                galleryTitle={"Gallery"}
              />
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col gap-8 min-h-auto 2xl:p-6 md:gap-24">
            <Gallery
              imageArray={servizio?.gallery4}
              galleryID="gallery--click-to-next"
              galleryTitle={"Gallery"}
            />
          </div>

          <div className="w-full mx-auto 2xl:p-6 mt-10 lg:mt-[150px] 2xl:mt-[100px] flex flex-col gap-6">
            <h3 className="text-main font-bold capitalize text-[8vw] leading-none md:text-[8vw] lg:text-[6vw] xl:text-[5vw] 2xl:text-[4vw] 3xl:text-[3.6vw] ">
              {servizio?.titleOpzioni}
            </h3>
            <p className="text-second text-[5.6vw] md:text-[3.5vw] xl:text-[1.9vw] 2xl:text-[1.3vw]">
              {servizio?.descOpzioni}
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 md:gap-4 lg:gap-8">
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
            <div className="flex items-center justify-center h-20 px-8 bg-main 2xl:justify-end ">
              <Link
                href="/contatti"
                title="contattami per una consulenza e parliamo insieme del tuo progetto"
                className="capitalize font-bold py-2.5 px-6 2xl:py-2 2xl:px-6 fxl:py-4 fxl:px-6 3xl:py-6 3xl:px-8 border text-[4.5vw] md:text-[3vw] xl:text-[2vw] 2xl:text-xl fxl:text-2xl 3xl:text-3xl rounded shadow  text-white hover:transition-all border-red  bg-red"
              >
                {servizio?.call}
              </Link>
            </div>
          </div>
          <div className="w-full mx-auto 2xl:p-6 mt-20 2xl:mt-[100px]">
            <h3 className="text-main font-bold capitalize text-4xl lg:text-6xl 2xl:!leading-[4.5rem] fxl:text-7xl 3xl:text-8xl">
              {servizio?.opzioni}
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
  const pathIt = services?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "it",
    };
  });
  const paths = pathIt.concat(pathEn);
  return {
    paths,
    fallback: false,
  };
}
