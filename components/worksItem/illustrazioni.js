import Image from "next/image";
import React from "react";

const Illustrazioni = ({ translation }) => {
  return (
    <div>
      <h3 className="text-[6vw] md:text-[3.5vw] font-bold mb-2 text-main">
        {translation?.titolo}
      </h3>
      <p className="text-[4.5vw] md:text-[1.3vw] text-second">
        {translation?.descrizione}
      </p>
      <div className="relative h-[20vh] md:h-[50vh]">
        <Image
          src={translation?.illImg}
          fill
          className="object-contain object-center h-full"
          alt=""
        ></Image>
      </div>
      <p className="text-[4.5vw] md:text-[1.3vw] text-second">
        {translation?.descrizione2}
      </p>
    </div>
  );
};

export default Illustrazioni;
