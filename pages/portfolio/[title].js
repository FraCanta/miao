import translationIT from "../../public/locales/it/it.json";
import ButtonLink from "@/components/layout/ButtonLink";
import Typography from "@/components/worksItem/typography";
import ColorBrand from "@/components/worksItem/colorBrand";
import Illustrazioni from "@/components/worksItem/illustrazioni";
import Illustrazioni2 from "@/components/worksItem/illustrazioni2";
import Label from "@/components/worksItem/label";
import Social from "@/components/worksItem/social";
import { Icon } from "@iconify/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.miaographics.it";

const SectionHeading = ({ children, brace = false, dot = false }) => (
  <div className="flex items-start gap-4 md:gap-6">
    {brace ? (
      <span
        aria-hidden="true"
        className="-mt-3 shrink-0 font-serif text-[5.5rem] font-light leading-none text-red md:text-[7rem]"
      >
        {"{"}
      </span>
    ) : null}
    <h2 className="text-3xl font-extrabold leading-tight text-main md:text-4xl lg:text-5xl">
      {children}
      {dot && <span className="text-red">.</span>}
    </h2>
  </div>
);

const MetaItem = ({ icon, label, children }) => (
  <div className="flex min-h-[112px] gap-4 border-b border-main/15 p-5 last:border-b-0 md:border-b-0 md:p-7">
    <Icon
      icon={icon}
      aria-hidden="true"
      className="mt-0.5 h-6 w-6 shrink-0 text-red"
    />
    <div>
      <h3 className="text-sm font-extrabold text-red">{label}</h3>
      <div className="mt-1 text-sm leading-relaxed text-second md:text-md">
        {children}
      </div>
    </div>
  </div>
);

const ProjectLink = ({ project, direction }) => {
  if (!project) return <div aria-hidden="true" />;

  const isPrevious = direction === "previous";

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={`group grid min-h-[150px] grid-cols-[112px_1fr] items-center gap-5 border border-main/10 p-3 transition-colors hover:border-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red md:grid-cols-[145px_1fr] ${
        isPrevious ? "" : "text-right md:grid-cols-[1fr_145px]"
      }`}
      aria-label={`${isPrevious ? "Progetto precedente" : "Progetto successivo"}: ${project.name}`}
    >
      {isPrevious && (
        <Image
          src={project.img}
          alt=""
          width={300}
          height={300}
          className="object-cover w-full h-full aspect-square"
          sizes="(max-width: 767px) 112px, 145px"
        />
      )}
      <div>
        <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-second">
          {isPrevious && <Icon icon="prime:arrow-left" aria-hidden="true" />}
          Progetto {isPrevious ? "precedente" : "successivo"}
          {!isPrevious && <Icon icon="prime:arrow-right" aria-hidden="true" />}
        </span>
        <h3 className="mt-3 text-xl font-extrabold text-main md:text-2xl">
          {project.name}
        </h3>
        <p className="mt-1 text-xs text-second">
          {project.services.join(" · ")}
        </p>
        <span className="inline-flex items-center gap-2 mt-3 text-xs font-bold text-red">
          Vedi progetto
          <Icon icon="prime:arrow-up-right" aria-hidden="true" />
        </span>
      </div>
      {!isPrevious && (
        <Image
          src={project.img}
          alt=""
          width={300}
          height={300}
          className="object-cover w-full h-full col-start-2 row-start-1 aspect-square"
          sizes="(max-width: 767px) 112px, 145px"
        />
      )}
    </Link>
  );
};

const Works = ({ works, slug, previousWork, nextWork }) => {
  const projectCopy = works?.desc || [];
  const services = works?.servizi?.nome || works?.button || [];
  const canonicalUrl = `${SITE_URL}/portfolio/${encodeURIComponent(slug)}`;
  const socialImage = works?.img?.startsWith("http")
    ? works.img
    : `${SITE_URL}${works?.img}`;

  return (
    <div className="bg-white">
      <Head>
        <title>{`${works?.name} — Portfolio MIAO graphics`}</title>
        <meta
          name="description"
          content={`${works?.name}: ${works?.descrizione}. Scopri il progetto di identità visiva realizzato da MIAO graphics.`}
        />
        <meta name="keywords" content={works?.keywords?.nome} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={`${works?.name} — MIAO graphics`} />
        <meta property="og:description" content={works?.descrizione} />
        <meta property="og:image" content={socialImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${works?.name} — MIAO graphics`} />
        <meta name="twitter:description" content={works?.descrizione} />
        <meta name="twitter:image" content={socialImage} />
      </Head>

      <section className="relative min-h-[560px] overflow-hidden bg-main text-white md:min-h-[620px] lg:min-h-[max(520px,calc(100svh-var(--site-header-height)))]">
        <Image
          src={works.img}
          alt={`Progetto ${works.name}: ${works.descrizione}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="work-hero-overlay absolute inset-0 z-[1]" />
        <div className="relative z-10 mx-auto flex min-h-[560px] w-[90%] max-w-[1920px] flex-col justify-end pb-12 pt-16 md:min-h-[620px] md:pb-10 lg:min-h-[max(520px,calc(100svh-var(--site-header-height)))] lg:pb-9 4xl:max-w-[3840px]">
          <div className="max-w-4xl">
            <div className="flex items-center gap-5 md:gap-6">
              <span
                aria-hidden="true"
                className="shrink-0 font-serif text-[4.2rem] font-light leading-[0.65] text-white md:text-[8rem]"
              >
                {"{"}
              </span>
              <div>
                <h1 className="text-[1.9rem] font-extrabold leading-none tracking-wider md:text-7xl lg:text-6xl 4xl:text-[7rem]">
                  {works.name}
                </h1>
                <p className="mt-3 text-base font-semibold md:text-2xl">
                  {works.descrizione}
                </p>
              </div>
            </div>
            <p className="ml-auto mt-5 max-w-3xl text-xs font-bold uppercase tracking-[0.08em] md:ml-[5rem] md:text-sm 4xl:max-w-5xl 4xl:text-xl">
              {services.join(" · ")}
            </p>
          </div>

          <nav
            aria-label="Navigazione tra i progetti"
            className="mt-9 hidden items-center justify-end gap-4 border-t border-white/30 pt-5 text-xs font-bold uppercase tracking-[0.08em] md:flex"
          >
            {previousWork && (
              <Link
                href={`/portfolio/${previousWork.slug}`}
                title={`Progetto precedente: ${previousWork.name}`}
                data-transition-label={previousWork.name}
                className="inline-flex items-center gap-3 transition-colors hover:text-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
              >
                <Icon icon="prime:arrow-left" aria-hidden="true" />
                Progetto precedente
              </Link>
            )}
            {previousWork && nextWork && (
              <span
                aria-hidden="true"
                className="hidden w-px h-6 bg-white/40 sm:block"
              />
            )}
            {nextWork && (
              <Link
                href={`/portfolio/${nextWork.slug}`}
                title={`Progetto successivo: ${nextWork.name}`}
                data-transition-label={nextWork.name}
                className="inline-flex items-center gap-3 transition-colors hover:text-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red"
              >
                Progetto successivo
                <Icon icon="prime:arrow-right" aria-hidden="true" />
              </Link>
            )}
          </nav>
        </div>
      </section>

      <section className="py-16 border-b border-main/10 md:py-24">
        <div className="mx-auto grid w-[90%] max-w-[1920px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 4xl:max-w-[3840px]">
          <div>
            <SectionHeading>{works.introTitolo || "Progetto"}</SectionHeading>
            <div className="mt-7 max-w-xl space-y-5 text-base leading-relaxed text-second md:text-lg 4xl:max-w-4xl 4xl:space-y-8 4xl:text-3xl">
              {projectCopy.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid overflow-hidden border border-main/15 md:grid-cols-2">
            <MetaItem
              icon="lucide:user-round"
              label={works?.cliente?.titolo || "Cliente"}
            >
              <span
                dangerouslySetInnerHTML={{ __html: works?.cliente?.nome }}
              />
              {works?.cliente?.payoff && <p>{works.cliente.payoff}</p>}
            </MetaItem>
            <MetaItem
              icon="lucide:calendar-days"
              label={works?.anno?.titolo || "Anno"}
            >
              {works?.anno?.nome || "—"}
            </MetaItem>
            <MetaItem
              icon="lucide:briefcase-business"
              label={works?.servizi?.titolo || "Servizi"}
            >
              {services.join(", ")}
            </MetaItem>
            <MetaItem
              icon="lucide:tag"
              label={works?.keywords?.titolo || "Keywords"}
            >
              {works?.keywords?.nome || works?.descrizione}
            </MetaItem>
          </div>
        </div>
      </section>

      {works?.logoImg && (
        <section className="relative mx-auto min-h-[40vh] w-[90%] lg:h-[90vh]">
          <Image
            src={works.logoImg}
            fill
            alt={`Logo del progetto ${works.name}`}
            className="object-contain"
            sizes="90vw"
          />
        </section>
      )}

      {works?.typo && (
        <section className="mx-auto flex w-[90%] flex-col gap-6 overflow-y-hidden pt-6">
          <Typography translation={works.typo} />
        </section>
      )}

      {works?.illustrazioni2 && (
        <section className="mx-auto flex w-[90%] flex-col gap-6 pt-6">
          <Illustrazioni2 translation={works.illustrazioni2} />
        </section>
      )}

      {works?.color && (
        <section className="mx-auto flex w-[90%] flex-col gap-6 pt-6">
          <ColorBrand translation={works.color} />
        </section>
      )}

      {works?.applyColor && (
        <section className="mx-auto flex w-[90%] flex-col gap-6 pt-6">
          <h3 className="text-[6vw] font-bold leading-none text-main md:text-[2.5vw] 4xl:text-[5rem]">
            {works.applyColor.descrizione}
          </h3>
          <div className="relative h-[20vh] w-full lg:h-screen">
            <Image
              src={works.applyColor.colorImg}
              fill
              className="object-contain"
              alt={`${works.name}, applicazione della palette colori`}
              sizes="90vw"
            />
          </div>
        </section>
      )}

      {works?.illustrazioni && (
        <section className="mx-auto flex w-[90%] flex-col gap-6 pt-6">
          <Illustrazioni translation={works.illustrazioni} />
        </section>
      )}

      {works?.fustella && (
        <section className="relative h-[30vh] lg:h-screen">
          <Image
            src={works.fustella.fustellaImg}
            fill
            className="object-contain"
            alt={`${works.name}, sviluppo della fustella`}
            sizes="100vw"
          />
        </section>
      )}

      {works?.libro?.illustrazioni?.map((image, index) => (
        <section
          key={image}
          className="relative mx-auto my-3 h-[30vh] w-[90%] lg:my-6 lg:h-screen"
        >
          <Image
            src={image}
            fill
            className="object-cover"
            alt={`${works.name}, illustrazione editoriale ${index + 1}`}
            sizes="90vw"
          />
        </section>
      ))}

      {works?.label && (
        <section className="mx-auto flex w-[90%] flex-col pt-6">
          <Label translation={works.label} projectName={works.name} />
        </section>
      )}

      {works?.social && (
        <section className="mx-auto flex w-[90%] flex-col gap-6 pt-10">
          <Social translation={works.social} />
        </section>
      )}

      {(previousWork || nextWork) && (
        <section className="py-16 md:py-20">
          <div className="mx-auto w-[90%] max-w-[1920px] 4xl:max-w-[3840px]">
            <div className="grid gap-5 mt-7 lg:grid-cols-2">
              <ProjectLink project={previousWork} direction="previous" />
              <ProjectLink project={nextWork} direction="next" />
            </div>
          </div>
        </section>
      )}

      <section className="text-white bg-red">
        <div className="mx-auto flex w-[90%] max-w-[1920px] flex-col items-start justify-between gap-8 py-10 md:flex-row md:items-center md:py-12 4xl:max-w-[3840px]">
          <div className="flex items-center gap-6">
            <span
              aria-hidden="true"
              className="font-serif font-light leading-none text-8xl"
            >
              {"{"}
            </span>
            <div>
              <h2 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
                Hai un progetto da raccontare?
              </h2>
              <p className="mt-2 text-white/80">
                Diamo forma alla tua identità visiva.
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

export default Works;

const toProjectLink = (work) => {
  if (!work) return null;

  return {
    slug: work.title,
    name: work.name,
    img: work.img,
    services: work?.servizi?.nome || work?.button || [],
  };
};

export async function getStaticProps({ params }) {
  const allWorks = translationIT?.portfolio?.singleWorks;
  const works = Object.values(allWorks);
  const currentIndex = works.findIndex((work) => work.title === params.title);

  if (currentIndex === -1) {
    return { notFound: true };
  }

  return {
    props: {
      works: works[currentIndex],
      slug: params.title,
      previousWork: toProjectLink(works[currentIndex - 1]),
      nextWork: toProjectLink(works[currentIndex + 1]),
    },
  };
}

export async function getStaticPaths() {
  const works = Object.values(translationIT?.portfolio?.singleWorks);

  return {
    paths: works.map((work) => ({
      params: { title: work.title },
      locale: "it",
    })),
    fallback: false,
  };
}
