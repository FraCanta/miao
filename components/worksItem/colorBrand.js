import Image from "next/image";
import React from "react";

function ColorBrand({ translation }) {
  return (
    <div>
      <h3 className="text-[6vw] md:text-[3.5vw] mb-2 text-main font-bold">
        <span>{translation?.titolo}</span>
        <span className="text-red">.</span>
      </h3>
      {translation?.descrizione?.map((d, i) => {
        return (
          <div
            key={i}
            className="text-[4.5vw] md:text-[3vw] lg:text-[1.3vw] text-second "
          >
            <p className="py-2">{d}</p>
          </div>
        );
      })}

      <div className="relative h-[20vh] lg:h-[50vh]">
        <Image
          src={translation?.colorImg}
          fill
          className="object-contain object-center h-full"
          alt=""
        ></Image>
      </div>
      {translation?.colorImg2 ? (
        <div className="relative h-[20vh] lg:h-[50vh]">
          <Image
            src={translation?.colorImg2}
            fill
            className="object-contain object-center h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}

      {translation?.sponsorImg ? (
        <div className="relative h-[20vh] md:h-[30vh] lg:h-[100vh]">
          <Image
            src={translation?.sponsorImg}
            fill
            className="object-contain object-center h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ColorBrand;
