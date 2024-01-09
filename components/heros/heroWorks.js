import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const HeroWorks = ({ img, name, descrizione, location, button }) => {
  return (
    <div className="w-[90%] mx-auto h-full flex flex-col lg:flex-row 2xl:items-center  gap-2  before:content-{} before: inline  before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-main/90 before:opacity-20">
      <Image
        src={img}
        alt={name}
        fill
        className="min-h-full h-full object-cover w-full "
      />
      <div className="absolute bottom-4 md:bottom-10 md:left-1/2  flex w-[90%] md:-translate-x-1/2  z-10 text-white">
        <div className="grid grid-col-1 md:grid-cols-2 w-full h-full">
          <div className="flex flex-col h-full justify-between md:gap-6">
            <div className="gap-1 flex flex-col">
              <h1 className=" text-white text-[10vw] xl:text-[5vw] leading-none">
                {name}
              </h1>
              <p className="text-white md:mt-[0.15rem] text-[11px] xl:text-[1.5vw] tracking-[0.15rem] ">
                {descrizione}
              </p>
            </div>

            <div className="flex items-center gap-1">
              <Icon
                icon="majesticons:map-marker"
                color="white"
                className="text-[12px]"
              />
              <p className="text-[8px] py-4 md:text-[10px] uppercase font-bold tracking-[0.15rem]">
                {location}
              </p>
            </div>
          </div>
          <div className="text-white hidden  md:flex  gap-1 w-full md:justify-end items-end uppercase text-[2.5vw] md:text-[1.5vw] lg:text-[0.8vw]">
            {button.map((el, i) => {
              return (
                <p
                  key={i}
                  className="py-1 md:py-2 px-4  border border-1 border-white rounded-[2px] text-center backdrop-blur w-[33%]"
                >
                  {el}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWorks;
