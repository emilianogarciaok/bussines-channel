import React from "react";

export const CardProof = () => {
  const cards = [
    {
      review: 10,
      text: "Ullamcorper aenean nullam sodales aliquam. Ornare ullamcorper senectus proin a orci pulvinar. Donec risus sapien lacus.",
    },
    {
      review: 10,
      text: "Ullamcorper aenean nullam sodales aliquam. Ornare ullamcorper senectus proin a orci pulvinar. Donec risus sapien lacus.",
    },
    {
      review: 10,
      text: "Ullamcorper aenean nullam sodales aliquam. Ornare ullamcorper senectus proin a orci pulvinar. Donec risus sapien lacus.",
    },
    {
      review: 10,
      text: "Ullamcorper aenean nullam sodales aliquam. Ornare ullamcorper senectus proin a orci pulvinar. Donec risus sapien lacus.",
    },
    {
      review: 10,
      text: "Ullamcorper aenean nullam sodales aliquam. Ornare ullamcorper senectus proin a orci pulvinar. Donec risus sapien lacus.",
    },
  ];

  return (
    <section>
      {cards.map((card) => {
        return (
          <div className="w-[350px] sm:w-[400px] md:w-[554px] h-[129px] overflow-hidden bg-white rounded-lg shadow-lg mx-auto flex items-center mb-[20px] ml-0 sm:ml-[30px]" key={card.index}>
            <div className="px-6 w-full text-white overflow-hidden">
              <h5 className=" font-bold text-[26px] text-secondary-100">
                <span className="text-primary-500">n</span>/10
              </h5>
              <p className="text-[16px] text-secondary-500">
                Ullamcorper aenean nullam sodales aliquam. Ornare ullamcorper
                senectus proin a orci pulvinar. Donec risus sapien lacus.
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
