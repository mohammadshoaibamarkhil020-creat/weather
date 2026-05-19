import React from "react";

function Topabout() {
      const sun = "https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png"
  return (
    <div className="lg:px-4  flex gap-20  lg:flex-row flex-col h-[70%]  lg:h-[30%]  items-center justify-center lg:justify-between ">
      <div className="flex flex-col gap-15 lg:gap-7 items-center lg:items-start  justify-center">
        <div className="flex gap-10 lg:gap-2 flex-col ">
          <h1 className="font-medium text-center lg:text-start text-6xl lg:text-2xl">
            Kabul
          </h1>
          <p className="font-medium lg:text-xl text-3xl">Chance of rain:0%</p>
        </div>
        <h1 className="lg:text-2xl lg:text-star text-4xl font-medium">31°C</h1>
      </div>
      <div className="flex items-center">
        <img src={sun} alt="" width={160} />
      </div>
    </div>
  );
}

export default Topabout;
