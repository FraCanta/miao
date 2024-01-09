import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionMeTre = ({ translation }) => {
  return (
    <section className="w-[90%] min-h-[40vh] justify-between items-center  flex flex-col  mx-auto mt-[150px]">
      <div className="w-full flex-col xl:flex-row justify-start items-center gap-[50px] flex ">
        <Image
          className="object-cover w-full xl:w-[35vw] 2xl:w-[600px] fxl:w-[750px] 3xl:w-[900px] 4xl:w-[40vw]"
          src={translation?.img}
          alt="welcome title"
          width={500}
          height={500}
        />
        <div className="2xl:w-1/2 h-full flex-col justify-start items-start gap-[31px] inline-flex">
          <Image
            className="object-cover w-[90vw] xl:w-[35vw] 2xl:w-[30vw] fxl:w-[35vw] 3xl:w-[45vw]"
            src={translation?.title}
            alt="welcome title"
            width={500}
            height={500}
          />
          <div className="w-full flex-col justify-between  flex  h-full gap-6 3xl:gap-14">
            {translation?.paragrafi?.map((p, i) => {
              return (
                <p
                  key={i}
                  className="w-full text-second text-[5vw] md:text-[2.6vw] xl:text-[1.55vw] 2xl:text-[1.3vw]"
                  dangerouslySetInnerHTML={{ __html: p }}
                ></p>
              );
            })}
          </div>

          <Link
            href="https://www.mithacreative.it/"
            title="mitha creative website"
            target="_blank"
            className="text-main text-2xl fxl:text-3xl 3xl:text-4xl 4xl:text-[5rem] font-extrabold underline capitalize leading-normal w-full  justify-end items-center inline-flex"
          >
            {translation?.cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionMeTre;
