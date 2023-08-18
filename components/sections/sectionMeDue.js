import React from "react";
import Marquee from "../marquee/marquee";

const SectionMeDue = () => {
  return (
    <div className="w-full min-h-[40vh] justify-between items-center mt-[150px] flex mx-auto">
      <div className="w-full h-full">
        <div className="w-full h-full  bg-main flex items-center py-8">
          <Marquee />
        </div>
      </div>
    </div>
  );
};

export default SectionMeDue;
