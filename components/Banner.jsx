import React from "react";
import homeimage from "../images/home-page/home.png";
import Image from "next/image";
import linehome from "../images/home-page/linehome.png";
import { NavBar } from "./NavBar";

export const Banner = () => {
  return (
    <section className="w-[100%] lg:h-[982px] h-[1130px] mx-auto relative flex flex-col justify-center ">
      {/* NavBar */}
      <div className="absolute w-full top-0 z-10 mt-[30px]">
        <NavBar />
      </div>
      {/* Image */}
      <div className="w-[100%] h-full max-h-[982px] absolute">
        <Image
          src={homeimage}
          className="w-full h-full object-center"
          objectFit="cover"
          layout="fill"
          priority
          alt="Not"
        />
      </div>
      {/* Texts */}
      <div className="w-[750px] h-[276px] mb-[40px] absolute lg:mx-[80px] z-20 sm:mx-auto">
        <span className="text-[70px] text-white pb-[24px] font-bold">
          L&#39;<b className="text-primary-500 font-bold">Aerobica Mentale</b>{" "}
          per la tua impresa
        </span>
        <p className="text-[32px] mb-[35px] text-white">
          Solo lavorando sulla creazione di una cultura vincente potrai
          sbloccare il potenziale della tua azienda.
        </p>
        <button className="w-[326px] h-[64px] text-white font-bold bg-primary-500">
          Scopri il nostro metodo
        </button>
      </div>
      {/* Line Home */}
      <div className="absolute bottom-0 w-full flex text-center justify-center z-20">
        <Image src={linehome} width={1352} />
      </div>
      {/* Div Opacity */}
      <div className="w-full h-full bg-black absolute bg-opacity-40"></div>
    </section>
  );
};
