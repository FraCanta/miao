import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionMeTre = ({ translation }) => {
  return (
    <section className="w-[90%] min-h-[40vh] justify-between items-center  flex flex-col  mx-auto mt-[150px]">
      <div className="w-full flex-col xl:flex-row justify-start items-center gap-[50px] flex ">
        <Image
          className="object-cover w-full xl:w-[35vw] 2xl:w-[600px] fxl:w-[750px] 3xl:w-[900px]"
          src={translation?.img}
          alt="welcome title"
          width={500}
          height={500}
          priority
        />
        <div className="2xl:w-1/2 h-full flex-col justify-start items-start gap-[31px] inline-flex">
          <Image
            className="object-cover w-[90vw] xl:w-[35vw] 2xl:w-[30vw] fxl:w-[35vw] 3xl:w-[45vw]"
            src={translation?.title}
            alt="welcome title"
            width={500}
            height={500}
            priority
          />
          <div className="w-full  text-second text-xl 3xl:text-3xl font-normal leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </div>
          <div className="w-full  text-second text-xl 3xl:text-3xl font-normal leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
          <Link
            href=""
            className="w-full  justify-end items-center inline-flex"
          >
            <span className="text-main text-xl 3xl:text-3xl font-extrabold underline capitalize leading-tight">
              Coming Soon.
            </span>
            <span className="text-red text-xl 3xl:text-3xl font-extrabold underline capitalize leading-tight">
              .
            </span>
            <span className="text-main text-xl 3xl:text-3xl font-extrabold underline capitalize leading-tight">
              .
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionMeTre;
