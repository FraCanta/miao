import Image from "next/image";
import React from "react";

const Label = ({ translation }) => {
  return (
    <div>
      <h3 className="text-[6vw] md:text-[3.5vw] font-bold mb-4 text-main">
        {translation?.titolo}
      </h3>
      <div className="relative h-[30vh] md:h-[100vh]">
        <Image
          src={translation?.labelImg}
          fill
          className="object-contain  h-full"
          alt=""
        ></Image>
      </div>
      {translation?.biscottiImg ? (
        <div className="relative h-[30vh] md:h-[100vh]">
          <Image
            src={translation?.biscottiImg}
            fill
            className="object-contain  h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}

      {translation?.caramelleImg ? (
        <div className="relative h-[30vh] md:h-[100vh]">
          <Image
            src={translation?.caramelleImg}
            fill
            className="object-contain  h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}
      {translation?.cartellinoImg ? (
        <div className="relative h-[30vh] md:h-[100vh]">
          <Image
            src={translation?.cartellinoImg}
            fill
            className="object-contain  h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}

      {translation?.scatoleImg ? (
        <div className="relative h-[30vh] md:h-[100vh]">
          <Image
            src={translation?.scatoleImg}
            fill
            className="object-contain  h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}

      {translation?.cremaImg ? (
        <div className="relative h-[30vh] md:h-[100vh]">
          <Image
            src={translation?.cremaImg}
            fill
            className="object-cover  h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}
      {translation?.etichettasImg ? (
        <div className="relative h-[30vh] md:h-[100vh]">
          <Image
            src={translation?.etichettasImg}
            fill
            className="object-cover  h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Label;
