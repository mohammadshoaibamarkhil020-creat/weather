import React from "react";
import { IoIosCloud } from "react-icons/io";
import sun from '../assets/sun.png'
import cloud from'../assets/cloud.png'
import suncloud from '../assets/suncloud.png'
function Medimweathar() {
  const [togole, settogole] = React.useState(true);

  
  
  
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
          <img src={suncloud} alt="" width={80} />
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
          <img src={suncloud} alt="" width={80} />
          <p>25°</p>
        </div>
      </div>
    </div>
  ) : (
    <h1>not found</h1>
  );
}

export default Medimweathar;
