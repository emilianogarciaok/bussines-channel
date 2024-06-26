import React from "react";
import { CardCourses } from "./reusable/CardCourses";
import cardcourse1 from "../images/home-page/cardcourse1.png";
import cardcourse2 from "../images/home-page/cardcourse2.png";
import { AvenirBold } from "@/app/ui/fonts";

export const Courses = () => {
  const cards = [
    {
      title: "La solita brochure...",
      text: "Ci piacerebbe rispondere personalmente a tutte le vostre domande, ma nel frattempo...",
      image: cardcourse2,
      titleButton: "Visualizza brochure",
    },
    {
      title: "La nostra unicità",
      text: "Il percorso Jump è lultimo nato in casa BC, ed è ciò che fa realmente la differenza.",
      image: cardcourse1,
      titleButton: "Scopri i corsi",
    },
  ];

  return (
    <div className="w-[100%] bg-[#F6F6F6]  lg:w-full lg:h-[962px] flex-col  mx-auto flex items-center">
      {/* Titles */}
      <div className="xl:w-[1124px] md:px-0  px-[12px] w-[100%] h-[215px] mb-[30px] md:mb-[65px] lg:text-start text-center mt-[50px] lg:mt-[110px]">
        <h3 className="text-secondary-400 text-[20px] md:text-[24px] font-avenirlight md:tracking-[-2%] md:leading-[32px]">
          Uno sguardo rapido su Business Channel
        </h3>
        <h1 className={`md:text-[50px] text-[30px] lg:text-[77px] text-secondary-700 font-bold md:tracking-[-2%] md:leading-[88px] ${AvenirBold.className}`}>
          Il tuo tempo è denaro e la curiosità ha un tempo limitato
        </h1>
      </div>
      {/* Cards */}
      <div className="mx-auto grid max-w-sm grid-cols-1 gap-[30px] lg:mx-auto lg:max-w-[1126px] lg:grid-cols-2 mb-[40px]">
        {cards.map((card) => {
          return (
            <CardCourses
              title={card.title}
              text={card.text}
              image={card.image}
              buttonText={card.titleButton}
              key={card.index}
            />
          );
        })}
      </div>
    </div>
  );
};
