"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import card1 from '../../../images/home-page/Carrousel/card1.svg'
import card2 from "../../../images/home-page/Carrousel/card2.svg";
import card3 from "../../../images/home-page/Carrousel/card3.svg";
import card4 from "../../../images/home-page/Carrousel/card4.svg";
import card5 from "../../../images/home-page/Carrousel/card5.svg";
import card6 from "../../../images/home-page/Carrousel/card6.svg";
import card7 from "../../../images/home-page/Carrousel/card7.svg";
import card8 from "../../../images/home-page/Carrousel/card8.svg";
import card9 from "../../../images/home-page/Carrousel/card9.svg";
import card10 from "../../../images/home-page/Carrousel/card10.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardCarrousel } from "../CardCarrousel";
import arrowleft from "../../../images/logos/ArrowLeft.svg"
import arrowright from "../../../images/logos/ArrowRight.svg"
import Image from "next/image";
import { AvenirBold } from "@/app/ui/fonts";
import './teamselection.css'
export const TeamSection = () => {
  // Funciones para el carrousel

  const sliderRef = useRef(null);
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 1,
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
      name: "R. Sgarioto",
      ocupation: "Segreteria  Commerciale",
      image: card7,
    },
    {
      name: "M. G. Velleca",
      ocupation: "Responsabile organizzativa",
      image: card8,
    },
    {
      name: "G. Zin",
      ocupation: "Responsabile Telemarketing",
      image: card10,
    },
  ];

  return (
    <section className="w-full  h-[890px] overflow-hidden bg-[#F6F6F6]  mt-0 md:mt-[180px]">
      {/* Textos */}
      <div className="xl:w-[1124px]  w-[100%] h-[200px] lg:h-[278px]  md:mx-auto  mb-0  lg:mb-[30px] px-[40px] xl:px-0">
        <h1 className={`text-[30px] sm:text-[40px] md:text-[60px]  lg:text-[65px] xl:text-[80px]  text-center md:mx-0 mx-[10px] lg:text-start text-secondary-700 md:tracking-[-2%] md:leading-[88px] ${AvenirBold.className}`}>
          ...e tutto questo, solo grazie al nostro{" "}
          <span className="text-primary-500  ">straordinario team</span>
        </h1>
        <p className="lg:text-[20px] text-[17px]  text-center  xl:px-0   md:text-start text-secondary-500  w-full  md:tracking-[-2%] md:leading-[26px]">
          Nel team di Business Channel, brilla un gruppo di collaboratori
          straordinari, tutti impegnati a offrire il massimo supporto ai nostri
          partner. I fondatori dell'azienda sono stati gli architetti di
          un'impresa straordinaria nel panorama della formazione italiana,
          creando un valore senza pari.
        </p>
      </div>
      {/* Carrousel */}
      <div className="xl:w-[1380px]  pb-[50px]  w-[80%]   mx-auto h-[400px]  mt-[230px] sm:mt-[40px] md:mt-[165px] pt-[35px] lg:mt-[0]">
        <div className="custom-slider">
          <Slider {...settings} ref={sliderRef}>
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
          <div className="mt-[30px] w-full h-[40px] flex justify-center md:text-start text-center items-center text-[20px] md:text-[24px] text-secondary-500 font-avenirlight gap-x-8 mx-auto">
            <button className="hover:scale-110 transition-all">
              <Image src={arrowleft} onClick={prevSlide} />
            </button>
            <span>Conosci i nostri talenti</span>
            <button className="hover:scale-110 transition-all">
              <Image src={arrowright} onClick={nextSlide} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
