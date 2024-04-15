import React from "react";
import { CardCourses } from "./reusable/CardCourses";
import cardcourse1 from "../images/home-page/cardcourse1.png";
import cardcourse2 from "../images/home-page/cardcourse2.png";

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
    <div className="w-[100%] lg:w-full lg:h-[962px] flex-col  mx-auto flex items-center pt-[100px]">
      {/* Titles */}
      <div className="lg:w-[1124px] w-[100%] h-[215px] mb-[100px]">
        <span className="text-secondary-500 text-[24px]">
          Uno sguardo rapido su Business Channel
        </span>
        <h2 className="text-[70px] text-secondary-700 font-bold">
          Il tuo tempo è denaro e la curiosità ha un tempo limitato
        </h2>
      </div>
      {/* Cards */}
      <div className="mx-auto grid max-w-sm grid-cols-1 gap-[30px] lg:mx-auto lg:max-w-[1126px] lg:grid-cols-2 mb-[40px]">
        {
          cards.map((card)=>{
            return <CardCourses title={card.title}text={card.text}image={card.image} buttonText={card.titleButton} key={card.index}/>
          })
        }
      </div>
    </div>
  );
};
