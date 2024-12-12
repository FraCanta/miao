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

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Quanto costa realizzare un logo personalizzato?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Il range varia dai 350 ai 600 in base alla tipologia di logo
          richiesto.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Oltre al logo è possibile richiedere una strategia di branding a 360°?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Sì:
          <Link
            className="text-red font-bold px-2 underline"
            href="/servizi/branding"
          >
            &quot;Branding strategy&quot;
          </Link>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Quanto tempo ci vuole per ottenere il mio nuovo logo?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Dall’accettazione del preventivo circa una settimana lavorativa.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Effettuate anche un Restyling di loghi esistenti?
        </AccordionHeader>
        <AccordionBody className="!text-lg">Sì.</AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Realizzate anche siti professionali?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Sì ci affidiamo alla professionalità di
          <Link
            className="text-red font-bold px-2 underline"
            href="https://www.thallion-dev.it/servizi/tailored"
          >
            &quot;Thallion dev&quot;
          </Link>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className="text-xl lg:!text-2xl font-bold"
        >
          É possibile richiedere una consulenza gratuita?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Sì prima dell’accettazione del preventivo.
          <Link className="text-red font-bold px-2 underline" href="/contatti">
            &quot;Contatti&quot;
          </Link>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Vi occupate anche di gestione dei canali social?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Sì gestiamo per voi i canali meta ideando una strategia
          personalizzata.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(8)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Vi occupate anche della stampa?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          No ci affidiamo a tipografie competenti.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(9)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Fornite assistenza anche a lavoro ultimato?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Sì siamo sempre reperibili in orario lavorativo dalle 9 alle 18.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 10} icon={<Icon id={10} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(10)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Vi occupate anche di label e packaging?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Sì{" "}
          <Link
            className="text-red font-bold px-2 underline"
            href="/servizi/label"
          >
            &quot;Label & Packaging&quot;
          </Link>{" "}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 11} icon={<Icon id={11} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(11)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Offrite servizi fotografici ad hoc in azienda?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">
          Sì serviamo la Valle d’Aosta e Milano est.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 12} icon={<Icon id={12} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(12)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Realizzate anche brochure e opuscoli?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">Sì.</AccordionBody>
      </Accordion>
      <Accordion open={open === 13} icon={<Icon id={13} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(13)}
          className="text-xl lg:!text-2xl font-bold"
        >
          Create anche coordinati per matrimoni ed eventi?
        </AccordionHeader>
        <AccordionBody className="!text-lg !fxl:text-2xl">Sì.</AccordionBody>
      </Accordion>
    </>
  );
}
