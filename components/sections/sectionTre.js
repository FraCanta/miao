import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionTre = ({ translation }) => {
  return (
    <div className="w-[90%] min-h-[40vh] flex-col justify-center items-start mt-[150px] 2xl:mt-[250px] flex mx-auto">
      <div className="w-full justify-start items-end  inline-flex">
        <Image
          className="object-cover w-[250px] 2xl:w-[300px] fxl:w-[350px] 3xl:w-[400px] "
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
            <div className="w-full flex flex-col lg:flex-row justify-between items-stretch gap-6 lg:gap-12">
              <div className="w-full lg:w-[33%] flex flex-col justify-start items-start">
                <h3 className="text-pink text-4xl lg:text-[40px] fxl:text-[45px] fxl:leading-[50px] 3xl:text-[55px] 3xl:leading-[60px] font-extrabold capitalize leading-[45px]">
                  <span className="text-main text-[40px] font-extrabold capitalize leading-normal">
                    {translation?.titoloP}
                  </span>
                  <span className="text-red text-[40px] font-extrabold capitalize ">
                    .
                  </span>
                </h3>
              </div>
              <div className="w-full lg:w-[33%] flex flex-col justify-start items-stretch">
                <div className="w-full text-second text-[1.125rem] font-normal leading-normal">
                  <p> {translation?.paragrafo1}</p>
                </div>
              </div>
              <div className="w-full lg:w-[33%] flex flex-col justify-start items-stretch gap-2.5">
                <div className="w-full text-second text-[1.125rem] font-normal leading-normal">
                  <p> {translation?.paragrafo2}</p>
                </div>
                <div className="w-full 2xl:justify-end items-center inline-flex mt-10">
                  <Link
                    href="/servizi"
                    className="text-main text-2xl font-extrabold underline capitalize "
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
