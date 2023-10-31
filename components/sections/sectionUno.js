import Image from "next/image";
import Link from "next/link";
import React from "react";
import SezioneUno from "@/public/sectionsTitle/sezioneUno.png";

const SectionUno = ({ translation }) => {
  return (
    <section className="w-[90%] mx-auto min-h-[40vh] mt-[150px]">
      <div className="w-full h-full  flex-col justify-start items-start gap-[30px] 4xl:gap-[70px] inline-flex mx-auto">
        <Image
          className="object-cover w-[60vw] xl:w-[20vw] fxl:w-[20vw] 3xl:w-[20vw]"
          src={translation?.title}
          alt="welcome title"
          width={300}
          height={300}
          priority
        />
        <div className="w-full h-full justify-between flex-col xl:flex-row  flex gap-6 4xl:gap-[15rem]">
          <div
            className="xl:w-full h-full flex-col  justify-between  flex gap-4"
            style={{ flex: 1 }}
          >
            {translation?.paragrafi?.map((p, i) => {
              return (
                <div
                  key={i}
                  className="text-second text-[5vw] md:text-[2.6vw] xl:text-[2vw] 2xl:text-[1.3vw] h-full "
                  dangerouslySetInnerHTML={{ __html: p }}
                  style={{ flex: 1 }}
                ></div>
              );
            })}
          </div>
          <div
            className="xl:w-full h-full flex-col  justify-between  flex gap-4"
            style={{ flex: 1 }}
          >
            {translation?.paragrafi2?.map((p, i) => {
              return (
                <div
                  key={i}
                  className="text-second text-[5vw] md:text-[2.6vw] xl:text-[2vw] 2xl:text-[1.3vw] h-full "
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
            title="conosci la mia storia e ciò che posso fare per te"
            className="text-main text-2xl fxl:text-3xl   3xl:text-4xl 4xl:text-[5rem] font-extrabold underline capitalize  w-full 2xl:text-right text-left"
          >
            {translation?.cta}{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionUno;
