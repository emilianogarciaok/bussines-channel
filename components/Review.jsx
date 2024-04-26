import React from "react";
import numberhome from "../images/home-page/numberhome.svg";
import Image from "next/image";

export const Review = () => {
  return (
    <section className="lg:w-[896px] w-full h-[474px] mx-auto relative mb-0 md:mb-[50px]">
      <div className="w-[100%] lg:text-start text-center  rounded-lg  h-[342px]  text-[20px] md:text-[26px] flex flex-col justify-between text-secondary-500 absolute font-avenirlight">
        <p className="lg:mb-0 mb-[20px] px-[10px]">
          Dopo 3 anni di sperimentazione del nostro nuovo progetto formativo,
          abbiamo condotto un'indagine per raccogliere i feedback dei nostri
          clienti.
        </p>
        <div className="lg:mb-0 mb-[20px] px-[10px] lg:px-0">
          Il sondaggio è stato condotto su un campione rappresentativo di
          <span className="text-black font font-bold"> 90 aziende</span>{" "}
          partecipanti, coprendo{" "}
          <span className="text-black font-bold">22 argomenti chiave.</span>
        </div>
        <div className="lg:px-0 px-[10px]">
          La sorprendente media di soddisfazione, valutata su una scala{" "}
          <span className="text-black font-bold">da 1 a 10</span>, è stata una
          piacevole sorpresa per noi!
        </div>
      </div>
      {/* Numbe */}
      <div className="w-full hidden absolute bottom-0 md:flex justify-end ">
        <Image src={numberhome} width={194} height={100}  alt="Image"/>
      </div>
    </section>
  );
};
