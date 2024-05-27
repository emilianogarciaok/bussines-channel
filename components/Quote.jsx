import React from "react";
import comilla1 from "../images/home-page/comilla1.svg";
import comilla2 from "../images/home-page/comilla2.svg";
import Image from "next/image";

export const Quote = () => {
  return (
    <div className="w-[100%] h-[360px] bg-primary-500 flex items-center justify-center">
      {/* Contenedor principal de el texto y comillas */}
      <div className="md:w-[1200px] w-[100%] h-[250px] flex items-center justify-center mx-auto relative">
        <div className="flex items-center justify-center absolute  w-[100%] lg:max-w-[1140px] text-[20px] text-center lg:text-[32px]">
          <h3 className="text-white   px-[20px] md:px-0 font-Roboto tracking-[-1%] leading-[40px]">
            L’Aerobica Mentale in azienda non è solo un esercizio per la mente,
            ma un investimento nel capitale più prezioso: il potenziale umano.
          </h3>
        </div>
        <div className="hidden xl:flex item-end justify-start absolute w-full h-full -translate-y-[60px] translate-x-[30px]">
          <Image src={comilla1} width={129} height={113} alt="Image" />
        </div>
        <div className="hidden xl:flex item-start justify-end absolute w-full h-full -translate-x-[35px] translate-y-[60px]">
          <Image src={comilla2} alt="Image" />
        </div>
      </div>
    </div>
  );
};
