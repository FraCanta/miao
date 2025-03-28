import Image from "next/image";
import React from "react";

const Typography = ({ translation }) => {
  return (
    <div>
      <h3 className="text-[6vw] md:text-[3.5vw] font-bold text-main">
        <span>{translation?.titolo}</span>
        <span className="ml-0 text-red">.</span>
      </h3>
      <div className="min-h-[20vh] lg:h-[60vh] grid grid-cols-1 md:grid-cols-2 py-4">
        <Image
          src={translation?.typoImg}
          width={2000}
          height={2000}
          className="object-contain h-full"
          alt=""
        ></Image>
        <Image
          src={translation?.typoImg2}
          width={1000}
          height={1000}
          className="object-contain h-full"
          alt=""
        ></Image>
      </div>
    </div>
  );
};

export default Typography;
