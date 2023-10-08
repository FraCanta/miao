import translationIT from "../../public/locales/it/it.json";
import translationEN from "../../public/locales/en/en.json";
import translationFR from "../../public/locales/fr/fr.json";
import HeroWorks from "@/components/heros/heroWorks";
import SezioneIntro from "@/components/worksItem/sezioneIntro";
import Image from "next/image";
import Typography from "@/components/worksItem/typography";
import ColorBrand from "@/components/worksItem/colorBrand";
import Illustrazioni from "@/components/worksItem/illustrazioni";
import Label from "@/components/worksItem/label";
import Social from "@/components/worksItem/social";
import Head from "next/head";

const Works = ({ works }) => {
  return (
    <>
      <Head>
        <title>{`Miao - ${works?.name}`}</title>
      </Head>
      <div className="w-full min-h-[calc(50vh_-_60px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(100vh_-_100px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] flex flex-col lg:flex-row items-center justify-center 2xl:justify-center relative">
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
      <section className="w-[90%] mx-auto min-h-[40vh] md:h-[90vh] relative">
        <Image
          src={works?.logoImg}
          fill
          alt="logo img"
          className="object-contain"
          priority
        />
      </section>
      <section className="flex flex-col gap-6  w-[90%] mx-auto pt-6">
        <Typography translation={works?.typo} />
      </section>
      <section className="flex flex-col gap-6  w-[90%] mx-auto pt-6">
        <ColorBrand translation={works?.color} />
      </section>
      {works?.illustrazioni ? (
        <section className="flex flex-col gap-6  w-[90%] mx-auto pt-6">
          <Illustrazioni translation={works?.illustrazioni} />
        </section>
      ) : (
        ""
      )}
      {works?.label ? (
        <section className="flex flex-col gap-6  w-[90%] mx-auto pt-6">
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
  let targetObj = obj?.portfolio?.singleWorks?.[params?.title];

  const arr = Object.keys(obj?.portfolio?.singleWorks);
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

  const works = Object.keys(obj?.portfolio?.singleWorks);
  const pathEn = works?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "en",
    };
  });
  const pathFr = works?.map((el) => {
    return {
      params: {
        title: el,
      },
      locale: "fr",
    };
  });
  const pathIt = works?.map((el) => {
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
