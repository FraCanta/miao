import { useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Icon } from "@iconify/react";
import translationIT from "@/public/locales/it/it.json";

import Behance from "@/public/assets/Behance-logo2.optimized.webp";
import ButtonLink from "@/components/layout/ButtonLink";
import HeroPage from "@/components/layout/HeroPage";
import SectionIndex from "@/components/layout/SectionIndex";
import WorksItem from "@/components/worksItem/worksItem";

const INITIAL_VISIBLE = 4;
const LOAD_STEP = 4;
const ALL_FILTER = "Tutti";
const EMPTY_WORKS = [];

const filterLabels = {
  "Social Media": "Social media",
  Illustration: "Illustrazione",
};

const Portfolio = ({ translation }) => {
  const works = translation?.worksItem || EMPTY_WORKS;
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filters = useMemo(
    () => [
      ALL_FILTER,
      ...Array.from(new Set(works.flatMap((work) => work.button || []))),
    ],
    [works],
  );

  const featuredWorks = works.slice(0, 4);
  const archiveWorks = useMemo(() => {
    if (activeFilter === ALL_FILTER) {
      return works.slice(4);
    }

    return works.filter((work) => work.button?.includes(activeFilter));
  }, [activeFilter, works]);

  const visibleWorks = archiveWorks.slice(0, visibleCount);
  const hasMoreWorks = visibleCount < archiveWorks.length;
  const metaDescription =
    "Una selezione di progetti MIAO graphics tra identità visiva, branding, label design, comunicazione e illustrazione.";

  const selectFilter = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <div>
      <Head>
        <title>MIAO graphics — Portfolio</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="portfolio graphic design, branding, identità visiva, label design, packaging, illustrazione"
        />
        <meta name="author" content="Elisa Avantey" />
        <link rel="canonical" href="https://www.miaographics.it/portfolio" />
        <meta
          property="og:url"
          content="https://www.miaographics.it/portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MIAO graphics — Portfolio" />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content="https://www.miaographics.it/assets/pageImg/gufo2.optimized.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MIAO graphics — Portfolio" />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://www.miaographics.it/assets/pageImg/gufo2.optimized.webp"
        />
      </Head>

      <HeroPage
        image={translation?.hero?.img}
        imageAlt="Collage creativo MIAO graphics per il portfolio"
        columnsVariant="visual"
        mobileImageHeight="portfolio"
      >
        <SectionIndex>PROGETTI SELEZIONATI</SectionIndex>
        <div className="flex items-center gap-3 md:gap-5">
          <h1 className="text-[clamp(3.2rem,7vw,5rem)] font-extrabold text-main 4xl:text-[8rem]">
            Portfolio
          </h1>
        </div>
        <p className="mt-7 max-w-xl text-xl leading-relaxed text-second md:text-xl 4xl:mt-10 4xl:max-w-4xl 4xl:text-3xl">
          Una selezione di progetti di branding, graphic design, identità
          visiva, packaging design e comunicazione visiva, pensati per costruire
          brand riconoscibili e coerenti.
        </p>
        <ButtonLink
          href="#progetti"
          title="Scopri i progetti"
          variant="outline"
          arrowIcon="prime:arrow-down"
          className="mt-9"
        >
          Scopri i progetti
        </ButtonLink>
      </HeroPage>

      <section className="border-b border-main/10 bg-main/[0.025]">
        <div className="mx-auto grid w-[90%] grid-cols-[auto_minmax(0,1fr)] items-start gap-x-2 gap-y-8 py-14 md:grid-cols-[auto_1fr_1.15fr] md:items-center md:gap-5 lg:py-20 4xl:gap-16 4xl:py-32">
          <span
            className="flex items-center self-stretch font-serif text-red"
            aria-hidden="true"
          >
            <span className="block origin-center scale-y-[1.1] text-[8rem] leading-[0.65] md:scale-y-100 md:text-[9rem]">
              {"{"}
            </span>
          </span>
          <h2 className="text-3xl font-extrabold leading-tight text-main 4xl:text-6xl">
            Ogni progetto ha una storia differente da raccontare.
          </h2>
          <p className="col-span-2 text-base leading-relaxed text-second md:col-span-1 md:border-l md:border-main/15 md:pl-10 4xl:pl-16 4xl:text-3xl">
            Ascolto, ricerca e strategia guidano ogni scelta creativa.
            Dall’identità visiva al packaging, dai contenuti ai materiali
            stampatistampati, progetto soluzioni su misura per dare forma e
            valore a ogni brand.
          </p>
        </div>
      </section>

      <section
        id="progetti"
        className="mx-auto w-[90%] scroll-mt-28 py-16 lg:py-24 4xl:py-40"
      >
        <div className="pb-6 border-b border-main/15">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.18em] text-second 4xl:text-xl">
            Filtra per
          </span>
          <div
            className="flex pb-2 overflow-x-auto gap-7 md:flex-wrap md:gap-x-10"
            role="group"
            aria-label="Filtra i progetti per ambito"
          >
            {filters.map((filter) => {
              const isActive = filter === activeFilter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => selectFilter(filter)}
                  aria-pressed={isActive}
                  className={`shrink-0 border-b-2 pb-2 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red md:text-base 4xl:text-2xl ${
                    isActive
                      ? "border-red text-red"
                      : "border-transparent text-main hover:border-main/30 hover:text-red"
                  }`}
                >
                  {filterLabels[filter] || filter}
                </button>
              );
            })}
          </div>
        </div>

        {activeFilter === ALL_FILTER && featuredWorks.length > 0 && (
          <div className="mt-14">
            <SectionIndex>PROGETTI IN EVIDENZA</SectionIndex>
            <div className="grid grid-cols-1 gap-4 mt-7 sm:grid-cols-2 xl:grid-cols-4">
              {featuredWorks.map((work) => (
                <WorksItem key={work.link} {...work} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-14">
          <SectionIndex>
            {activeFilter === ALL_FILTER
              ? "ARCHIVIO PROGETTI"
              : `PROGETTI: ${filterLabels[activeFilter] || activeFilter}`}
          </SectionIndex>

          {visibleWorks.length > 0 ? (
            <div className="grid grid-cols-1 mt-7 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visibleWorks.map((work) => (
                <WorksItem key={work.link} {...work} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-lg text-second">
              Nessun progetto disponibile per questo filtro.
            </p>
          )}

          <div className="flex flex-col items-center gap-5 mt-10">
            {hasMoreWorks && (
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + LOAD_STEP)}
                className="site-button-outline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
              >
                <span>Carica altri progetti</span>
                <Icon
                  icon="prime:arrow-down"
                  aria-hidden="true"
                  className="w-4 h-4"
                />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="text-white bg-red">
        <div className="mx-auto flex w-[90%] flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between lg:py-16 4xl:py-24">
          <div className="flex items-center gap-6">
            <span
              className="font-serif text-[7rem] leading-[0.55] text-white"
              aria-hidden="true"
            >
              {"{"}
            </span>
            <div>
              <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl 4xl:text-7xl">
                Hai un&apos;idea da sviluppare?
              </h2>
              <p className="mt-2 text-white/80 4xl:mt-4 4xl:text-2xl">
                Costruiamo insieme un’identità visiva chiara e riconoscibile.
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

export default Portfolio;

export async function getStaticProps({ locale }) {
  const translations = locale === "it" ? translationIT : translationIT;

  return {
    props: {
      translation: translations?.portfolio,
    },
    revalidate: 60,
  };
}
