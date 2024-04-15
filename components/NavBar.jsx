import React from "react";
import logonav from "../images/logos/logo2.svg";
import Image from "next/image";
import navbutton from "../images/home-page/navbutton.svg";

export const NavBar = () => {
  return (
    <div className="max-w-[90%] h-[64px] bg-transparent mx-auto">
      <nav className="flex justify-between items-center">
        <Image src={logonav} width={214} height={56} alt="Image Not Found" />
        <button>
          <Image src={navbutton} width={64} height={64} alt="Image Not Found" />
        </button>
      </nav>
    </div>
  );
};
