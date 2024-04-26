import React from "react";
import homeimage from "../images/home-page/home.png";
import Image from "next/image";
import linehome from "../images/home-page/linehome.png";
import { NavBar } from "./NavBar";

export const Banner = () => {
  return (
    <section className="relative mx-auto flex  h-[982px] w-[100%] items-center justify-start">
      {/* NavBar */}
      <div className="absolute w-full top-0 z-10 mt-[30px]">
        <NavBar />
      </div>
      {/* Image */}
      <div className="h-full w-full">
        <Image
          src={homeimage}
          className="h-full w-full object-center"
          objectFit="cover"
          layout="fill"
          priority
          alt="Not"
        />
      </div>
      {/* Texts */}
      <div className="absolute z-10 mx-[20px] mt-[90px]  h-[276px]  text-center lg:w-[760px] md:w-[650px] md:text-start mb-[130px] ml-0 md:ml-[150px]">
        <div className=" mb-[24px] text-[35px] font-bold text-white md:text-[50px] lg:text-[70px] xl:text-[80px] font-avenirnext">
          L'<span className="text-primary-500">Aerobica Mentale</span> per la
          tua impresa
        </div>
        <p className=" mb-[40px] text-[25px] md:text-[30px] text-white font-avenirlight">
          Solo lavorando sulla creazione di una cultura vincente potrai
          sbloccare il potenziale della tua azienda.
        </p>
        <div className="flex w-[100%] justify-center md:justify-start ">
          <button className="h-[64px]  w-[200px] rounded-lg bg-primary-500 font-bold text-white md:w-[326px]">
            Scopri il nostro metodo
          </button>
        </div>
      </div>
      {/* Line Home */}
      <div className=" w-full  h-full z-20 absolute bottom-0 flex justify-center">
        <div className="lg:w-[90%] w-full bg-[#F6F6F6] h-full clippy rounded-t-2xl "></div>
      </div>
      {/* Div Opacity */}
      <div className="w-full h-full bg-black absolute bg-opacity-40"></div>
    </section>
  );
};
