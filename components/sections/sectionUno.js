import Image from "next/image";
import Link from "next/link";
import React from "react";
import SezioneUno from "@/public/sectionsTitle/sezioneUno.png";

const SectionUno = ({ translation }) => {
  return (
    <section className="w-[90%] mx-auto min-h-[40vh] mt-[150px]">
      <div className="w-full h-full  flex-col justify-start items-start gap-[30px] inline-flex mx-auto">
        <Image
          className="object-cover w-[60vw] 2xl:w-[20vw] fxl:w-[20vw] 3xl:w-[20vw]"
          src={translation?.title}
          alt="welcome title"
          width={300}
          height={300}
          priority
        />
        <div className="w-full h-full justify-between flex-col 2xl:flex-row items-center gap-8 md:gap-24 inline-flex">
          <div
            className="2xl:w-full h-full flex-col 2xl:flex-row justify-start  inline-flex gap-10"
            style={{ flex: 1 }}
          >
            {translation?.paragrafi?.map((p, i) => {
              return (
                <div
                  key={i}
                  className="text-second text-[5vw] md:text-[2.6vw] 2xl:text-[1.3vw]"
                  dangerouslySetInnerHTML={{ __html: p }}
                  style={{ flex: 1 }}
                ></div>
              );
            })}
          </div>
        </div>

        <div className="w-full h-full justify-start items-center inline-flex mt-6">
          <Link
            href="/me"
            className="text-main text-2xl fxl:text-3xl 3xl:text-4xl font-extrabold underline capitalize leading-normal w-full 2xl:text-right text-left"
          >
            {translation?.cta}{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionUno;
