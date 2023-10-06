import Image from "next/image";
import React from "react";

const Social = ({ translation }) => {
  return (
    <div>
      <h3 className="text-[6vw] md:text-[3.5vw] mb-2 text-main font-bold">
        {translation?.titolo}
      </h3>
      <p className="text-[4.5vw] md:text-[1.3vw] text-second">
        {translation?.descrizione}
      </p>
      <div className="relative h-[30vh] md:h-[100vh] my-6">
        <Image
          src={translation?.socialImg}
          fill
          className="object-cover object-center h-full"
          alt=""
        ></Image>
      </div>
    </div>
  );
};

export default Social;
