import React from "react";
import linehome2 from "../images/home-page/linehome.png";
import Image from "next/image";

export const HeroSec = () => {
  return (
    <section className="w-[100%]  bg-secondary-700 h-[350px] md:h-[555px] mx-auto relative ">
      <div className="w-full h-full flex items-start justify-center absolute  mt-[50px] md:mt-[90px]">
        <div className="w-full xl:w-[1160px] lg:h-[176px] mx-[20px]  md:mx-auto lg:text-start text-center absolute">
          <p className="text-[20px] text-white px-[10px]">
            I clienti sono la bussola che guida il nostro servizio:
          </p>
          <div className="sm:text-[35px] md:text-[60px] xl:text-[80px] text-[27px] font-bold text-white md:px-0 px-[20px]">
            Il loro <span className="text-primary-500">apprezzamento</span> è la
            vera misura del nostro valore.
          </div>
        </div>
      </div>
      {/* Image */}
      <div className=" w-full  h-full z-20 absolute bottom-0 flex justify-center">
        <div className="lg:w-[90%] w-full bg-[#F6F6F6] h-full clippyfooter rounded-t-2xl "></div>
      </div>
    </section>
  );
};
