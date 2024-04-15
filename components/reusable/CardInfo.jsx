import React from "react";
import Image from "next/image";

export const CardInfo = ({title,text,image}) => {
  return (
    <div className="w-[326px] h-[262px] bg-secondary-500 flex items-center justify-center rounded-md relative">
      {/* Texts */}
      <div className="w-[280px] h-[80%]">
        <h1 className="text-[26px] text-white font-bold">{title}</h1>
        <p className="text-white text-[16px]">{text}</p>
      </div>
      {/* Number */}
      <div className="absolute flex items-end justify-end z-20 w-full h-full pr-4 pb-4">
        <Image src={image} width={34} height={40} />
      </div>
    </div>
  );
};
