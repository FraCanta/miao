import Image from "next/image";
import React from "react";

const HeroPage = ({ img, title, desc }) => {
  return (
    <div className="w-[90%] mx-auto h-full flex flex-col lg:flex-row 2xl:items-center 2xl:justify-around gap-8">
      <div className="flex flex-col gap-6 mt-8 lg:gap-14">
        <Image
          src={title}
          alt="titolo servizio"
          className="object-contain w-[90vw] md:w-[60vw] xl:w-[40vw]  h-full"
          width={230}
          height={100}
        />
        {desc && (
          <p className="mx-10 text-xl lg:mx-20 lg:text-3xl text-main">
            <span
              dangerouslySetInnerHTML={{
                __html: desc,
              }}
            ></span>
            <span className="text-red">.</span>
          </p>
        )}
      </div>
      <Image
        src={img}
        alt="immagine del servizio"
        className="object-contain w-full lg:w-[500px] xl:w-[680px] fxl:w-[1000px] 3xl:w-[1200px] 4xl:w-auto h-full"
        width={780}
        height={800}
      />
    </div>
  );
};

export default HeroPage;
