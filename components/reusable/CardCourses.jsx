import Image from "next/image";
import React from "react";
import cardcourse1 from "../../images/home-page/cardcourse2.png";

export const CardCourses = ({ image, title, text, buttonText }) => {
  return (
    <div className="max-w-[326px] h-[450px]  flex flex-col items-center rounded-lg shadow-2xl bg-[#FFFFFF]">
      {/* Image */}
      <div className="w-[100%] max-w-[326px] h-[200px]  mx-auto mb-[30px]">
        <Image
          src={image}
          alt="Image Not Found"
          priority
          width={326}
          height={200}
          className="rounded-t-lg"
        />
      </div>
      {/* Texts */}
      <div className="w-[262px] h-[120px] ">
        <h5 className="text-[23px] md:text-[26px]  text-secondary-700 md:tracking-[-2%] md:leading-[32px] ">
          {title}
        </h5>
        <p className="text-[16px] text-secondary-400 mb-[20px] mt-[5px] font-avenirlight md:tracking-[-2%] md:leading-[20px]">
          {text}
        </p>
        <button className="w-full lg:w-[262px] h-[48px] text-[20px] border-[2px] font-avenirlight font-bold border-primary-500 text-primary-500 rounded-md">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
