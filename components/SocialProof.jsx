import React from "react";
import { CardProof } from "./reusable/CardProof";
import reviewswall from "../images/home-page/reviewswall.png";
import Image from "next/image";

export const SocialProof = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <section className=" md:w-[100%] w-[100%] bg-white/60 h-[975px] mx-auto flex sm:overflow-hidden lg:transform lg:-rotate-6 items-center justify-center ">
        <div>
          <CardProof />
        </div>
        <div className="hidden lg:flex pt-[200px]">
          <CardProof />
        </div>
        <div className="hidden lg:flex">
          <CardProof />
        </div>
      </section>
    </div>
  );
};
