import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionDue = ({ translation }) => {
  return (
    <div className="w-[90%] min-h-[30vh] flex-col justify-center items-start mt-[150px] 2xl:mt-[250px] flex mx-auto">
      <div className="w-full justify-start items-end gap-[354px] inline-flex">
        <div className="justify-start items-center flex w-full">
          <Image
            className="object-cover w-[250px] 2xl:w-[300px] fxl:w-[350px] 3xl:w-[400px]"
            src={translation?.title}
            alt="welcome title"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
      <div className="w-full flex-col 2xl:flex-row justify-start items-center gap-10 flex mt-10 2xl:mt-20">
        <Image
          className="object-cover w-full 2xl:w-[600px] fxl:w-[350px] 3xl:w-[400px]"
          src={translation?.img}
          alt="welcome title"
          width={500}
          height={500}
          priority
        />
        <div className="2xl:w-1/2 h-full flex-col justify-start items-start gap-[31px] inline-flex">
          <div className="w-full h-full justify-start items-end flex">
            <div>
              <h3 className="text-main text-[40px] font-extrabold capitalize leading-normal">
                <span>{translation?.titoloP}</span>

                <span className="text-red text-[40px] font-extrabold capitalize ">
                  .
                </span>
              </h3>
            </div>
          </div>
          <p className="w-full text-second text-[1.125rem] font-normal leading-normal">
            {translation?.descrizione}
          </p>
          <div className="w-full 2xl:justify-end items-center inline-flex">
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
  );
};

export default SectionDue;