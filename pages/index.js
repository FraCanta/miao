import Head from "next/head";
import HeroHome from "../components/heros/heroHome";
import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import translationIT from "../public/locales/it/it.json";
import translationEN from "../public/locales/en/en.json";
import Image from "next/image";
import SezioneUno from "@/public/sectionsTitle/sezioneUno.png";
import Link from "next/link";

export default function Home({ translation }) {
  // console.log(translation);
  return (
    <>
      <Head>
        <title>Miao - grafismi itineranti</title>
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
      {/* <SlideAnimation direction="forward"> */}
      <div className="w-full min-h-[calc(40vh_-_80px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(100vh_-_100px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row items-center justify-between">
        <HeroHome translation={translation?.hero} />
      </div>
      <div className="w-[90%] mx-auto min-h-[40vh] mt-[150px]">
        <div className="w-full h-full  flex-col justify-start items-start gap-[30px] inline-flex mx-auto">
          <Image
            className="object-cover w-[250px] 2xl:w-[300px] fxl:w-[350px] 3xl:w-[400px]"
            src={SezioneUno}
            alt="welcome title"
            width={300}
            priority
          />
          <div className="w-full h-full justify-between flex-col 2xl:flex-row items-center gap-8 2xl:gap-24 inline-flex">
            <div className="2xl:w-1/2 h-full flex-col justify-start items-start  inline-flex">
              <p className="text-second text-[1.125rem] fxl:text-[1.4rem] 3xl:text-[1.8rem] font-normal leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="2xl:w-1/2 h-full flex-col justify-start items-start  inline-flex">
              <p className="text-second text-[1.125rem] fxl:text-[1.4rem] 3xl:text-[1.8rem] font-normal leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="w-full h-5 justify-start items-center inline-flex mt-6">
            <Link
              href="/me"
              className="text-main text-2xl fxl:text-3xl 3xl:text-4xl font-extrabold underline capitalize leading-tight"
            >
              Conosciamoci
            </Link>
          </div>
        </div>
      </div>

      {/* </SlideAnimation> */}
    </>
  );
}

export async function getStaticProps(locale, context) {
  let obj;
  switch (locale.locale) {
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

  return {
    props: {
      translation: obj?.home,
    },
    revalidate: 60,
  };
}
