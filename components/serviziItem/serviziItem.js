import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiziItem = ({ img, name, descrizione, link }) => {
  return (
    <>
      <div className="w-full justify-start items-start gap-2.5 flex ">
        <Link href={link}>
          <div className="w-full 2xl:p-4 ">
            <Image
              className="object-cover w-auto h-auto"
              src={img}
              width={300}
              height={300}
              alt="name"
            />
          </div>
          <div className="h-auto justify-start items-start gap-2.5 flex flex-col 2xl:p-4">
            <div className="w-full justify-start items-start gap-2.5 flex">
              <h6 className="text-main text-[5vw] xl:text-[2vw] 2xl:text-[1.6vw] font-extrabold  leading-[27.12px]">
                {name}
              </h6>
            </div>
            <div className="w-full text-second text-[4vw] xl:text-[1.3vw] 2xl:text-[1vw] 3xl:text-[1.5rem] font-normal leading-tight">
              <p>{descrizione}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ServiziItem;
