import React from "react";
import Image from "next/image";
import { AvenirMedium } from "@/app/ui/fonts";

export const CardInfo = ({ title, text, image }) => {
  return (
    <div className="w-[326px] h-[262px] bg-secondary-500 flex items-center justify-center rounded-md relative mx-auto lg:mr-[30px]">
      {/* Texts */}
      <div className="w-[280px] h-[80%]">
        <h6 className="text-[26px] text-white font-bold leading-[32px] tracking-[-2%]">{title}</h6>
        <p className={`text-white text-[16px] font-avenirlight leading-[20px] tracking-[-2%] mt-[13px] ${AvenirMedium.className}`}>{text}</p>
      </div>
      {/* Number */}
      <div className={`${AvenirMedium.className} absolute flex items-end justify-end z-20 w-[32px] h-[52px]  pr-4 pb-4 `}>
        <Image src={image} width={32} height={52} />
      </div>
    </div>
  );
};
