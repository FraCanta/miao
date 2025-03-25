import Head from "next/head";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";

function faqDomandeFrequenti() {
  return (
    <>
      <Head>
        <title>
          FAQS - Domande Frequenti | Miao graphics creative designer{" "}
        </title>
        <meta
          rel="description"
          content="Sei nel posto dove nessuna domanda è sbagliata o stupida"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="relative flex flex-col items-center justify-center  min-h-[calc(30vh_-_70px)] md:min-h-[calc(50vh_-_70px)] fxl:min-h-[calc(40vh_-_100px)]">
        <div className="w-[90%] mx-auto text-center">
          <h1 className="pb-2 text-4xl lg:text-7xl text-pink">
            FAQs - <br /> Domande frequenti
          </h1>
          <p className="text-base uppercase lg:text-xl font-flamenco text-pink fxl:text-2xl">
            Sei nel posto dove nessuna domanda è sbagliata o stupida ☺️
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto h-[0.03rem] bg-pink/30"></div>
      <div className="w-[90%] mx-auto my-10 lg:my-20 text-pink">
        <AccordionCustomIcon />
      </div>
      <div className="w-[90%] mx-auto text-center flex flex-col gap-6 justify-center items-center mb-10">
        <h2 className="text-3xl lg:text-4xl text-pink">Hai altre domande?</h2>
        <Link
          href="/contatti"
          title="contattami per una consulenza e parliamo insieme del tuo progetto"
          className="capitalize font-bold py-2.5 px-6 text-[22px]  border rounded shadow  text-white hover:transition-all border-red  bg-red"
        >
          Scrivimi
        </Link>
      </div>
    </>
  );
}

export default faqDomandeFrequenti;

export function AccordionCustomIcon() {
  const questions = [
    {
      title: "Quanto costa realizzare un logo personalizzato?",
      description:
        "Il range varia dai 350 ai 600 in base alla tipologia di logo richiesto.",
    },
    {
      title:
        "Oltre al logo è possibile richiedere una strategia di branding a 360°?",
      description:
        "Sì: <a class='px-2 font-bold underline text-red' href='/servizi/branding'>&quot;Branding strategy&quot;</a>",
    },
    {
      title: "Quanto tempo ci vuole per ottenere il mio nuovo logo?",
      description:
        "Dall’accettazione del preventivo circa una settimana lavorativa.",
    },
    {
      title: "Effettuate anche un Restyling di loghi esistenti?",
      description: [" Sì."],
    },
    {
      title: "Realizzate anche siti professionali?",
      description:
        " Sì ci affidiamo alla professionalità di <a class='px-2 font-bold underline text-red' href='https://www.thallion-dev.it/servizi/tailored'>&quot;Thallion dev&quot;</a>",
    },
    {
      title: "É possibile richiedere una consulenza gratuita?",
      description:
        "Sì prima dell’accettazione del preventivo. <a class='px-2 font-bold underline text-red' href='/contatti'>Contatti</a>",
    },
    {
      title: " Vi occupate anche di gestione dei canali social?",
      description:
        "Sì gestiamo per voi i canali meta ideando una strategia personalizzata.",
    },
    {
      title: "Vi occupate anche della stampa?",
      description: "No ci affidiamo a tipografie competenti.",
    },
    {
      title: "Fornite assistenza anche a lavoro ultimato?",
      description:
        "Sì siamo sempre reperibili in orario lavorativo dalle 9 alle 18.",
    },
    {
      title: "Vi occupate anche di label e packaging?",
      description:
        "Sì <a class='px-2 font-bold underline text-red' href='/servizi/label'>&quot;Label & Packaging&quot;</a>",
    },
    {
      title: "Offrite servizi fotografici ad hoc in azienda?",
      description: " Sì serviamo la Valle d’Aosta e Milano est.",
    },
    {
      title: "Realizzate anche brochure e opuscoli?",
      description: " Sì.",
    },
    {
      title: "Create anche coordinati per matrimoni ed eventi?",
      description: " Sì.",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:gap-20 md:grid-cols-2 w-[90%] mx-auto my-10">
      {questions.map((question, index) => (
        <div key={index}>
          <h3 className="py-4 text-2xl font-semibold lg:text-3xl text-main">
            {question.title}
          </h3>
          <div className="w-full h-[0.05rem] bg-main"></div>
          <p
            className="my-4 text-lg text-main"
            dangerouslySetInnerHTML={{
              __html: question.description,
            }}
          ></p>
        </div>
      ))}
    </div>
  );
}
