import Head from "next/head";
import translationIT from "../../public/locales/it/it.json";

import ButtonLink from "@/components/layout/ButtonLink";
import HeroPage from "@/components/layout/HeroPage";
import SectionIndex from "@/components/layout/SectionIndex";
import Gallery from "@/components/gallery/gallery";
import ServiceCard from "@/components/serviziItem/ServiceCard";

const ServicePage = ({
  servizio,
  serviceKey,
  others,
  galleryImages,
  webServices,
}) => {
  const titleWords = servizio?.name?.split(" ") || [];
  const accentWord = titleWords.pop();
  const titleStart = titleWords.join(" ");
  const canonicalUrl = `https://www.miaographics.it/servizi/${serviceKey}`;

  return (
    <div>
      <Head>
        <title>{`MIAO graphics — ${servizio?.name}`}</title>
        <meta name="description" content={servizio?.descrizione} />
        <meta
          name="keywords"
          content={`${servizio?.name}, graphic design, identità visiva, comunicazione visiva`}
        />
        <meta name="author" content="Elisa Avantey" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`MIAO graphics — ${servizio?.name}`}
        />
        <meta
          property="og:image"
          content={`https://www.miaographics.it${servizio?.img}`}
        />
        <meta property="og:description" content={servizio?.descrizione} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`MIAO graphics — ${servizio?.name}`}
        />
        <meta name="twitter:description" content={servizio?.descrizione} />
        <meta
          name="twitter:image"
          content={`https://www.miaographics.it${servizio?.img}`}
        />
      </Head>

      <HeroPage
        image={servizio?.img}
        imageAlt={`Esempio visivo del servizio ${servizio?.name}`}
        imageSizes="(max-width: 1023px) 90vw, 50vw"
        columnsVariant="visual"
        mobileMinHeight="header"
        imageWrapperClassName="max-w-[780px]"
      >
            <SectionIndex>SERVIZIO</SectionIndex>
            <div className="flex items-center gap-2 3xl:gap-5 ">
              <span
                className="font-serif text-[5rem]  text-red md:text-[6.5rem] "
                aria-hidden="true"
              >
                {"{"}
              </span>
              <h1 className="text-[2.6rem] xs:text-[3rem] xl:text-[4rem] font-extrabold leading-none  text-main">
                {titleStart}
                {titleStart && " "}
                <span className="text-red">{accentWord}</span>
              </h1>
            </div>
            <p className=" max-w-3xl text-2xl font-bold leading-tight text-main md:text-2xl">
              {servizio?.heroTagline}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-second lg:text-lg">
              {servizio?.descrizione}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href="/contatti"
                title={`Richiedi un preventivo per ${servizio?.name}`}
                size="lg"
              >
                {servizio?.preventivo}
              </ButtonLink>
              <ButtonLink
                href="#esempi"
                title={`Guarda gli esempi di ${servizio?.name}`}
                variant="outline"
                size="lg"
                arrowIcon="prime:arrow-down"
              >
                Vedi esempi
              </ButtonLink>
            </div>
      </HeroPage>

      <section className="border-b border-main/10 bg-main/[0.025]">
        <div className="mx-auto grid w-[90%] grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2 gap-y-8 py-14 md:grid-cols-[auto_1fr_1.15fr] md:items-center md:gap-4 lg:py-20">
          <span
            className="flex self-stretch items-center font-serif text-red"
            aria-hidden="true"
          >
            <span className="block origin-center scale-y-[1.1] text-[6rem] leading-[0.65] md:scale-y-100 md:text-[9rem]">
              {"{"}
            </span>
          </span>
          <h2 className="text-2xl font-extrabold leading-tight text-main md:text-4xl ">
            {servizio?.introTitle}
          </h2>
          <div className="col-span-2 space-y-4 border-main/15 md:col-span-1 md:border-l md:pl-10">
            {servizio?.intro?.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-second lg:text-lg"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </div>
      </section>

      {servizio?.titlePro && servizio?.descPro?.length > 0 && (
        <section className="mx-auto grid w-[90%] gap-8 border-b border-main/10 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-20">
          <div>
            <SectionIndex>IL PROGETTO</SectionIndex>
            <h2 className="text-4xl font-extrabold leading-tight text-main md:text-5xl">
              {servizio.titlePro}
            </h2>
          </div>
          <div className="space-y-5 lg:border-l lg:border-main/15 lg:pl-12">
            {servizio.descPro.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-second lg:text-lg"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </section>
      )}

      {servizio?.audience?.length > 0 && (
        <section className="mx-auto w-[90%] border-b border-main/10 py-16 lg:py-20">
          <SectionIndex>A CHI È RIVOLTO </SectionIndex>
          <h2 className="sr-only">
            A chi è rivolto il servizio {servizio?.name}
          </h2>
          <ul className="mt-8 grid border-l border-t border-main/15 md:grid-cols-3">
            {servizio.audience.map((item, index) => (
              <li
                key={item.title}
                className="min-h-[220px] border-b border-r border-main/15 p-6 lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.16em] text-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-4 w-4 bg-red" aria-hidden="true" />
                </div>
                <h3 className="mt-10 text-2xl font-extrabold text-main">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-second md:text-base">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {servizio?.list?.length > 0 && (
        <section className="mx-auto w-[90%] py-16 lg:py-20">
          <SectionIndex>{servizio?.titleList || "COSA OTTERRAI"}</SectionIndex>
          <h2 className="sr-only">
            Cosa comprende il servizio {servizio?.name}
          </h2>
          {servizio?.sottoList && (
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-second lg:text-lg">
              {servizio.sottoList}
            </p>
          )}
          <ul className="grid border-l border-t border-main/15 sm:grid-cols-2 xl:grid-cols-4">
            {servizio.list.map((item, index) => (
              <li
                key={item}
                className="min-h-[190px] border-b border-r border-main/15 p-6 lg:p-8"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-3xl font-light text-main"
                    aria-hidden="true"
                  >
                    ◇
                  </span>
                  <span className="text-xs font-bold tracking-[0.16em] text-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-8 text-base font-bold leading-relaxed text-main">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="bg-main text-white">
        <div className="mx-auto flex w-[90%] flex-col gap-7 py-10 md:flex-row md:items-center md:justify-between lg:py-12">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              {servizio?.preventivoTitle}
            </h2>
            <p className="mt-2 text-white/65">
              Raccontami il tuo progetto: ti risponderò con una proposta su
              misura.
            </p>
          </div>
          <ButtonLink
            href="/contatti"
            title={`Richiedi un preventivo per ${servizio?.name}`}
            size="lg"
            className="shrink-0"
          >
            {servizio?.preventivo}
          </ButtonLink>
        </div>
      </section>

      {galleryImages?.length > 0 && (
        <section
          id="esempi"
          className="mx-auto w-[90%] scroll-mt-28 py-16 lg:py-24"
        >
          <SectionIndex>
            {servizio?.galleryTitle || "ESEMPI SELEZIONATI"}
          </SectionIndex>
          <div className="mt-8">
            <Gallery
              imageArray={galleryImages}
              galleryID={`gallery-${serviceKey}`}
              galleryTitle={`Esempi di ${servizio?.name}`}
              previewLimit={7}
              ctaLabel="Guarda tutta la galleria"
            />
          </div>
        </section>
      )}

      {others?.length > 0 && (
        <section className="mx-auto w-[90%] border-t border-main/10 py-16 lg:py-24">
          <SectionIndex>
            {servizio?.opzioni || "ALTRI SERVIZI CHE POTREBBERO INTERESSARTI"}
          </SectionIndex>
          <h2 className="sr-only">Altri servizi MIAO graphics</h2>
          <div className="mt-8 grid grid-cols-1 border-l border-t border-main/15 sm:grid-cols-2 xl:grid-cols-4">
            {others.slice(0, 4).map((service, index) => (
              <ServiceCard key={service.link} service={service} index={index} />
            ))}
          </div>
        </section>
      )}

      {(servizio?.titleOpzioni || servizio?.descOpzioni) &&
        webServices?.length > 0 && (
          <section className="border-t border-main/10 bg-main/[0.025]">
            <div className="mx-auto w-[90%] py-16 lg:py-24">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div>
                  <SectionIndex>OPZIONI SU MISURA</SectionIndex>
                  <h2 className="text-2xl font-extrabold leading-tight text-main md:text-3xl">
                    {servizio?.titleOpzioni}
                  </h2>
                </div>
                {servizio?.descOpzioni && (
                  <p className="text-base leading-relaxed text-second lg:border-l lg:border-main/15 lg:pl-12 lg:text-lg">
                    {servizio.descOpzioni}
                  </p>
                )}
              </div>

              <div className="mt-12 grid grid-cols-1 border-l border-t border-main/15 sm:grid-cols-2 xl:grid-cols-4">
                {webServices.map((service, index) => (
                  <ServiceCard
                    key={service.link}
                    service={service}
                    index={index}
                  />
                ))}
              </div>

              {servizio?.call && (
                <div className="mt-10 flex justify-end">
                  <ButtonLink
                    href="/contatti"
                    title={`${servizio.call}: parliamo del progetto`}
                    size="lg"
                  >
                    {servizio.call}
                  </ButtonLink>
                </div>
              )}
            </div>
          </section>
        )}

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
            Parliamone
          </ButtonLink>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;

export async function getStaticProps({ params, locale }) {
  const translations = locale === "it" ? translationIT : translationIT;
  const services = translations?.servizi?.singleService || {};
  const serviceEntries = Object.entries(services);
  const currentEntry = serviceEntries.find(
    ([, service]) => service.slug === params.title,
  );

  if (!currentEntry) {
    return { notFound: true };
  }

  const [currentKey, servizio] = currentEntry;

  const others = serviceEntries
    .filter(([key]) => key !== currentKey)
    .map(([, service]) => ({
      name: service.name,
      img: service.img,
      descrizione: service.descrizione,
      link: `/servizi/${service.slug}`,
    }));

  const galleryImages = [
    ...(servizio?.gallery || []),
    ...(servizio?.gallery2 || []),
    ...(servizio?.gallery3 || []),
    ...(servizio?.gallery4 || []),
  ];

  return {
    props: {
      servizio,
      serviceKey: params.title,
      others,
      galleryImages,
      webServices: translations?.servizi?.fraService || [],
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const services = Object.values(translationIT?.servizi?.singleService || {});

  return {
    paths: services.map((service) => ({
      params: { title: service.slug },
      locale: "it",
    })),
    fallback: false,
  };
}
