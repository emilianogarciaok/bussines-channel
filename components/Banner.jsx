import React from "react";
import homeimage from "../images/home-page/home.png";
import Image from "next/image";
import linehome from "../images/home-page/linehome.png";
import { NavBar } from "./NavBar";
import {AvenirBold, AvenirDemi, AvenirMedium } from "@/app/ui/fonts";

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
      <div className="absolute z-50 mx-[20px] mt-[90px]  h-[276px]  text-center lg:w-[760px] md:w-[650px] md:text-start mb-[130px] ml-0 lg:ml-[100px]">
        <h1 className={`mb-[24px] text-[35px]  text-white md:text-[50px] lg:text-[70px] xl:text-[80px] ${AvenirBold.className} tracking-[-2%] leading-[88px]`}>
          L'<span className="text-primary-500">Aerobica Mentale</span> per la
          tua impresa
        </h1>
        <p className={`mb-[40px] px-[10px] md:px-0 text-[25px] md:text-[30px] text-white  ${AvenirMedium.className}`}>
          Solo lavorando sulla creazione di una cultura vincente potrai
          sbloccare il potenziale della tua azienda.
        </p>
        <div className={`flex w-[100%] ${AvenirMedium.className} justify-center md:justify-start cursor-pointer  text-[20px]`}>
          <button className="h-[64px]  w-[326px] rounded-lg bg-primary-500   text-white md:w-[326px] tracking-[2%] leading-[20px]  ">
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
