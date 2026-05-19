import React from "react";

const sun =
  "https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png";
const suncloud =
  "https://assets.api.uizard.io/api/cdn/stream/d12bc406-1c84-42b5-9f37-4d52460d0521.png";

const cards = [
  {
    img: sun,
    name: "Kabul",
    time: "10:23",
    gride: "31°",
  },
  {
    img: suncloud,
    name: "Herat",
    time: "10:23",
    gride: "32°",
  },
  {
    img: sun,
    name: " wardag",
    time: "10:23",
    gride: "33°",
  },
  {
    img: suncloud,
    name: "Mazr",
    time: "10:23",
    gride: "33°",
  },
];
function Cityfirst() {
  return (
    <div className="flex flex-col justify-around h-[85%]  w-full gap-2 ">
      {cards.map((card) => (
        
          <div className="flex h-full justify-between px-2 rounded-2xl items-center active:bg-secondary hover:bg-primary bg-secondary">
            <div className=" w-[30%] flex items-center gap-14 ">
              <img src={card.img} alt="" width={80} />
              <div>
                <h1 className="font-bold text-2xl">{card.name}</h1>
                <p className="text-xl">{card.time}</p>
              </div>
            </div>
            <h1 className="text-3xl pr-3">{card.gride}</h1>
          </div>
        
      ))}
    </div>
  );
}

export default Cityfirst;
