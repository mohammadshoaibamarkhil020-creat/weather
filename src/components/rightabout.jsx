import React from 'react'
import sum from '../assets/suncloud.png'
function Rightabout() {
  return (
    <div className=" flex   lg:flex-row flex-col h-[70%]  lg:h-[28%] border-b-1 items-center justify-center lg:justify-between ">
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
        <img src={sum} alt="" width={130} />
      </div>
    </div>
  )
}

export default Rightabout;