import React from "react";
import { CardInfo } from "./reusable/CardInfo";
import num1 from "../images/home-page/num1.svg";
import num2 from "../images/home-page/num2.svg";
import num3 from "../images/home-page/num3.svg";
import { AvenirBold, AvenirMedium, RobotoSlab } from "@/app/ui/fonts";

export const InfoSec = () => {
  const cards = [
    {
      title: "Denaro",
      text: "Gli elevati costi correlati alla formazione aziendale costituiscono un ostacolo significativo per la maggior parte dei business, rendendola inaccessibile per molti.",
      image: num1,
    },
    {
      title: "Tempo",
      text: 'Chi è dentro il circuito "azienda" vede ogni attività svolta al di fuori del proprio lavoro come un attività improduttiva. Un collaboratore che fa un corso di formazione manca di produttività.',
      image: num2,
    },
    {
      title: "Emozioni",
      text: "Quante volte ci è capitato di pensare che tutti gli investimenti in formazione non sono serviti a niente? E quindi.... chi me lo fa fare?",
      image: num3,
    },
  ];

  return (
    <div className="bg-[#F6F6F6] max-w-[1126px] w-[100%] min-h-[1130px] mx-auto ">
      {/* Caja 1 */}
      <div className="flex flex-col w-[90%] h-[382px] xl:w-[1124px] mx-auto  md:mb-[50px] sm:mb-[10px] mt-0">
        <div className="xl:w-[785px] w-full h-[80px] md:text-start text-center md:mx-auto lg:mx-0">
          <div className={`md:text-[25px] lg:text-[32px] font-roboto font-bold sm:text-[20px] text-[18px]   text-secondary-500 w-full leading-[40px]  mt-0 md:mt-[80px] mb-0 md:mb-[24px] ${RobotoSlab.className}`}>
            Un anno di coinvolgimento totale per creare un luogo in cui le
            persone
            <span className="text-red-500">"parlano la stessa lingua"</span>
          </div>
          <h1
            className={`lg:text-[80px] md:text-[60px] text-[40px] text-secondary-700 ${AvenirBold.className} md:tracking-[-2%] md:leading-[88px]`}
          >
            Il metodo
          </h1>
          <h1
            className={`lg:text-[80px] md:text-[60px] text-[40px] text-primary-500  md:tracking-[-2%] md:leading-[88px] ${AvenirBold.className}`}
          >
            Business Channel
          </h1>
          <div className="text-[20px] w-[100%]  text-secondary-500 font-avenirlight mt-[10px] md:mt-[24px] leading-[26px] tracking-[-2%]  ">
            <p className="mx-auto">
              Il miglioramento è una dato di fatto. La frase obsoleta{" "}
              <span
                className={`text-primary-500 font-bold leading-[24px] ${AvenirBold.className}`}
              >
                "chi non si forma si ferma"
              </span>
            </p>
            rimarrà sempre un dato di fatto. Spesso però gli imprenditori
            rallentano questa corsa per 3 motivi principali:
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className=" w-full sm:mt-0 mt-[150px] ">
        <div className=" grid max-w-sm grid-cols-1 gap-[30px]  mt-[50px] md:mt-[130px] mx-auto lg:mx-0 lg:max-w-[1000px] lg:grid-cols-3 mb-[48px] xl:grid-cols-3 ">
          {cards.map((card) => {
            return (
              <CardInfo
                key={card.number}
                title={card.title}
                text={card.text}
                image={card.image}
              />
            );
          })}
        </div>
      </div>
      {/* Texts */}
      <div className={`w-full   text-[15px] text-center sm:text-start md:text-[20px] h-[78px] mb-[50px] font-avenirlight ${AvenirMedium.className}`}>
        <h6 className="w-[100%] xl:w-[910px] mx-auto lg:mx-0 text-secondary-500 px-[20px] lg:px-0 leading-[32px] tracking-[-2%]">
          ...e se ti dicessimo che abbiamo trovato la{" "}
          <span className={` text-primary-500`}>soluzione</span> per questi 3
          problemi fondamentali, saresti disposto a valutare un nuovo cammino
          alla ricerca della versione migliore della tua azienda? Beh, che
          domande...{" "}
          <span
            className={`text-primary-500 font-bold ${AvenirBold.className} leading-[24px] tracking-[-2%]`}
          >
            Certo che si!
          </span>
        </h6>
      </div>
      {/* Button */}
      <div className=" mx-auto w-full lg:pt-0 pt-[40px] font-avenirlight mb-[40px]">
        <div className="w-[326px] h-[64px] lg:mx-0 mx-auto flex items-center justify-center">
          <button className="h-[64px] w-full bg-primary-500 text-white  rounded-md tracking-[2%] leading-[20px] text-[20px] font-medium">
            Scopri adesso la soluzione
          </button>
        </div>
      </div>
    </div>
  );
};
