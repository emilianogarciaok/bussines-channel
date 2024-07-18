import React from "react";
import homeimage from "../images/home-page/home.png";
import Image from "next/image";
import linehome from "../images/home-page/linehome.png";
import { NavBar } from "./NavBar";
import { AvenirBold, AvenirDemi, AvenirMedium } from "@/app/ui/fonts";

export const Banner = () => {
  return (
    <section className="relative mx-auto flex  h-[982px] w-[100%] items-center justify-start  xl:w-[1920px]">
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
      <div className="absolute z-50 mt-[90px]  h-[276px] mx-auto text-center lg:w-[1100px] md:w-[650px] xl:text-start mb-[130px] ml-0 lg:ml-[100px]">
        <h1
          className={`mb-[24px] text-[35px]  text-white md:text-[50px] lg:text-[70px] xl:text-[65px] ${AvenirBold.className} md:tracking-[-2%] md:leading-[88px]`}
        >
          L'<span className="text-primary-500">Armonia aziendale</span> Nessun
          altro offre un servizio così esclusivo per trasformare il tuo business
        </h1>
        <p
          className={`mb-[40px]  md:px-0 text-[22px] md:text-[26px] lg:text-[30px] text-white  ${AvenirMedium.className}`}
        >
          Crea un ambiente dove il rispetto, la collaborazione e la crescita
          personale si intrecciano: solo così l'armonia aziendale diventa la
          chiave del successo.
        </p>
        <div
          className={`flex w-[100%] ${AvenirMedium.className} justify-center md:justify-start cursor-pointer  text-[17px] md:text-[20px]`}
        >
          <button className="h-[64px]   w-[250px] rounded-lg bg-primary-500   text-white md:w-[326px] tracking-[2%] leading-[20px]  ">
            Scopri il nostro metodo
          </button>
        </div>
      </div>
      {/* Line Home */}
      <div className="z-20 absolute bottom-[-2px] flex justify-center items-center w-full overflow-hidden">
        <div className="w-full overflow-hidden ">
          <Image
            src={linehome}
            alt="Line Home"
            className="w-full h-auto scale-95 xl:scale-90  translate-y-[10px]"
          />
        </div>
      </div>
      {/* Div Opacity */}
      <div className="w-full h-full bg-black absolute bg-opacity-50"></div>
    </section>
  );
};
