import React from 'react'
import sun from '../assets/sun.png'
function Rightbuutom() {
    const days= [
        {
            day:"sunday",
            icon:sun,
            state: "Sunny",
            time:"33/22"
        },
        {
            day:"Monday",
            icon:sun,
            state: "Sunny",
            time:"02/22"
        },
        {
            day:"Thusday",
            icon:sun,
            state: "Sunny",
            time:"19/22"
        },
    ]
  return (
    <div className='h-[30%] flex flex-col gap-3 mt-3 font-medium '>
        <p>3-DAY FORCAST</p>
        <div className='flex flex-col '>
            {
                days.map((day)=>(
                    <div className='flex items-center justify-between'>
                        <p>{day.day}</p>
                        <div className='flex items-center justify-center  '>
                            <img src={day.icon} alt="" width={60}  />
                            <p>{day.state}</p>
                        </div>
                        <h3>{day.time}</h3>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Rightbuutom