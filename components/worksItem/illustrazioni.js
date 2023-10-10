import Image from "next/image";
import React from "react";

const Illustrazioni = ({ translation }) => {
  return (
    <div>
      <h3 className="text-[6vw] md:text-[3.5vw] font-bold mb-2 text-main">
        <span>{translation?.titolo}</span>
        <span className="text-red">.</span>
      </h3>
      {translation?.descrizione ? (
        <p className="text-[4.5vw] md:text-[3vw] lg:text-[1.3vw] text-second">
          {translation?.descrizione}
        </p>
      ) : (
        ""
      )}

      <div className="relative h-[20vh] lg:h-[80vh] py-2">
        <Image
          src={translation?.illImg}
          fill
          className="object-contain  h-full"
          alt=""
        ></Image>
      </div>
      <p className="text-[4.5vw] md:text-[3vw] lg:text-[1.3vw] text-second">
        {translation?.descrizione2}
      </p>
      {translation?.illImg2 ? (
        <div className="relative h-[20vh] lg:h-[70vh] py-2">
          <Image
            src={translation?.illImg2}
            fill
            className="object-contain  h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Illustrazioni;
