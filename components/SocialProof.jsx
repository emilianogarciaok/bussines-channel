import React from "react";
import { CardProof} from "./reusable/CardProof";
import { CardProof2 } from "./reusable/CardProof2";
import { CardProof3 } from "./reusable/CardProof3";


export const SocialProof = () => {
  return (
    <div className="w-full min-h-[calc(100vh-130px)] overflow-hidden bg-[#F6F6F6] relative">
      <section className=" md:w-[100%] w-[100%] bg-[#F6F6F6] h-[975px] mx-auto flex sm:overflow-hidden lg:transform lg:-rotate-6 items-center justify-center absolute ">
        <div>
          <CardProof />
        </div>
        <div className="hidden lg:flex pt-[200px]">
          <CardProof2 />
        </div>
        <div className="hidden lg:flex">
          <CardProof3 />
        </div>
      </section>
      {/* Degradade */}
      <div className="w-full h-full bg-gradient-to-b via-transparent from-transparent  to-[#F6F6F6] z-20 absolute"></div>
    </div>
  );
};
