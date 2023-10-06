import Image from "next/image";
import React from "react";

const Label = ({ translation }) => {
  return (
    <div>
      <h3 className="text-[6vw] md:text-[3.5vw] font-bold mb-4 text-main">
        {translation?.titolo}
      </h3>
      {/* <p className="text-[4.5vw] md:text-[1.3vw] text-second">
        {translation?.descrizione}
      </p> */}
      <div className="relative h-[30vh] md:h-[100vh]">
        <Image
          src={translation?.labelImg}
          fill
          className="object-cover  h-full"
          alt=""
        ></Image>
      </div>
      {/* <p className="text-[4.5vw] md:text-[1.3vw] text-second">
        {translation?.descrizione2}
      </p> */}
      <div className="relative h-[30vh] md:h-[100vh]">
        <Image
          src={translation?.biscottiImg}
          fill
          className="object-cover  h-full"
          alt=""
        ></Image>
      </div>
      <div className="relative h-[30vh] md:h-[100vh]">
        <Image
          src={translation?.caramelleImg}
          fill
          className="object-cover  h-full"
          alt=""
        ></Image>
      </div>
      <div className="relative h-[30vh] md:h-[100vh]">
        <Image
          src={translation?.cartellinoImg}
          fill
          className="object-cover  h-full"
          alt=""
        ></Image>
      </div>
      <div className="relative h-[30vh] md:h-[100vh]">
        <Image
          src={translation?.scatoleImg}
          fill
          className="object-cover  h-full"
          alt=""
        ></Image>
      </div>
      <div className="relative h-[30vh] md:h-[100vh]">
        <Image
          src={translation?.cremaImg}
          fill
          className="object-cover  h-full"
          alt=""
        ></Image>
      </div>
      <div className="relative h-[30vh] md:h-[100vh]">
        <Image
          src={translation?.etichettasImg}
          fill
          className="object-cover  h-full"
          alt=""
        ></Image>
      </div>
    </div>
  );
};

export default Label;
