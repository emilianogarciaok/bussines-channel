import React from "react";

export const CardProof3 = () => {
  const cards = [
    {
      review: 10,
      text: "Adottare l'armonia aziendale ha trasformato la gestione del personale nella mia azienda. I dipendenti sono più felici, la comunicazione è migliorata e abbiamo ridotto il turnover del 30%. Un ambiente sereno e collaborativo ha reso la nostra squadra più efficiente e affiatata.",
    },
    {
      review: 10,
      text: "Con questo corso mi sento molto più consapevole come persona e di conseguenza a migliorarmi ma soprattutto mi aiuta a conoscere e gestire meglio gli altri. Ho sempre voluto fare un corso così! Ovviamente un grazie a te Federico per come ci fai vivere il corso! Leda impiegata amministrativa",
    },
    {
      review: 10,
      text: "L'adozione delle pratiche di armonizzazione aziendale ha rivoluzionato la nostra azienda. Come socio, ho visto un cambiamento radicale nel modo in cui il team collabora e comunica. La fiducia e il rispetto reciproco sono diventati pilastri fondamentali, e questo ha portato a decisioni più rapide e a una maggiore innovazione. L'ambiente sereno e motivante ha non solo aumentato la produttività, ma ha anche rafforzato il nostro legame come soci e con i nostri dipendenti. L'armonia aziendale ha davvero dato nuova vita al nostro business",
    },
    {
      review: 10,
      text: "Inizialmente ero scettico sull'armonia aziendale, ma i risultati mi hanno stupito. I conflitti sono diminuiti, la produttività è cresciuta del 35% e l'ambiente è ora positivo e motivante. Ora sono un convinto sostenitore di questo approccio.",
    },
    {
      review: 10,
      text: "Con questo corso mi sento molto più consapevole come persona e di conseguenza a migliorarmi ma soprattutto mi aiuta a conoscere e gestire meglio gli altri. Ho sempre voluto fare un corso così! Ovviamente un grazie a te Federico per come ci fai vivere il corso! Leda impiegata amministrativa.",
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
