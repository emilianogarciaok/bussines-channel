import React from "react";
import { CardInfo } from "./reusable/CardInfo";
import num1 from "../images/home-page/num1.svg";
import num2 from "../images/home-page/num2.svg";
import num3 from "../images/home-page/num3.svg";

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
    <div className="bg-[#F6F6F6] max-w-[1126px] w-[100%] min-h-[calc(100vh-130px)] mx-auto mb-[50px] ">
      {/* Caja 1 */}
      <div className="flex flex-col w-[90%] h-[382px] xl:w-[1124px] mx-auto mb-[100px] sm:mb-[10px]">
        <div className="xl:w-[785px] w-full h-[80px] md:text-start text-center md:mx-auto lg:mx-0">
          <div className="w-full">
            <div className="md:text-[25px] lg:text-[32px] sm:text-[20px] text-[18px] mt-[20px] lg:mt-0  text-secondary-500 w-full">
              Un anno di coinvolgimento totale per creare un luogo in cui le
              persone
              <span className="text-red-500">"parlano la stessa lingua"</span>
            </div>
          </div>
          <h3 className="lg:text-[65px] md:text-[50px] text-[40px] text-secondary-500 font-bold">
            Il metodo
          </h3>
          <h3 className="lg:text-[65px] md:text-[50px] text-[40px] text-primary-500 font-bold">
            Business Channel
          </h3>
          <div className="text-[20px] w-[100%] text-secondary-500 ">
            Il miglioramento è una dato di fatto. La frase obsoleta
            <span className="text-primary-500 font-bold">
              "chi non si forma si ferma"
            </span>
            rimarrà sempre un dato di fatto. Spesso però gli imprenditori
            rallentano questa corsa per 3 motivi principali:
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="mx-auto grid max-w-sm grid-cols-1 gap-[30px]  lg:mx-auto lg:max-w-[1126px] lg:grid-cols-3 mb-[40px] xl:grid-cols-3">
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
      {/* Texts */}
      <div className="w-full  text-[18px] text-center sm:text-start md:text-[20px] h-[78px] mb-[100px] sm:mb-[30px]">
        <div className="w-[100%] xl:w-[910px] mx-auto lg:mx-0 text-secondary-500 px-[20px] lg:px-0">
          ...e se ti dicessimo che abbiamo trovato la{" "}
          <span className="text-primary-500 font-bold">soluzione</span> per
          questi 3 problemi fondamentali, saresti disposto a valutare un nuovo
          cammino alla ricerca della versione migliore della tua azienda? Beh,
          che domande...{" "}
          <span className="text-primary-500 font-bold">Certo che si!</span>
        </div>
      </div>
      {/* Button */}
      <div className=" mx-auto w-full lg:pt-0 pt-[40px]">
        <div className="w-[326px] h-[64px] lg:mx-0 mx-auto flex items-center justify-center">
          <button className="h-[64px] w-full bg-primary-500 text-white font-bold rounded-md">
            Scopri adesso la soluzione
          </button>
        </div>
      </div>
    </div>
  );
};
