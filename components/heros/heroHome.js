import Image from "next/image";
import React from "react";
import Tigre from "../../public/assets/pageImg/tigre.optimized.webp";
import ButtonLink from "../layout/ButtonLink";

const HeroHome = () => {
  return (
    <section className="overflow-hidden ">
      <div className="mx-auto grid w-[90%] grid-cols-1 items-center gap-10 py-10 lg:h-[calc(100svh-var(--site-header-height))] lg:grid-cols-2 lg:gap-6 lg:py-0">
        <div className="z-10 flex flex-col w-full ">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-red md:text-sm 4xl:mb-10 4xl:text-2xl">
            Soluzioni creative
          </p>

          <h1 className="text-[2.5rem] font-extrabold leading-none text-main md:text-[4.6rem] lg:text-[4rem] fxl:text-[6rem] 4xl:text-[8rem]">
            Diamo
            <span className="text-red"> forma</span> a ciò che rende{" "}
            <span className="text-red"> unico</span> il tuo{" "}
            <span className="text-red"> brand</span>.
          </h1>

          <p className="mt-7 max-w-[700px] text-base text-second md:text-lg 2xl:text-[1.20rem] 4xl:mt-12 4xl:max-w-[1200px] 4xl:text-3xl 4xl:leading-relaxed">
            Aiuto aziende, professionisti e startup a costruire un&apos;identità
            visiva forte attraverso branding, graphic design e strategie di
            comunicazione efficaci.
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row 4xl:mt-14 4xl:gap-6">
            <ButtonLink
              href="/portfolio"
              className="w-full sm:w-auto"
              title="Guarda i lavori selezionati"
            >
              Guarda i lavori
            </ButtonLink>

            <ButtonLink
              href="/contatti"
              variant="outline"
              className="w-full sm:w-auto"
              title="Parliamo del tuo progetto"
            >
              Parliamo del progetto
            </ButtonLink>
          </div>
        </div>

        <div className="relative aspect-[4/5] h-full w-full self-end sm:aspect-[5/4] lg:h-full lg:min-h-0 lg:aspect-auto">
          <div className="relative h-full w-full lg:mt-6 lg:h-[calc(100%-1.5rem)] fxl:mt-0 fxl:h-full">
            <Image
              className="z-10 object-contain object-bottom"
              src={Tigre}
              alt="Collage MIAO graphics con figura umana e testa di tigre"
              fill
              sizes="(max-width: 1023px) 90vw, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
