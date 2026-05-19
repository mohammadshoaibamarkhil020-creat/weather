import React from 'react'

function Dayforcast() {
    const sun = "https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png"
    const runcloud = "https://assets.api.uizard.io/api/cdn/stream/d12bc406-1c84-42b5-9f37-4d52460d0521.png"
    const cloud = "https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png"
  return (
    <div className="lg:w-[40%] w-full  text-gray-500  h-screen lg:h-full   rounded-md bg-secondary flex flex-col  py-3 px-8">
        <p>7-DAY FORESACT</p>
        <div className="flex  flex-col justify-center gap-4  h-[90%] ">
          <div className="flex h-[13%]  justify-between border-b-1 border-gray-500 items-center">
            <p>Saturday</p>
            <div className="flex gap-3 items-center">
              <img src= {sun}  width={65} alt="" />
              <p>Sunny</p>
            </div>
            <p>20°</p>
          </div>
          <div className="flex h-[13%] justify-between border-b-1 border-gray-500 items-center">
            <p>Saturday</p>
            <div className="flex gap-3 items-center" >
              <img src= {sun} width={65}  alt="" />
              <p>Sunny</p>
            </div>
            <p>20°</p>
          </div>
          <div className="flex h-[13%] justify-between border-b-1 border-gray-500 items-center">
            <p>Saturday</p>
            <div className="flex gap-3 items-center">
              <img src= {sun} width={65}  alt="" />
              <p>Sunny</p>
            </div>
            <p>20°</p>
          </div>
          <div className="flex h-[13%] justify-between border-b-1 border-gray-500 items-center">
            <p>Saturday</p>
            <div className="flex gap-3 items-center" >
              <img src= {cloud} width={85}  alt="" />
              <p>Sunny</p>
            </div>
            <p>20°</p>
          </div>
          <div className="flex h-[13%] justify-between border-b-1 border-gray-500 items-center">
            <p>Saturday</p>
            <div className="flex gap-3 items-center">
              <img src= {cloud} width={85}  alt="" />
              <p>Sunny</p>
            </div>
            <p>20°</p>
          </div>
          <div className="flex h-[13%] justify-between border-b-1 border-gray-500 items-center">
            <p>Saturday</p>
            <div className="flex gap-3 items-center">
              <img src= {runcloud}  width={75} alt="" />
              <p>Sunny</p>
            </div>
            <p>20°</p>
          </div>
          <div className="flex h-[13%] justify-between  items-center">
            <p>Saturday</p>
            <div className="flex gap-3 items-center justify-center" >
              <img src= {sun}  width={65} alt="" />
              <p>Sunny</p>
            </div>
            <p>20°</p>
          </div>
        </div>
      </div>
  )
}

export default Dayforcast