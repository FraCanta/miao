import Image from "next/image";
import React from "react";

const Label = ({ translation }) => {
  return (
    <div>
      {translation?.titolo && (
        <h3 className="text-[6vw] md:text-[3.5vw] font-bold mb-4 text-main">
          <span>{translation?.titolo}</span>
          <span className="ml-0 text-red">.</span>
        </h3>
      )}

      <div className="relative h-[28vh] lg:h-screen">
        <Image
          src={translation?.labelImg}
          fill
          className="object-contain w-full h-full"
          alt=""
        ></Image>
      </div>
      {translation?.biscottiImg ? (
        <div className="relative h-[28vh] lg:h-[100vh]">
          <Image
            src={translation?.biscottiImg}
            fill
            className="object-contain h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}

      {translation?.caramelleImg ? (
        <div className="relative h-[28vh] lg:h-[100vh]">
          <Image
            src={translation?.caramelleImg}
            fill
            className="object-contain h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}
      {translation?.cartellinoImg ? (
        <div className="relative h-[28vh] lg:h-[100vh] w-full">
          <Image
            src={translation?.cartellinoImg}
            fill
            className="object-contain w-full h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}

      {translation?.scatoleImg ? (
        <div className="relative h-[28vh] lg:h-[100vh]">
          <Image
            src={translation?.scatoleImg}
            fill
            className="object-contain h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}

      {translation?.cremaImg ? (
        <div className="relative h-[28vh] md:h-[100vh]">
          <Image
            src={translation?.cremaImg}
            fill
            className="object-contain h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}
      {translation?.etichettasImg ? (
        <div className="relative h-[28vh] md:h-[100vh]">
          <Image
            src={translation?.etichettasImg}
            fill
            className="object-contain h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}
      {translation?.label ? (
        <div className="relative h-[28vh] md:h-[100vh]">
          <Image
            src={translation?.label}
            fill
            className="object-contain h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}
      {translation?.label2 ? (
        <div className="relative h-[28vh] md:h-[100vh]">
          <Image
            src={translation?.label2}
            fill
            className="object-contain h-full"
            alt=""
          ></Image>
        </div>
      ) : (
        ""
      )}
      {translation?.label3 ? (
        <div className="relative h-[28vh] md:h-[100vh]">
          <Image
            src={translation?.label3}
            fill
            className="object-contain h-full"
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
