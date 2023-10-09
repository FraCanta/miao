import Image from "next/image";
import React from "react";

const Social = ({ translation }) => {
  return (
    <div>
      <h3 className="text-[6vw] md:text-[3.5vw] mb-2 text-main font-bold">
        <span>{translation?.titolo}</span>
        <span className="text-red">.</span>
      </h3>
      <div className="text-[4.5vw] md:text-[1.3vw] text-second mb-6">
        {translation?.descrizione?.map((d, i) => {
          return (
            <p key={i} className="my-2">
              {d}
            </p>
          );
        })}
      </div>
      {translation?.socialImg?.map((el, i) => {
        return (
          <div className="relative h-[30vh] md:h-[100vh] " key={i}>
            <Image
              src={el}
              fill
              className="object-cover object-center h-full"
              alt=""
            ></Image>
          </div>
        );
      })}
    </div>
  );
};

export default Social;
