import React from 'react'
import sun from "../assets/sun.png"
import suncloud from "../assets/suncloud.png"
function Rightmedin() {
    const filds = [{
        time: "09:00 AM",
        icon: sun,
        gride: "25°C"

    },
    {
        time: "10:00 AM",
        icon: suncloud,
        gride: "20°C"

    },
    {
        time: "12:00 PM",
        icon: sun,
        gride: "13°C"

    },
    ]
    return (
        <div className=' flex flex-col  lg:h-[30%] border-b-1 gap-2 font-medium  '>
            <p>TODY'S FOR COST</p>
            <div className='flex h-[90%] items-center justify-around gap-6'>
                {
                    filds.map((fild) => (

                        <div className='flex flex-col items-center justify-center   '>
                            
                                <p>{fild.time}</p>
                                <img src={fild.icon} alt="" width={90} />
                                <h3>{fild.gride}</h3>
                            
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Rightmedin