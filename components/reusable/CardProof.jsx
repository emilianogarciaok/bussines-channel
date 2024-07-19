import React from "react";

export const CardProof = () => {
  const cards = [
    {
      review: 10,
      text: "Da quando abbiamo implementato le strategie di armonizzazione aziendale, la mia azienda è cambiata radicalmente. I dipendenti sono più motivati, collaborano meglio e la produttività è aumentata del 30%. Abbiamo ridotto i conflitti interni e creato un ambiente di lavoro sereno e stimolante. Non avrei mai immaginato che l'armonia potesse avere un impatto così significativo sui nostri risultati. Consiglio vivamente questo approccio a qualsiasi imprenditore desideroso di vedere la propria azienda prosperare",
    },
    {
      review: 10,
      text: "L'introduzione delle pratiche di armonizzazione aziendale ha trasformato il mio ambiente di lavoro. Prima, la tensione e lo stress erano all'ordine del giorno, ma ora c'è una nuova atmosfera di collaborazione e rispetto. La comunicazione è migliorata notevolmente e mi sento più valorizzato e motivato. Questo ha avuto un impatto positivo non solo sulla mia produttività, ma anche sul mio benessere generale. L'armonia aziendale non è solo un concetto astratto, è una realtà che cambia il modo in cui lavoriamo e viviamo",
    },
    {
      review: 10,
      text: "L'adozione delle pratiche di armonizzazione aziendale ha rivoluzionato la nostra azienda. Come socio, ho visto un cambiamento radicale nel modo in cui il team collabora e comunica. La fiducia e il rispetto reciproco sono diventati pilastri fondamentali, e questo ha portato a decisioni più rapide e a una maggiore innovazione. L'ambiente sereno e motivante ha non solo aumentato la produttività, ma ha anche rafforzato il nostro legame come soci e con i nostri dipendenti. L'armonia aziendale ha davvero dato nuova vita al nostro business",
    },
    {
      review: 10,
      text: "Entrare in un'azienda che valorizza larmonia aziendale è stata un'esperienza incredibile. Sin dal primo giorno, ho percepito un ambiente di lavoro accogliente e collaborativo. La comunicazione è trasparente e il supporto tra colleghi è eccezionale. Questa atmosfera positiva non solo mi ha aiutato ad adattarmi rapidamente, ma mi ha anche ispirato a dare il massimo ogni giorno. Sentirsi parte di una squadra armoniosa fa davvero la differenza.",
    },
    {
      review: 10,
      text: "Implementare l'armonia aziendale ha rivoluzionato la mia azienda: team più uniti, produttività aumentata del 40% e un ambiente di lavoro sereno. Un investimento che rifarei senza esitazione.",
    },
  ];

  return (
    <section>
      {cards.map((card) => {
        return (
          <div
            className="w-[350px] sm:w-[400px]  md:w-[554px] h-[145px] overflow-hidden bg-white rounded-lg shadow-lg mx-auto flex items-center mb-[20px] ml-0 sm:ml-[30px]"
            key={card.index}
          >
            <div className="px-6 w-full text-white overflow-hidden">
              <h5 className=" font-bold text-[26px] text-secondary-100">
                <span className="text-primary-500">{card.review}</span>/10
              </h5>
              <p className="text-[11px] text-secondary-500 font-avenirlight">
                {card.text}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
