import Image from "next/image";
import React from "react";
import Tigre from "../../public/assets/pageImg/tigre.optimized.webp";
import ButtonLink from "../layout/ButtonLink";

const HeroHome = () => {
  return (
    <section className="overflow-hidden ">
      <div className="mx-auto grid w-[90%] grid-cols-1 items-center gap-10 py-10 lg:min-h-[calc(100svh-108px)] lg:grid-cols-2 lg:gap-6 lg:py-0 2xl:min-h-[calc(100svh-138px)]">
        <div className="z-10 flex flex-col w-full ">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-red md:text-sm">
            Soluzioni creative
          </p>

          <h1 className=" text-[2.5rem] font-extrabold leading-none  text-main md:text-[4.6rem] lg:text-[4rem] fxl:text-[6rem]">
            Diamo
            <span className="text-red"> forma</span> a ciò che rende{" "}
            <span className="text-red"> unico</span> il tuo{" "}
            <span className="text-red"> brand</span>.
          </h1>

          <p className="mt-7 max-w-[700px] text-base   text-second md:text-lg  2xl:text-[1.20rem]">
            Aiuto aziende, professionisti e startup a costruire un&apos;identità
            visiva forte attraverso branding, graphic design e strategie di
            comunicazione efficaci.
          </p>

          <div className="flex flex-col w-full gap-3 mt-9 sm:w-auto sm:flex-row">
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

        <div className="relative aspect-[4/5] h-full w-full sm:aspect-[5/4] lg:h-[clamp(420px,calc(100svh-108px),650px)] lg:min-h-0 lg:aspect-auto 2xl:h-[clamp(420px,calc(100svh-138px),650px)] fxl:h-[calc(100svh-138px)]">
          <div className="relative h-full w-full lg:mt-6 lg:h-[calc(100%-1.5rem)] fxl:mt-0 fxl:h-full">
            <Image
              className="z-10 object-contain"
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
