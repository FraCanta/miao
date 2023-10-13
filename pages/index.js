import Head from "next/head";
import HeroHome from "../components/heros/heroHome";
import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import translationIT from "../public/locales/it/it.json";
import translationEN from "../public/locales/en/en.json";
import translationFR from "../public/locales/fr/fr.json";
import {
  getPosts,
  getCategories,
  getMedia,
  getTagId,
  getUsers,
} from "../utils/wordpress";

import SectionUno from "@/components/sections/sectionUno";
import SectionDue from "@/components/sections/sectionDue";
import SectionTre from "@/components/sections/sectionTre";
import SectionsQuattro from "@/components/sections/sectionsQuattro";

export default function Home({ translation, post, featuredMedia, users }) {
  return (
    <>
      <Head>
        <title>Miao graphics - Home</title>
        <meta
          name="description"
          content="Sono una Graphic Designer e Content Creator, e sono qui per essere la tua partner nella definizione dell’identità visiva della tua azienda."
        />
        <meta
          name="keywords"
          content="Graphic Design, Logo Design, Social Media"
        />
        <meta name="author" content="Elisa Avantey" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:url" content="https://www.miaographics.it/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Miao graphics - grafismi itineranti"
        />
        <meta
          property="og:image"
          content="https://www.miaographics.it/assets/cover_web.png"
        />
        <meta
          property="og:description"
          content="Sono una Graphic Designer e Content Creator, e sono qui per essere la tua partner nella definizione dell’identità visiva della tua azienda."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="miaographics.it" />
        <meta property="twitter:url" content="https://www.miaographics.it/" />
        <meta
          name="twitter:title"
          content="Miao graphics - grafismi itineranti"
        />
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
        <section className="w-full min-h-[calc(40vh_-_60px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(100vh_-_80px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row items-center justify-between relative">
          <HeroHome translation={translation?.hero} />
        </section>
        <SectionUno translation={translation?.sezioneUno} />
        <SectionDue translation={translation?.sezioneDue} />
        <SectionTre translation={translation?.sezioneTre} />
        <SectionsQuattro
          translation={translation?.sezioneQuattro}
          post={post}
          featuredMedia={featuredMedia}
          users={users}
        />
      </SlideAnimation>
    </>
  );
}

export async function getStaticProps(locale, context) {
  const idLocale = await getTagId(locale.locale); // recupera id della lingua attuale
  const post = await getPosts(idLocale); //recupera post nella lingua attuale
  const category = await getCategories();
  const media = await getMedia();
  const users = await getUsers();
  const myTag = await getTagId("miaographics");
  // const myTag = 133;

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
      translation: obj?.home,
      post: post
        ?.filter((el) => el?.tags?.includes(myTag))
        .sort((a, b) => a?.date > b?.date)
        .filter((el, i) => i < 3), //elimino i post per sideeffect
      category: category,
      media: media,
      users: users,
      // instagramPosts: posts,
    },
    revalidate: 60,
  };
}
