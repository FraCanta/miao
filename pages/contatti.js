import Head from "next/head";
import Link from "next/link";
import { Icon } from "@iconify/react";

import translationIT from "../public/locales/it/it.json";
import ButtonLink from "@/components/layout/ButtonLink";
import HeroPage from "@/components/layout/HeroPage";
import SectionIndex from "@/components/layout/SectionIndex";
import ContactForm from "@/components/contactForm/contactForm";

const CONTACT_DESCRIPTION =
  "Parliamo del tuo progetto di branding, identità visiva, packaging o comunicazione digitale. Raccontami la tua idea e costruiamo insieme una direzione chiara.";

const contactDetails = [
  {
    icon: "lucide:mail",
    label: "Scrivimi",
    value: "miaographics@gmail.com",
    href: "mailto:miaographics@gmail.com",
  },
  {
    icon: "lucide:phone",
    label: "Chiamami",
    value: "+39 340 853 9159",
    href: "tel:+393408539159",
  },
  {
    icon: "lucide:calendar-days",
    label: "Prenota una call",
    value: "Scegli giorno e orario",
    href: "https://calendly.com/arvine82/parlami-del-tuo-progetto",
    external: true,
  },
];

const Contacts = ({ translation }) => (
  <div className="bg-white">
    <Head>
      <title>Contatti — Parliamo del tuo progetto | MIAO graphics</title>
      <meta name="description" content={CONTACT_DESCRIPTION} />
      <meta
        name="keywords"
        content="contatti graphic designer, preventivo branding, identità visiva, packaging design"
      />
      <link rel="canonical" href="https://www.miaographics.it/contatti" />
      <meta property="og:url" content="https://www.miaographics.it/contatti" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Contatti — MIAO graphics" />
      <meta property="og:description" content={CONTACT_DESCRIPTION} />
      <meta
        property="og:image"
        content="https://www.miaographics.it/assets/pageImg/lupo2.optimized.webp"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contatti — MIAO graphics" />
      <meta name="twitter:description" content={CONTACT_DESCRIPTION} />
    </Head>

    <HeroPage
      image={translation?.hero?.img}
      imageAlt="Collage creativo MIAO graphics dedicato ai contatti"
      imageSizes="(max-width: 1023px) 90vw, 54vw"
      columnsVariant="visual"
      mobileImageHeight="contact"
      mobileMinHeight="fixed"
      maxWidth
      compactGap
    >
      <SectionIndex>Contatti</SectionIndex>
      <h1 className="mt-6 text-4xl font-extrabold text-main sm:text-6xl md:text-7xl 4xl:text-[8rem]">
        Parliamo del tuo prossimo <span className="text-red">progetto.</span>
      </h1>
      <p className="mt-7 max-w-xl text-lg leading-relaxed text-second md:text-lg 4xl:mt-10 4xl:max-w-4xl 4xl:text-3xl">
        Raccontami la tua idea, il punto in cui ti trovi e dove vuoi arrivare.
        Ti aiuterò a trasformarla in una direzione visiva chiara e
        riconoscibile.
      </p>
      <div className="flex flex-col gap-3 mt-9 sm:flex-row">
        <ButtonLink
          href="#form-contatti"
          title="Raccontami il tuo progetto"
          size="lg"
          arrowIcon="prime:arrow-down"
        >
          Spiegami la tua idea
        </ButtonLink>
        <ButtonLink
          href="https://calendly.com/arvine82/parlami-del-tuo-progetto"
          title="Prenota una call conoscitiva"
          target="_blank"
          variant="outline"
          size="lg"
        >
          Prenota una call
        </ButtonLink>
      </div>
    </HeroPage>

    <section className="border-b border-main/10 py-12 md:py-16 4xl:py-28">
      <div className="mx-auto grid w-[90%] max-w-[1920px] gap-8 md:grid-cols-[auto_1fr] md:items-center md:gap-12 4xl:max-w-[3840px]">
        <div className="flex items-center gap-5">
          <span
            aria-hidden="true"
            className="font-serif font-light leading-none text-8xl text-red"
          >
            {"{"}
          </span>
          <h2 className="text-3xl font-extrabold leading-tight text-main md:text-4xl 4xl:text-6xl">
            Il primo passo è raccontarmi cosa hai in mente.
          </h2>
        </div>
        <div className="grid gap-4 text-base leading-relaxed text-second md:border-l md:border-main/15 md:pl-12 md:text-lg 4xl:gap-6 4xl:pl-16 4xl:text-3xl">
          <p>
            Non serve avere già tutto chiaro: partiamo da obiettivi, necessità e
            contesto per capire insieme la direzione migliore.
          </p>
          <p className="font-bold text-main">
            Ti rispondo normalmente entro 1–2 giorni lavorativi.
          </p>
        </div>
      </div>
    </section>

    <section
      id="form-contatti"
      className="scroll-mt-32 bg-[#f7f6f4] py-16 md:py-24 4xl:py-40"
    >
      <div className="mx-auto w-[90%] max-w-[1920px] 4xl:max-w-[3840px]">
        <div className="grid gap-7 border-b border-main/15 pb-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <SectionIndex>Il tuo progetto</SectionIndex>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-main md:text-5xl 4xl:text-7xl">
              Iniziamo da qui<span className="text-red">.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-second md:text-lg lg:justify-self-end 4xl:max-w-4xl 4xl:text-3xl">
            Compila il form con le informazioni che hai già. Più dettagli mi
            dai, più il primo confronto sarà concreto e utile.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(19rem,1fr)] lg:items-start lg:gap-12 xl:gap-20">
          <ContactForm translation={translation?.contactForm} />

          <aside className="pt-8 border-t border-main/15 lg:sticky lg:top-28 lg:mt-12 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-10">
            <SectionIndex>Contatti diretti</SectionIndex>
            <div className="grid mt-6 border-t border-l border-main/15">
              {contactDetails.map((detail) => (
                <Link
                  key={detail.label}
                  href={detail.href}
                  target={detail.external ? "_blank" : undefined}
                  rel={detail.external ? "noopener noreferrer" : undefined}
                  className="group relative flex min-h-[138px] items-start gap-4 border-b border-r border-main/15 p-6 transition-colors hover:border-red hover:bg-red hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red 4xl:min-h-[240px] 4xl:gap-7 4xl:p-10"
                >
                  <Icon
                    icon={detail.icon}
                    aria-hidden="true"
                    className="w-5 h-5 mt-1 transition-colors shrink-0 text-red group-hover:text-white"
                  />
                  <div className="min-w-0 pr-7">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-second transition-colors group-hover:text-white/70 4xl:text-xl">
                      {detail.label}
                    </p>
                    <p className="mt-3 break-words text-lg font-extrabold leading-tight text-main transition-colors group-hover:text-white xl:text-xl 4xl:mt-6 4xl:text-3xl">
                      {detail.value}
                    </p>
                    <Icon
                      icon="prime:arrow-up-right"
                      aria-hidden="true"
                      className="absolute w-5 h-5 transition-colors bottom-6 right-6 text-red group-hover:text-white"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
);

export default Contacts;

export async function getStaticProps({ locale }) {
  return {
    props: {
      translation:
        locale === "it" ? translationIT.contatti : translationIT.contatti,
    },
    revalidate: 60,
  };
}
