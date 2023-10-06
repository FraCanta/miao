import React from "react";

const SezioneIntro = () => {
  return (
    <>
      <h2 className="text-[10.26vw] md:text-[5.95vw] py-2 md:mt-4">Progetto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between h-full gap-4">
        <div className="grid grid-cols-1 gap-[20.15vw] md:gap-[6.15vw] w-full">
          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col gap-4">
              <h3 className="text-base text-second">titolo</h3>
              <p className="text-[20px] uppercase">item</p>
            </div>
            <div className="flex flex-col gap-4">
            <h3 className="text-base text-second">titolo</h3>
              <p className="text-[20px] uppercase">item</p>
            </div>
          </div>
          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col gap-4">
            <h3 className="text-base text-second">titolo</h3>
              <p className="text-[20px] uppercase">item</p>
            </div>
            <div className="flex flex-col gap-4">
            <h3 className="text-base text-second">titolo</h3>
              <p className="text-[20px] uppercase">item</p>
            </div>
          </div>
        </div>
        <div>sinistra</div>
      </div>
    </>
  );
};

export default SezioneIntro;
