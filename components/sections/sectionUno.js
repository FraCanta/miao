import Image from "next/image";
import Link from "next/link";
import React from "react";
import SezioneUno from "@/public/sectionsTitle/sezioneUno.png";

const SectionUno = ({ translation }) => {
  return (
    <div className="w-[90%] mx-auto min-h-[40vh] mt-[150px]">
      <div className="w-full h-full  flex-col justify-start items-start gap-[30px] inline-flex mx-auto">
        <Image
          className="object-cover w-[250px] 2xl:w-[300px] fxl:w-[350px] 3xl:w-[400px]"
          src={translation?.title}
          alt="welcome title"
          width={300}
          height={300}
          priority
        />
        <div className="w-full h-full justify-between flex-col 2xl:flex-row items-center gap-8 md:gap-24 inline-flex">
          <div className="2xl:w-full h-full flex-col 2xl:flex-row justify-start items-center  inline-flex gap-10">
            {translation?.paragrafi?.map((p, i) => {
              return (
                <p
                  key={i}
                  className="text-second text-[1.125rem] fxl:text-[1.4rem] 3xl:text-[1.8rem] font-normal leading-normal"
                >
                  {p}
                </p>
              );
            })}
          </div>
        </div>
        <div className="w-full h-full justify-start items-center inline-flex mt-6">
          <Link
            href="/me"
            className="text-main text-2xl fxl:text-3xl 3xl:text-4xl font-extrabold underline capitalize leading-normal"
          >
            {translation?.cta}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionUno;
