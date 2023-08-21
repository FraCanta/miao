import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionMeUno = ({ translation }) => {
  return (
    <div className="w-[90%] min-h-[40vh] justify-between items-center mt-[150px] flex flex-col 2xl:flex-row mx-auto">
      <div className="flex-col justify-between items-center flex 2xl:w-1/2 h-full gap-10 3xl:gap-14">
        <p className="w-full h-full text-second text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-[46px] font-normal leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{" "}
        </p>
        <p className="w-full h-full text-second text-xl fxl:text-2xl 3xl:text-4xl 3xl:leading-[46px] font-normal leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <div className="w-full  justify-start items-center inline-flex">
          <Link
            href="/portfolio"
            className="text-main text-2xl fxl:text-3xl 3xl:text-4xl font-extrabold underline capitalize leading-normal "
          >
            Scopri come
          </Link>
        </div>
      </div>
      <Image
        className="2xl:w-[550px] 2xl:h-[550px] 3xl:w-[40%] 3xl:h-auto object-contain mt-6 2xl:mt-0"
        src={translation?.img}
        alt=""
        width={450}
        height={450}
      />
    </div>
  );
};

export default SectionMeUno;
