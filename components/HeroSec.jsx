import React from "react";
import linehome2 from "../images/home-page/linehome.png";
import Image from "next/image";

export const HeroSec = () => {
  return (
    <section className="w-[100%]  bg-secondary-700 h-[350px] md:h-[555px] mx-auto relative ">
      <div className="w-full h-full flex items-start justify-center absolute  mt-[50px] md:mt-[90px]">
        <div className="w-full xl:w-[1160px] lg:h-[176px] mx-[20px]  md:mx-auto md:text-start text-center absolute">
          <p className="text-[24px] text-white px-[30px]">
            I clienti sono la bussola che guida il nostro servizio:
          </p>
          <div className="md:text-[60px] xl:text-[80px] text-[30px] font-bold text-white px-[20px]">
            Il loro <span className="text-primary-500">apprezzamento</span> è la
            vera misura del nostro valore.
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="w-full  absolute bottom-0 flex items-center justify-center">
        <Image src={linehome2}/>
      </div>
    </section>
  );
};
