import Image from "next/image";
import React from "react";

const Typography = ({ translation }) => {
  console.log(translation);
  return (
    <div>
      <h3 className="text-[6vw] md:text-[3.5vw] font-bold">
        {translation?.titolo}
      </h3>
      <div className="relative h-[20vh] md:h-[60vh]">
        <Image
          src={translation?.typoImg}
          fill
          className="object-contain h-full"
          alt=""
        ></Image>
      </div>
    </div>
  );
};

export default Typography;
