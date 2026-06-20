import React from "react";
import sun from '../assets/sun.png'
import suncloud from '../assets/suncloud.png'
 

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
        
          <div className="flex h-full justify-between px-2 rounded-2xl items-center active:bg-secondary hover:bg-primary transition  ease-in-out duration-500 bg-secondary">
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
