import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
  return (
    <section className="w-full h-[600px] md:h-[543px]  relative ">
      {/* Footer Items */}
      <div className=" hidden bg-secondary-700 w-full h-full clippyfooter xl:flex  items-center justify-start absolute">
        <div className="w-[668px] h-[177px] ml-[100px]">
          <nav className="flex justify-between mx-[30px] md:mt-[50px]">
            <ul className="text-white">
              <h5 className="text-[20px] font-bold">Bussines Channel</h5>
              <li>Pagina 1</li>
              <li>Pagina 2</li>
              <li>Pagina 3</li>
              <li>Pagina 4</li>
            </ul>
            <ul className="text-white">
              <h5 className=" text-[20px] font-bold">Jump Suite</h5>
              <li>Jump Leader Advanced</li>
              <li>Jump Sales</li>
              <li>Jump Follower</li>
              <li>Jump Leader Live</li>
            </ul>
            <ul className="text-white">
              <h5 className="text-[20px] font-bold">Contatti</h5>
              <li>info@businesschannel.it</li>
              <li>+39 0422 36 35 99</li>
              <li>Via Str. della Serenissima,</li>
              <li>3/A - 31057 Silea (TV)</li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Form */}
      <div className="md:text-start text-center w-full md:w-[530px] h-[455px]  mx-auto xl:absolute  flex flex-col items-center justify-center px-[50px] bg-white rounded-lg shadow-2xl xl:mr-[50px]  xl:right-0">
        <div className="w-full h-[150px] flex items-center justify-start  flex-col  ">
          <h3 className="text-[20px] md:text-[26px] font-bold text-seconary-700">
            Vuoi scoprire quale corso si adatta meglio al tuo business?
          </h3>
          <h5 className="text-[13px] md:text-[20px] text-secondary-400">
            Inserisci qui il tuo indirizzo email aziendale e organizzeremo un
            appuntamento per discutere delle tue esigenze.
          </h5>
        </div>
        {/* Form */}
        <form className="w-full  h-[180px] mt-[35px]">
          <input
            type="text"
            className="w-full h-[50px] md:h-[66px]  text-[20px] placeholder:px-[20px] placeholder:text-secondary-400 bg-secondary-50"
            placeholder="Indirizzo email"
          />
          <p className="text-[12px] text-secondary-200">
            Cliccando sul tasto "Contattaci" dichiari di accettare la nostra
            Privacy Policy.
          </p>
          <button className="w-[200px] h-[64px] bg-primary-500 text-white mt-[10px] rounded-md">
            Contattaci
          </button>
        </form>
      </div>
      {/* RED SECTION */}
      {/* <div className="w-full bg-primary-500 text-white h-[48px] absolute bottom-0 mx-auto flex  justify-between items-center px-0 md:px-[100px]">
        <nav>
          <span>
            © Copyright 2024 Business Channel S.r.l. – P.IVA 1234567890
          </span>
        </nav>
        <nav className="flex gap-x-2 text-white itesms-center justify-center  leading-10">
          <FaFacebook />
          <FaLinkedin />
        </nav>
        <nav className="gap-x-2 flex">
          <span>Gestisci privacy</span>
          <span>Termini e condizioni</span>
        </nav>
      </div> */}
    </section>
  );
};