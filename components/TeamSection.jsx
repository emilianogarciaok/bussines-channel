"use client";
import React from "react";
import Slider from "react-slick";
import card1 from "../images/home-page/Carrousel/card1.svg";
import card2 from "../images/home-page/Carrousel/card2.svg";
import card3 from "../images/home-page/Carrousel/card3.svg";
import card4 from "../images/home-page/Carrousel/card4.svg";
import card5 from "../images/home-page/Carrousel/card5.svg";
import card6 from "../images/home-page/Carrousel/card6.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardCarrousel } from "./reusable/CardCarrousel";

export const TeamSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const cards = [
    {
      name: "F. Coppola",
      ocupation: "Partner & RD Manager",
      image: card1,
    },
    {
      name: "A. De Meo",
      ocupation: "Partner & HR Manager",
      image: card2,
    },
    {
      name: "J. J. Di Martino",
      ocupation: "Partner & RD Manager",
      image: card3,
    },
    {
      name: "G. Passaia",
      ocupation: "Area Manager Veneto e Trentino",
      image: card4,
    },
    {
      name: "F. Lo Valvo",
      ocupation: "Area Manager Sicilia",
      image: card5,
    },
    {
      name: "M. Tedesco",
      ocupation: "Special divisions Manager",
      image: card6,
    },
    {
      name: "F. Coppola",
      ocupation: "Partner & RD Manager",
      image: card1,
    },
    {
      name: "F. Coppola",
      ocupation: "Partner & RD Manager",
      image: card1,
    },
    {
      name: "F. Coppola",
      ocupation: "Partner & RD Manager",
      image: card1,
    },
  ];
  return (
    <section className="w-full  h-[890px] overflow-hidden ">
      {/* Textos */}
      <div className="xl:w-[1090px] w-[100%] h-[278px]  md:mx-auto  font-bold mb-0  lg:mb-[100px]">
        <h1 className="text-[30px] sm:text-[40px] md:text-[60px] lg:text-[65px] xl:text-[80px]  text-center md:mx-0 mx-[10px] text-se">
          ...e tutto questo, solo grazie al nostro{" "}
          <span className="text-primary-500 ">straordinario team</span>
        </h1>
        <p className="lg:text-[17.5px] text-[15px] text-center md:mx-0 mx-[30px] md:text-start text-secondary-500">
          Nel team di Business Channel, brilla un gruppo di collaboratori
          straordinari, tutti impegnati a offrire il massimo supporto ai nostri
          partner. I fondatori dell'azienda sono stati gli architetti di
          un'impresa straordinaria nel panorama della formazione italiana,
          creando un valore senza pari.
        </p>
      </div>
      {/* Carrousel */}
      <div className="xl:w-[1500px]  w-[80%]  mx-auto h-[330px] sm-mt-0 mt-[129px] ">
        <div>
          <Slider {...settings}>
            {cards.map((card) => {
              return (
                <CardCarrousel
                  name={card.name}
                  image={card.image}
                  ocupation={card.ocupation}
                  key={card.index}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};
