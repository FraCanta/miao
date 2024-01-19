import React from "react";
import SlideAnimation from "@/components/slideAnimation/slideAnimation";
import translationIT from "../public/locales/it/it.json";
import translationEN from "../public/locales/en/en.json";

import HeroPage from "@/components/heros/heroPage";
import Head from "next/head";
import ServiziItem from "@/components/serviziItem/serviziItem";

const Me = ({ translation }) => {
  // console.log(translation);
  return (
    <>
      <Head>
        <title>Miao graphics - Servizi</title>
        <meta
          name="description"
          content="Affida la tua visione creativa a una graphic designer esperta. Scopri i nostri servizi di design personalizzati per rendere unico il tuo progetto. Dalla creazione di loghi all'arte digitale, trasforma le tue idee in realtà con il nostro talento creativo."
        />
        <meta
          name="keywords"
          content="Branding, 
          brand identity,
          Immagine coordinata, 
          Logo,
          Logodesign,
          Logodesigner, 
          Marchio,
          Logotipo,
          Identità visiva, 
          Biglietti da visita,
          Visit card,
          PACK,
          Packaging,
          Package, 
          Packagingdesign,
          Fustelle, 
          Label design, 
          Label designer,
          Product image, 
          Etichette,
          Etichette su misura, 
          Manifesti,
          Poster,
          Roll up,
          Totem,
          Cartoline,
          Inviti,
          Menù, 
          Campagne,
          Allestimenti personalizzati, 
          Vetrofanie,
          Insegne,
          Adesivi,
          Partecipazioni,
          Coordinati nozze,
          Pattern,
          Illustrazioni,
          Illustrazione, 
          illustration, 
          Grafica vettoriale,
          Grafica digital, 
          Digital design,
          Gestione social, 
          Social media strategy, 
          Social media,
          Facebook, 
          Instagram,
          Linkedin,
          Meta,
          Content creator,
          Creazione di contenuti,
          Comunicazione visivi,
          Caroselli,
          Carousel,
          Fotografia,
          Foto per social, 
          Foto per social media,
          Photo "
        />
        <meta name="author" content="Elisa Avantey" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:url" content="https://www.miaographics.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Miao graphics - Servizi" />
        <meta
          property="og:image"
          content="https://www.miaographics.it/assets/cover_web.png"
        />
        <meta
          property="og:description"
          content="Affida la tua visione creativa a una graphic designer esperta. Scopri i nostri servizi di design personalizzati per rendere unico il tuo progetto. Dalla creazione di loghi all'arte digitale, trasforma le tue idee in realtà con il nostro talento creativo."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="miaographics.it" />
        <meta property="twitter:url" content="https://www.miaographics.it/" />
        <meta name="twitter:title" content="Miao graphics - Servizi" />
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
        <div className="w-full min-h-[calc(100vh_-_80px)] lg:h-[calc(100vh_-_70px)]  2xl:h-[calc(100vh_-_100px)] fxl:h-[calc(100vh_-_150px)]  4xl:h-[calc(100vh_-_250px)] mx-auto flex flex-col lg:flex-row items-center justify-center 2xl:justify-between">
          <HeroPage
            title={translation?.hero?.title}
            img={translation?.hero?.img}
          />
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-[90%] mx-auto min-h-[40vh] gap-10">
          {translation?.serviziItem?.map((el, i) => {
            return (
              <ServiziItem
                key={i}
                img={el?.img}
                name={el?.name}
                descrizione={el?.descrizione}
                link={el?.link}
              />
            );
          })}
        </section>
      </SlideAnimation>
    </>
  );
};

export default Me;

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
      translation: obj?.servizi,
    },
    revalidate: 60,
  };
}
