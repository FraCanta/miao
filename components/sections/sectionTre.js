import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionTre = ({ translation }) => {
  return (
    <section className="w-[90%] min-h-[40vh] flex-col justify-center items-start mt-[100px] 2xl:mt-[150px] flex mx-auto">
      <div className="w-full justify-start items-end  inline-flex">
        <Image
          className="object-cover w-[60vw] 2xl:w-[20vw] fxl:w-[20vw] 3xl:w-[20vw]"
          src={translation?.title}
          alt=""
          priority
          width={300}
          height={300}
        />
      </div>
      <div className="w-full flex-col justify-start items-start mt-[50px] flex">
        <Image
          className="object-cover w-full h-[40vh]"
          src={translation?.img}
          alt=""
          width={1200}
          height={1200}
          priority
        />
        <div className="w-full flex-col justify-start items-start mt-[50px] flex">
          <div className=" flex-col justify-start items-start gap-10 lg:gap-[50px] flex">
            <div className="w-full flex flex-col 2xl:flex-row justify-between items-stretch gap-6 lg:gap-4">
              <div className="2xl:w-[50%] flex flex-col justify-start items-start port_p">
                <h3 className="text-main font-bold capitalize text-[10vw] leading-none md:text-[8vw] lg:text-[6vw] 2xl:text-[4vw] 3xl:text-[3.6vw] ">
                  <span>{translation?.titoloP}</span>
                  <span>.</span>
                </h3>
              </div>
              <div className="w-full 2xl:w-[50%] flex flex-col justify-start items-stretch">
                <p className="text-second text-[5vw] md:text-[2.6vw] 2xl:text-[1.3vw]">
                  {" "}
                  {translation?.paragrafo1}
                </p>
                <div className="w-full 2xl:justify-end items-center inline-flex mt-10">
                  <Link
                    href="/portfolio"
                    className="text-main text-2xl fxl:text-3xl 3xl:text-4xl 4xl:text-[5rem] font-extrabold underline capitalize leading-normal "
                  >
                    {translation?.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTre;
