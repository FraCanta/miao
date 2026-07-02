import Head from "next/head";
import Script from "next/script";
import translationIT from "../public/locales/it/it.json";

import ButtonLink from "@/components/layout/ButtonLink";
import HeroPage from "@/components/layout/HeroPage";
import SectionIndex from "@/components/layout/SectionIndex";
import SectionMeUno from "@/components/sections/sectionMeUno";
import SectionMeDue from "@/components/sections/sectionMeDue";
import SectionMeTre from "@/components/sections/sectionMeTre";

const Me = ({ translation }) => {
  const metaDescription =
    "Sono Elisa, graphic designer e content creator. Creo identità visive, packaging e comunicazione digitale per brand che vogliono farsi riconoscere.";

  return (
    <div>
      <Head>
        <title>MIAO graphics — {translation?.meta?.title}</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="graphic designer, identità visiva, branding, packaging, comunicazione digitale"
        />
        <meta name="author" content="Elisa Avantey" />
        <link rel="canonical" href="https://www.miaographics.it/chi-sono" />
        <meta
          property="og:url"
          content="https://www.miaographics.it/chi-sono"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MIAO graphics — Chi sono" />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content="https://www.miaographics.it/assets/pageImg/lampadina.optimized.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MIAO graphics — Chi sono" />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://www.miaographics.it/assets/pageImg/lampadina.optimized.webp"
        />
      </Head>

      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
        data-use-service-core
      />

      <HeroPage
        image={translation?.hero?.img}
        imageAlt="Illustrazione creativa di MIAO graphics con una lampadina"
        mobileImageHeight="compact"
        imageWrapperClassName="max-w-[760px] xl:max-w-[600px] fxl:max-w-[1200px]"
      >
        <SectionIndex>CHI SONO</SectionIndex>
        <h1 className="text-[2.8rem] xs:text-[clamp(3rem,6.5vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.055em] text-main">
          Ciao, sono<span className="text-red"> Elisa.</span>
        </h1>
        <p className="mt-5 text-xl font-bold leading-tight text-main md:text-2xl">
          Sono una graphic designer specializzata in branding,{" "}
          <br className="hidden lg:block" />
          identità visiva e comunicazione visiva.
        </p>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-second lg:text-lg">
          Per me un buon progetto non è solo bello da vedere: è uno strumento
          che comunica, valorizza il brand e crea fiducia.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href="/servizi"
            title="Scopri i progetti di MIAO graphics"
            size="lg"
          >
            Scopri i miei servizi
          </ButtonLink>
          <ButtonLink
            href="/contatti"
            title="Parliamo del tuo progetto"
            variant="outline"
            size="lg"
          >
            Parliamo del progetto
          </ButtonLink>
        </div>
      </HeroPage>

      <SectionMeUno translation={translation?.sezioneUno} />
      <SectionMeDue />
      <SectionMeTre translation={translation?.sezioneQuattro} />

      <section className="mx-auto w-[90%] py-20 lg:py-24">
        <div className="flex flex-col gap-6 border-b border-main/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionIndex>DICONO DI ME</SectionIndex>
            <h2 className="text-4xl font-extrabold leading-tight text-main ">
              Esperienze condivise,
              <br /> risultati concreti.
            </h2>
          </div>
          <ButtonLink
            href="https://g.page/r/CVkCvxDyKu9aEBM/review"
            title="Scrivi una recensione per MIAO graphics"
            target="_blank"
            variant="outline"
          >
            {translation?.sezioneTre?.cta || "Scrivi una recensione"}
          </ButtonLink>
        </div>
        <div
          className="elfsight-app-4232eb26-57ce-4f62-af4c-b940b9705c52 mt-10 min-h-[240px]"
          data-elfsight-app-lazy
        />
      </section>

      <section className="bg-red text-white">
        <div className="mx-auto flex w-[90%] flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between lg:py-16">
          <div className="flex items-center gap-6">
            <span
              className="font-serif text-[7rem] leading-[0.55] text-white"
              aria-hidden="true"
            >
              {"{"}
            </span>
            <div>
              <h2 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                Hai un progetto in mente?
              </h2>
              <p className="mt-2 text-white/80">
                Raccontami la tua idea, creiamo qualcosa di unico.
              </p>
            </div>
          </div>
          <ButtonLink
            href="/contatti"
            title="Parliamo del tuo progetto"
            variant="inverse"
            size="lg"
            className="shrink-0"
          >
            Parliamo del progetto
          </ButtonLink>
        </div>
      </section>
    </div>
  );
};

export default Me;

export async function getStaticProps({ locale }) {
  const translations = locale === "it" ? translationIT : translationIT;

  return {
    props: {
      translation: translations?.me,
    },
    revalidate: 60,
  };
}
