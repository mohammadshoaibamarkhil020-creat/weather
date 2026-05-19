import React from "react";
import { IoIosCloud } from "react-icons/io";
function Medimweathar() {
  const [togole, settogole] = React.useState(true);

  const sun =
    "https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png";
  const sunCloud =
    "https://assets.api.uizard.io/api/cdn/stream/ef8669bc-9d01-48e4-b37c-0db0e310ec63.png";
  const cloud =
    "https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png";
  return togole ? (
    <div className="flex flex-col px-2 h-[35%] lg:h-[35%] justify-center gap-4 bg-secondary rounded-md">
      <p className="text-gray-500 ">TODAY'S FORECAST</p>
      <div className="flex items-center justify-around ">
        <div className="felx flex-col items-center justify-center text-center  text-xl hidden lg:block  ">
          <p className="text-gray-500">06:00 AM</p>
          <img src={cloud} alt="" width={120} />
          <p>25°</p>
        </div>
        <div className="felx flex-col items-center justify-center text-center  text-xl  ">
          <p className="text-gray-500">09:00 AM</p>
          <img src={sunCloud} alt="" width={80} />
          <p>25°</p>
        </div>
        <div className="felx flex-col items-center justify-center text-center  text-xl ">
          <p className="text-gray-500">09:00 AM</p>
          <img src={sun} alt="" width={80} />
          <p>25°</p>
        </div>
        <div className="felx flex-col items-center justify-center text-center  text-xl   ">
          <p className="text-gray-500">09:00 AM</p>
          <img src={sun} alt="" width={80} />
          <p>25°</p>
        </div>
        <div className="felx flex-col items-center justify-center text-center  text-xl hidden lg:block ">
          <p className="text-gray-500">09:00 AM</p>
          <img src={sun} alt="" width={80} />
          <p>25°</p>
        </div>
        <div className="felx flex-col items-center justify-center text-center  text-xl hidden lg:block ">
          <p className="text-gray-500">09:00 AM</p>
          <img src={sunCloud} alt="" width={80} />
          <p>25°</p>
        </div>
      </div>
    </div>
  ) : (
    <h1>not found</h1>
  );
}

export default Medimweathar;
