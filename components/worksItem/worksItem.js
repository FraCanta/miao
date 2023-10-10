import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorksItem = ({ img, name, link, descrizione, button, location }) => {
  return (
    <>
      <div className="h-[100vw] xl:h-[40vw]   w-full relative before:content-{} before: inline  before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-main/90 before:opacity-20">
        <Link href={link}>
          <Image
            src={img}
            alt={name}
            priority
            fill
            className="min-h-full h-full object-cover w-full object-center"
          />
          <div className="absolute bottom-0 left-0 p-6 flex w-full z-10 text-white">
            <div className="grid grid-col-1 md:grid-cols-2 w-full h-full">
              <div className="flex flex-col h-full justify-between gap-6">
                <div>
                  <h1 className=" text-white text-[10vw] md:text-[5vw] lg:text-[2.5vw] leading-none">
                    {name}
                  </h1>
                  <p className="text-white mt-[0.15rem] text-[12px] tracking-[0.15rem] ">
                    {descrizione}
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  <Icon
                    icon="majesticons:map-marker"
                    color="white"
                    className="text-[12px]"
                  />
                  <p className="text-[8px] md:text-[10px] uppercase font-bold tracking-[0.15rem]">
                    {location}
                  </p>
                </div>
              </div>
              <div className="text-white hidden  md:flex  gap-1 w-full justify-end items-end uppercase text-[0.8vw] md:text-[1.5vw] lg:text-[0.8vw]">
                {button.map((el, i) => {
                  return (
                    <p
                      key={i}
                      className="py-1 px-2  border border-1 border-white rounded-[2px] text-center backdrop-blur w-[33%]"
                    >
                      {el}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default WorksItem;
