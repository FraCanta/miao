import Image from "next/image";
import React from "react";

const ServiziItem = ({ img, name, descrizione }) => {
  return (
    <>
      <div className="w-full justify-start items-start gap-2.5 flex  flex-col">
        <div className="w-full p-8">
          <Image
            className="object-cover w-auto h-auto"
            src={img}
            width={300}
            height={300}
            alt="name"
          />
        </div>
        <div className="h-auto justify-start items-start gap-2.5 flex flex-col p-4">
          <div className="w-full justify-start items-start gap-2.5 flex">
            <h6 className="text-main text-[25px] font-extrabold capitalize leading-[27.12px]">
              {name}
            </h6>
          </div>
          <div className="w-full text-second text-base font-normal leading-tight">
            {descrizione}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiziItem;
