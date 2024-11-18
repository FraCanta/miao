import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../public/assets/logo.svg";
import { useRouter } from "next/router";
import { getPosts, getTagId } from "../utils/wordpress";
import LastPostMenu from "@/components/post/LastPostMenu";
import welcomeIT from "../public/locales/it/welcome.json";
import welcomeEN from "../public/locales/en/welcome.json";

function Welcome({ translation }) {
  const { locale } = useRouter();

  const [lastPost, setLastPost] = useState(null);
  useEffect(() => {
    const fetchLastPost = async () => {
      try {
        const langTagId = await getTagId(locale); // Get the tag ID for the current locale
        const posts = await getPosts(langTagId); // Fetch posts using the language tag ID
        const myTag = await getTagId("miaographics");

        const sortedPosts = posts
          ?.filter((el) => el?.tags?.includes(myTag))
          .sort((a, b) => a?.date > b?.date)
          .filter((el, i) => i < 1);
        setLastPost(sortedPosts[0] || null); // Set the most recent post or null if none
      } catch (error) {
        setLastPost(null);
      }
    };

    fetchLastPost();
  }, [locale]);
  return (
    <>
      <Head>
        <title>Benvenut@ - Miao graphics </title>
      </Head>
      <nav className="w-full h-[90px]">
        <div className="flex items-center justify-between w-11/12 mx-auto">
          <div className="hidden lg:block"></div>
          <Image
            src={Logo}
            alt="logo"
            className="w-[120px] md:w-[180px] lg:w-[140px] 2xl:w-[160px] fxl:w-[150px] 3xl:w-[200px] 4xl:w-[300px]"
          />
          <div className="flex items-center gap-6 lg:gap-10">
            <Link
              href="/faq-domande-frequenti"
              className="flex items-center gap-1"
              title="faqs domande frequenti"
            >
              <Icon
                icon="ri:question-fill"
                width="2rem"
                height="2rem"
                className="text-red"
              />
              <span className="text-xl text-pink">FAQs</span>
            </Link>
            <Link
              href="mailto:info@thallion-dev.it"
              title="contattami per parlare del tuo progetto"
            >
              <Icon
                icon="ic:baseline-mail"
                width="2rem"
                height="2rem"
                className="text-red"
              />
            </Link>
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 gap-y-4 mx-auto lg:h-[calc(100vh_-_90px)] items-center">
        <div className="relative w-full lg:h-full h-[450px] lg:aspect-square">
          <Image
            src="/pageImg/tigre2.webp"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center gap-2 lg:gap-4 lg:items-start text-main">
          <div className="flex flex-col gap-1">
            <h1 className="text-[32px] font-bold leading-[120%] tracking-[-1px] xl:text-[48px] xl:tracking-[-2px] text-pink text-center lg:text-start">
              Benvenut@
            </h1>

            <p className="text-lg text-center text-main lg:text-start">
              CERCA LA SOLUZIONE <br />
              <span className="underline text-red">CREATIVA</span> CHE FA PER
              TE!
            </p>
          </div>

          <div className="flex flex-wrap items-center w-full py-2 gap-y-4 lg:gap-x-6">
            <Link
              href="/"
              title="contattami per una consulenza e parliamo insieme del tuo progetto"
              className="capitalize text-center w-full lg:max-w-max font-bold py-2 px-10 text-[20px]  border rounded shadow  text-white hover:transition-all border-red  bg-red"
            >
              visita il sito web
            </Link>
            <Link
              href="/"
              title="contattami per una consulenza e parliamo insieme del tuo progetto"
              className="capitalize text-center w-full lg:max-w-max font-bold py-2 px-10 text-[20px]  border rounded shadow  text-red hover:transition-all border-red  bg-transparent hover:bg-red hover:border-red hover:text-white"
            >
              prenota una call
            </Link>
          </div>
          <div className="grid w-full h-full grid-cols-1 gap-8 py-4 gap-y-10 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h2 className="font-bold leading-[120%] tracking-[-1px] text-3xl xl:tracking-[-2px] text-main">
                Dal mio blog<span className="text-red">.</span>
              </h2>
              <div className="relative">
                {lastPost ? (
                  <LastPostMenu lastPost={lastPost} id={lastPost.id} />
                ) : (
                  <p>Loading...</p> // You can display a spinner or a "No post available" message
                )}
              </div>
            </div>
            <div className="flex flex-col justify-between h-full gap-6">
              <h2 className="text-2xl font-bold leading-[120%] tracking-[-1px] xl:text-3xl xl:tracking-[-2px] text-pink">
                I miei servizi<span className="text-red">.</span>
              </h2>

              <ul className="flex flex-col w-full gap-6">
                {translation.serviziItem.map((el, i) => {
                  return (
                    <li
                      key={i}
                      className="w-full flex border-solid border-2 rounded-[5px] uppercase bg-white border-red text-red font-bold p-[3vw] xl:px-6 xl:py-3 cursor-pointer hover:bg-red hover:border-red hover:text-white text-lg"
                    >
                      <Link
                        href={el.link}
                        title={el.name}
                        className="flex items-center justify-between w-full space-x-2"
                      >
                        <span>{el.name}</span>
                        <span>
                          <Icon
                            icon="guidance:up-right-2-short-arrow"
                            className="text-2xl"
                          />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col justify-between h-full gap-y-6">
              <h2 className="text-2xl font-bold leading-[120%] tracking-[-1px] xl:text-3xl xl:tracking-[-2px] text-pink">
                Titolo per catologhi<span className="text-red">.</span>
              </h2>

              <ul className="flex flex-col w-full gap-6">
                {translation.cataloghi.map((el, i) => {
                  return (
                    <li
                      key={i}
                      className="w-full flex border-solid border-2 rounded-[5px] uppercase bg-white border-red text-red font-bold p-[3vw] xl:px-6 xl:py-3 cursor-pointer hover:bg-red hover:border-red hover:text-white text-lg"
                    >
                      <Link
                        href={el.link}
                        title={el.name}
                        className="flex items-center justify-between w-full space-x-2"
                      >
                        <span>{el.name}</span>
                        <span>
                          <Icon
                            icon="guidance:up-right-2-short-arrow"
                            className="text-2xl"
                          />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col h-full gap-y-6">
              <h2 className="text-2xl font-bold leading-[120%] tracking-[-1px] xl:text-3xl xl:tracking-[-2px] text-pink">
                Titolo per free gift<span className="text-red">.</span>
              </h2>

              <Link
                href="/"
                title="free gift"
                className=" items-center justify-between w-full space-x-2 flex border-solid border-2 rounded-[5px] uppercase bg-white border-red text-red font-bold p-[3vw] xl:px-6 xl:py-3 cursor-pointer hover:bg-red hover:border-red hover:text-white text-lg"
              >
                <span>Free gift</span>
                <span>
                  <Icon
                    icon="guidance:up-right-2-short-arrow"
                    className="text-2xl"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto px-2 !overflow-x-hidden">
        <div
          className="elfsight-app-bd6d5efa-81ab-46f9-9aad-abbe25c7626a"
          data-elfsight-app-lazy
        ></div>
      </div>
      <footer className="w-11/12 py-6 mx-auto text-center">
        <p>
          Miao - grafismi itineranti 2024, tutti i diritti riservati. privacy
          policy
        </p>
      </footer>
    </>
  );
}

export default Welcome;

export async function getStaticProps({ params, locale }) {
  let obj;
  switch (locale) {
    case "it":
      obj = welcomeIT;
      break;

    case "en":
      obj = welcomeEN;
      break;
    default:
      obj = welcomeIT;
      break;
  }

  return {
    props: {
      translation: obj?.welcome,
    },
    revalidate: 10, // In seconds
  };
}
