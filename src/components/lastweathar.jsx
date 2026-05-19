import React from "react";

function Lastweathar({togole,settogole}) {
  
  const handletogle = () => settogole(!togole);
  return (
    <div className=" h-50 lg:h-[30%]  rounded-md">
      {
        togole ? (
          <div className=" flex flex-col justify-between bg-secondary">
      <div className="flex pt-2 px-4 justify-between lg:h-[25%]">
        <p className="font-medium">AIR CONDTION</p>

        <button
          onClick={handletogle}
          className="bg-blue-700 rounded-md hover:bg-blue-500 px-1.5 py-1 font-medium"
        >
          See More
        </button>
      </div>
      <div className="flex justify-around text-gray-500 font-medium text-[20px] gap-10 lg:h-[70%] items-center ">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="flex  ">
              <p>Reel Feel</p>
            </div>
            <p className="text-amber-50">30°</p>
          </div>
          <div className="flex flex-col ">
            <div className="flex ">
              <p>Chance of rain</p>
            </div>
            <p className="text-amber-50">0%</p>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="flex ">
              <p>Wind</p>
            </div>
            <p className="text-amber-50">0.2km/h</p>
          </div>
          <div className="flex flex-col ">
            <div className="flex ">
              <p>UV Index</p>
            </div>
            <p className="text-amber-50">3°</p>
          </div>
        </div>
      </div>
    </div>
        ) : <h1>not found</h1>
      }
    </div>
    
  );
}

export default Lastweathar;
