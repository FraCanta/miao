import React from "react";
import SectionLink from "../layout/SectionLink";
const SectionUno = () => {
  return (
    <section className="border-y border-main/15 bg-red py-16 md:py-20">
      <div className="mx-auto grid w-[90%] grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-12">
        <div className="lg:col-span-5">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
            Benvenut*
          </p>
          <h2 className="flex items-center gap-4 text-[clamp(2.5rem,11vw,5rem)] font-bold leading-[0.82]  text-white md:text-[7vw] lg:text-[clamp(3.25rem,4vw,3.5rem)]">
            <span
              className="flex self-stretch items-center text-[1.15em] leading-none text-white"
              aria-hidden="true"
            >
              &#123;
            </span>
            <span className="whitespace-nowrap leading-[0.82]">
              MIAO graphics
            </span>
          </h2>
        </div>

        <div className="flex max-w-[680px] flex-col lg:col-span-6 lg:col-start-7">
          <div className="flex flex-col gap-6 text-base leading-relaxed text-white md:text-lg">
            <p>
              Sono Elisa, Graphic Designer e Content Creator. <br />
              Aiuto startup, aziende e professionisti a costruire
              un&apos;immagine autentica, riconoscibile e coerente.
            </p>
            <p>
              Dalla strategia al design, creo soluzioni su misura che uniscono
              estetica, funzionalità e visione, con un confronto diretto in ogni
              fase del progetto.
            </p>
          </div>

          <SectionLink
            href="/chi-sono"
            title="Scopri chi sono"
            variant="underline"
            color="white"
            className="mt-8"
          >
            Scopri di più
          </SectionLink>
        </div>
      </div>
    </section>
  );
};

export default SectionUno;
