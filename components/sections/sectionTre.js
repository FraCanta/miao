import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionTre = ({ translation }) => {
  return (
    <div className="w-[90%] min-h-[40vh] flex-col justify-center items-start mt-[80px] 2xl:mt-[150px] flex mx-auto">
      <div className="w-full justify-start items-end  inline-flex">
        <Image
          className="object-cover w-[200px] 2xl:w-[300px] fxl:w-[350px] 3xl:w-[400px] "
          src={translation?.title}
          alt=""
          priority
          width={300}
          height={300}
        />
      </div>
      <div className="w-full flex-col justify-start items-start mt-[50px] flex">
        <Image
          className="object-cover w-full h-[350px]"
          src={translation?.img}
          alt=""
          width={1200}
          height={1200}
          priority
        />
        <div className="w-full flex-col justify-start items-start mt-[50px] flex">
          <div className=" flex-col justify-start items-start gap-10 lg:gap-[50px] flex">
            <div className="w-full flex flex-col 2xl:flex-row justify-between items-stretch gap-6 lg:gap-4">
              <div className="w-full 2xl:w-[33%] flex flex-col justify-start items-start">
                <h3>
                  <span className="text-main text-[40px] fxl:text-6xl font-extrabold capitalize leading-normal">
                    {translation?.titoloP}
                  </span>
                  <span className="text-red text-[40px] fxl:text-6xl font-extrabold capitalize ">
                    .
                  </span>
                </h3>
              </div>
              <div className="w-full 2xl:w-[33%] flex flex-col justify-start items-stretch">
                <div className="text-second text-[1.125rem] fxl:text-[1.4rem] 3xl:text-[1.8rem] font-normal leading-normal">
                  <p> {translation?.paragrafo1}</p>
                </div>
              </div>
              <div className="w-full 2xl:w-[33%] flex flex-col justify-start items-stretch gap-2.5">
                <div className="text-second text-[1.125rem] fxl:text-[1.4rem] 3xl:text-[1.8rem] font-normal leading-normal">
                  <p> {translation?.paragrafo2}</p>
                </div>
                <div className="w-full 2xl:justify-end items-center inline-flex mt-10">
                  <Link
                    href="/servizi"
                    className="text-main text-2xl fxl:text-3xl 3xl:text-4xl font-extrabold underline capitalize leading-normal "
                  >
                    {translation?.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTre;
