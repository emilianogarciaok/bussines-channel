import Image from "next/image";
import React from "react";

export const CardCarrousel = ({ name, ocupation, image }) => {
  return (
    <div className="max-w-[215px] h-[324px] flex flex-col items-center mx-auto bg-white rounded-lg shadow-xl">
      {/* Image */}
      <div className="w-[160px] h-[200px] mt-[24px]">
        <Image src={image} alt="Image" />
      </div>
      {/* Text */}
      <div className="w-full px-4 mt-[10px]">
        <h5 className=" text-[20px] text-secondary-700 font-bold">{name}</h5>
        <h6 className="text-[13px] text-secondary-200 font-avenirlight">Partner & RD Manager</h6>
      </div>
    </div>
  );
};
