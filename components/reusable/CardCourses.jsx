import Image from "next/image";
import React from "react";
import cardcourse1 from "../../images/home-page/cardcourse2.png";

export const CardCourses = ({ image, title, text, buttonText }) => {
  return (
    <div className="max-w-[326px] h-[450px]  flex flex-col items-center rounded-lg shadow-2xl">
      {/* Image */}
      <div className="w-[100%] max-w-[326px] h-[200px]  mx-auto mb-[30px]">
        <Image
          src={image}
          alt="Image Not Found"
          priority
          width={326}
          height={200}
          className="rounded-lg"
        />
      </div>
      {/* Texts */}
      <div className="w-[262px] h-[120px] ">
        <h2 className="text-[23px] md:text-[26px]  text-secondary-700 font-bold">
          {title}
        </h2>
        <p className="text-[16px] text-secondary-500 mb-[20px] font-avenirlight">
          {text}
        </p>
        <button className="w-full lg:w-[262px] h-[48px] text-[20px] border-[2px] border-primary-500 text-primary-500 font-bold rounded-md">
         {buttonText}
        </button>
      </div>
      
    </div>
  );
};
