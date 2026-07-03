import Head from "next/head";
import translationIT from "../public/locales/it/it.json";

import ButtonLink from "@/components/layout/ButtonLink";
import HeroPage from "@/components/layout/HeroPage";
import SectionIndex from "@/components/layout/SectionIndex";
import ServiziItem from "@/components/serviziItem/serviziItem";

const approachSteps = [
  {
    number: "01",
    title: "Ascolto",
    description:
      "Ogni progetto inizia dall'ascolto: dei tuoi obiettivi, del tuo pubblico e del contesto in cui il tuo brand si inserisce.",
    symbol: "◖",
  },
  {
    number: "02",
    title: "Strategia",
    description:
      "Definisco una direzione creativa coerente e distintiva, pensata per rafforzare il posizionamento del tuo brand.",
    symbol: "◎",
  },
  {
    number: "03",
    title: "Progetto",
    description:
      "Sviluppo soluzioni visive efficaci, curate nei dettagli e pensate per comunicare il valore del tuo brand in modo chiaro e riconoscibile.",
    symbol: "◇",
  },
];

const Services = ({ translation }) => {
  const metaDescription =
    "Identità visiva, branding, packaging, illustrazione e contenuti su misura per rendere il tuo brand chiaro, coerente e riconoscibile.";

  return (
    <div>
      <Head>
        <title>MIAO graphics — Servizi</title>
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="branding, identità visiva, logo design, packaging design, social media, illustrazione, content creation"
        />
        <meta name="author" content="Elisa Avantey" />
        <link rel="canonical" href="https://www.miaographics.it/servizi" />
        <meta property="og:url" content="https://www.miaographics.it/servizi" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MIAO graphics — Servizi" />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content="https://www.miaographics.it/assets/pageImg/gatto2.optimized.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MIAO graphics — Servizi" />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://www.miaographics.it/assets/pageImg/gatto2.optimized.webp"
        />
      </Head>

      <HeroPage
        image={translation?.hero?.img}
        imageAlt="Collage creativo MIAO graphics per la pagina servizi"
        mobileImageHeight="compact"
      >
        <SectionIndex>SERVIZI</SectionIndex>
        <h1 className="lg:max-w-2xl text-[2.5rem] lg:text-[5rem] font-extrabold leading-[0.94]  text-main">
          Soluzioni creative<span className="text-red"> su misura.</span>
        </h1>
        <p className="max-w-2xl text-base leading-relaxed mt-7 text-second lg:text-lg">
          Offro servizi di graphic design, branding, brand identity, logo
          design, packaging design, illustrazione e comunicazione visiva per
          aziende, professionisti e startup. <br />
        </p>

        <div className="flex flex-col gap-3 mt-9 sm:flex-row">
          <ButtonLink
            href="/contatti"
            title="Parliamo del tuo progetto"
            size="lg"
          >
            Parliamo del progetto
          </ButtonLink>
          <ButtonLink
            href="/portfolio"
            title="Guarda i progetti di MIAO graphics"
            variant="outline"
            size="lg"
          >
            Guarda i lavori
          </ButtonLink>
        </div>
      </HeroPage>

      <section className="border-b border-main/10 bg-main/[0.025]">
        <div className="mx-auto grid w-[90%] gap-8 py-14 md:grid-cols-[auto_1fr_1.2fr] md:items-center md:gap-12 lg:py-20">
          <span
            className="font-serif text-[7rem] leading-[0.6] text-red md:text-[9rem]"
            aria-hidden="true"
          >
            {"{"}
          </span>
          <h2 className="text-4xl font-extrabold leading-tight text-main md:text-5xl">
            Come posso aiutarti
          </h2>
          <p className="text-base leading-relaxed border-main/15 text-second md:border-l md:pl-10 lg:text-lg">
            Ogni progetto è un percorso: dall&apos;idea alla sua realizzazione,
            costruisco identità visive e strumenti di comunicazione che
            valorizzano il tuo brand, ne raccontano l&apos;essenza e lo rendono
            riconoscibile nel tempo.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[90%] py-16 lg:py-24">
        <h2 className="sr-only">Tutti i servizi di MIAO graphics</h2>
        <div className="grid grid-cols-1 border-t border-l border-main/15 sm:grid-cols-2 xl:grid-cols-4">
          {translation?.serviziItem?.map((service, index) => (
            <ServiziItem
              key={service.link}
              index={index}
              img={service.img}
              name={service.name}
              descrizione={service.descrizione}
              link={service.link}
              editorial
            />
          ))}
        </div>
      </section>

      <section className="border-y border-main/10 bg-main/[0.025]">
        <div className="mx-auto grid w-[90%] py-14 lg:grid-cols-[0.65fr_2.35fr] lg:py-16">
          <div className="pb-8 lg:border-r lg:border-main/15 lg:pr-10">
            <SectionIndex>IL MIO APPROCCIO</SectionIndex>
            <h2 className="text-3xl font-extrabold leading-tight text-main">
              Diamo forma alle idee, passo dopo passo.
            </h2>
          </div>
          <ol className="grid border-t border-l border-main/15 sm:grid-cols-3 lg:border-l-0 lg:border-t-0">
            {approachSteps.map((step) => (
              <li
                key={step.title}
                className="p-6 border-b border-r border-main/15 lg:border-b-0 lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.16em] text-red">
                    {step.number}
                  </span>
                  <span className="text-3xl text-main" aria-hidden="true">
                    {step.symbol}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-extrabold text-main">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-second md:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="text-white bg-red">
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
            title="Contattami per il tuo progetto"
            variant="inverse"
            size="lg"
            className="shrink-0"
          >
            Contattami
          </ButtonLink>
        </div>
      </section>
    </div>
  );
};

export default Services;

export async function getStaticProps({ locale }) {
  const translations = locale === "it" ? translationIT : translationIT;

  return {
    props: {
      translation: translations?.servizi,
    },
    revalidate: 60,
  };
}
