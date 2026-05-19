import React, { useEffect } from "react";
import axios from "axios";
import Dayforcast from "../components/7day forcast";
import Topabout from "../components/topabout";
import Medimweathar from "../components/medimweathar";
import Lastweathar from "../components/lastweathar";
import Serch from "../components/serch";

const Weathar = () => {
  const sun =
    "https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png";
  const sunCloud =
    "https://assets.api.uizard.io/api/cdn/stream/ef8669bc-9d01-48e4-b37c-0db0e310ec63.png";
  const [time, settime] = React.useState(null);
  const [temp, settemp] = React.useState(null);
  
  const getweather = async () => {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";
    const res = await axios.get(url);
    settime(res.data.hourly.time[17]);
  ;
    
    
  };
  useEffect(() => {
    getweather()
  },[]);

  const [togole, settogole] = React.useState(true);
  return (
    <section className="w-full h-full px-3 flex py-5 flex-col lg:flex-row  gap-5 ">
      <div className=" lg:w-[60%] h-full flex flex-col gap-3 ">
        <Serch />
        <Topabout  />
        {togole ? (
          <Medimweathar />
        ) : (
          <h1>
            {time}
            {temp}
          </h1>
        )}
        <Lastweathar togole={togole} settogole={settogole} />
      </div>
      <Dayforcast />
    </section>
  );
};

export default Weathar;
