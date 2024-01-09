import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionDue = ({ translation }) => {
  return (
    <section className="w-[90%] min-h-[30vh] flex-col justify-center items-start mt-[100px] 2xl:mt-[150px] flex mx-auto">
      <div className="w-full justify-start items-end gap-[354px] inline-flex">
        <div className="justify-start items-center flex w-full">
          <Image
            className="object-cover w-full 2xl:w-[30vw] fxl:w-[20vw] 3xl:w-[20vw]"
            src={translation?.title}
            alt="welcome title"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="w-full flex-col 2xl:flex-row justify-start items-center gap-10 flex mt-10 2xl:mt-20">
        <Image
          className="object-cover w-full md:w-[50vw] "
          src={translation?.img}
          alt="welcome title"
          width={500}
          height={500}
        />
        <div className="2xl:w-1/2 h-full flex-col justify-start items-start gap-[31px] 4xl:gap-[70px] inline-flex">
          <div className="w-full h-full justify-start items-end flex">
            <h2 className="text-main font-bold capitalize text-[10vw] leading-none md:text-[8vw] lg:text-[6vw] 2xl:text-[4vw] 3xl:text-[3.6vw] ">
              <span>{translation?.titoloP}</span>

              <span className="text-red text-[40px] md:text-6xl  font-extrabold">
                .
              </span>
            </h2>
          </div>
          <p className="text-second text-[5vw] md:text-[2.6vw] 2xl:text-[1.3vw]">
            {translation?.descrizione}
          </p>
          <p className="text-second text-[5vw] md:text-[2.6vw] 2xl:text-[1.3vw]">
            {translation?.descrizione2}
          </p>
          <p
            className="text-second text-[5vw] md:text-[2.6vw] 2xl:text-[1.3vw]"
            dangerouslySetInnerHTML={{ __html: translation?.descrizione3 }}
          ></p>
          <div className="w-full 2xl:justify-end items-center inline-flex">
            <Link
              href="/servizi"
              title="scegli il servizio più adatto alle tue esigenze"
              className="text-main text-2xl fxl:text-3xl 3xl:text-4xl 4xl:text-[5rem] font-extrabold underline capitalize leading-normal "
            >
              {translation?.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDue;
