import React from "react";
import linehome2 from "../images/home-page/linehome.png";
import Image from "next/image";
import { AvenirBold } from "@/app/ui/fonts";

export const HeroSec = () => {
  return (
    <section className="w-[100%]  bg-secondary-700 h-[350px] md:h-[555px] mx-auto relative ">
      <div className="w-full h-full flex items-start justify-center absolute   ">
        <div className="w-full xl:w-[1160px] lg:h-[176px] mx-[20px]  md:mx-auto xl:text-start text-center absolute mt-[65px] md:mt-[120px]">
          <h3 className="text-[20px] text-white px-[10px] font-avenirlight md:tracking-[-2%] md:leading-[32px]">
            I clienti sono la bussola che guida il nostro servizio:
          </h3>
          <h1
            className={`sm:text-[35px] md:text-[60px] xl:text-[80px] text-[27px] font-bold text-white md:px-0 px-[20px] md:tracking-[-2%] md:leading-[88px] ${AvenirBold.className}`}
          >
            Il loro <span className="text-primary-500">apprezzamento</span> è la
            vera misura del nostro valore.
          </h1>
        </div>
      </div>
      {/* Image */}
      <div className="z-20 absolute bottom-[-4px] flex justify-center items-center w-full overflow-hidden">
        <div className="w-full overflow-hidden ">
          <Image
            src={linehome2}
            alt="Line Home"
            className="w-full h-auto scale-95 xl:scale-75  translate-y-[15px]"
          />
        </div>
      </div>
    </section>
  );
};
