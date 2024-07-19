
import React from "react";

export const CardProof2 = () => {
  const cards = [
    {
      review: 10,
      text: "Questo corso mi permette di riflettere molto su di me, capire meglio gli altri e mi dà ottimi suggerimenti per relazionarmi con gli altri e gestire le mie preoccupazioni o ansie. Grazie a Federico per il tuo entusiasmo e coinvolgimento nelle lezioni. Manuela - Impiegata",
    },
    {
      review: 10,
      text: "Corso interessante e coinvolgente. I relatori sono sicuramente competenti ed in grado di trasmettere al meglio le informazioni attinenti al corso. Sono all'inizio dell'esperienza ma sono certo che sarà formante e formativa. Edoardo, Ufficio tecnico",
    },
    {
      review: 10,
      text: "Grazie all'implementazione dell'armonia aziendale, le nostre vendite sono aumentate del 50%. Un team motivato e coeso ha portato a clienti più soddisfatti e a una crescita delle entrate che non avrei mai immaginato. L'armonia aziendale è stata un vero game-changer per noi.",
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