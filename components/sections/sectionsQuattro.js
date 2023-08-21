import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionsQuattro = ({ translation }) => {
  return (
    <div className="w-[90%] min-h-[40vh] flex-col justify-center items-start mt-[150px] 2xl:mt-[250px] flex mx-auto">
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

      <div className="w-full  flex-col justify-start items-start mt-[50px] flex">
        <div className="w-full justify-between items-start gap-16 flex flex-col 2xl:flex-row">
          <div className="2xl:w-[33%] flex-col justify-start items-start gap-4 flex">
            <Image
              className="w-full h-[240px] md:h-[350px] lg:h-[200px] 3xl:h-[380px] object-cover"
              src={translation?.img}
              width={300}
              height={300}
              alt=""
            />
            <h4>
              <span className="text-main text-[25px] 3xl:text-[40px] font-extrabold capitalize leading-normal">
                Titolo Uno
              </span>
              <span className="text-red text-[25px] 3xl:text-[40px] font-extrabold capitalize">
                .
              </span>
            </h4>
            <p className="w-full text-second text-base 3xl:text-[26px] font-normal leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="2xl:w-[33%] flex-col justify-start items-start gap-4 inline-flex">
            <Image
              className="w-full h-[240px] md:h-[350px] lg:h-[200px] 3xl:h-[380px] object-cover"
              src={translation?.img}
              width={300}
              height={300}
              alt=""
            />
            <h4>
              <span className="text-main text-[25px] 3xl:text-[40px] font-extrabold capitalize leading-normal">
                Titolo Due
              </span>
              <span className="text-red text-[25px] 3xl:text-[40px] font-extrabold capitalize ">
                .
              </span>
            </h4>
            <p className="text-second text-base 3xl:text-[26px] font-normal leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="2xl:w-[33%] flex-col justify-start items-start gap-4 inline-flex">
            <Image
              className="w-full h-[240px] md:h-[350px] lg:h-[200px] 3xl:h-[380px] object-cover"
              src={translation?.img}
              width={300}
              height={300}
              alt=""
            />
            <h4>
              <span className="text-main text-[25px] 3xl:text-[40px] font-extrabold capitalize leading-normal">
                Titolo Tre
              </span>
              <span className="text-red text-[25px] 3xl:text-[40px] font-extrabold capitalize">
                .
              </span>
            </h4>
            <p className=" text-second text-base 3xl:text-[26px] font-normal leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="w-full justify-start items-center flex mt-10">
          <Link
            href="/blog"
            className="text-main text-2xl fxl:text-3xl 3xl:text-4xl font-extrabold underline capitalize leading-normal "
          >
            Altre Notizie
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionsQuattro;
