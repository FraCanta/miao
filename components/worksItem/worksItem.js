import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const WorksItem = ({ img, name, descrizione }) => {
  console.log(img);
  return (
    <>
      <div className="h-[100vw] xl:h-[40vw]  w-full relative before:content-{} before: inline  before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-main/90 before:opacity-20">
        <Image
          src={img}
          alt={name}
          priority
          fill
          className="min-h-full h-full object-cover w-full object-center"
        />
        <div className="absolute bottom-6 left-6 flex w-full z-10">
          <div className="flex flex-col h-full w-full">
            <h1 className=" text-white text-[10vw] md:text-[40px] leading-none">{name}</h1>
            <p className="text-white -mt-1 text-[12px]">{descrizione}</p>
            <div className="text-white w-full flex justify-between mt-4 items-end">
              <div className="flex items-center gap-1">
                <Icon icon="majesticons:map-marker" color="white" className="text-[12px]" />
                <address className="text-[10px]">ARNAD - VALLE D&apos;AOSTA</address>
              </div>
              <div className="flex gap-4 h-full pr-10 uppercase text-[10px]">
                <p className="py-1 px-4 border border-1 border-white rounded-[2px]">bottone uno</p>
                <p className="hidden md:block py-1 px-4 border border-1 border-white rounded-[2px]">bottone uno</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksItem;
