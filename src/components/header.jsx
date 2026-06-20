import React from 'react'

import { TiWeatherPartlySunny } from "react-icons/ti";
import { TfiMenuAlt } from "react-icons/tfi";
import { CiMap } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5"
import { NavLink } from 'react-router-dom';

const Headr = () => {
    const umbrila = "https://assets.api.uizard.io/api/cdn/stream/34a3bd31-3127-4485-bd1b-5965a68a6e4e.png"
  return (
    <header className='lg:w-[8%] lg:h-screen  left-0    lg:flex lg:items-center lg:justify-center '>
        <nav className='lg:w-20  w-screen h-20 lg:h-[95%] fixed bottom-0  lg:sticky  lg:rounded-md text-gray-400  flex items-center py-5 lg:flex-col gap-6 bg-secondary '>
            <div className='hidden lg:flex lg:text-2xl'>
                 <img src={umbrila} sizes='50' alt="" />
            </div>
            <ul className='flex lg:flex-col lg:gap-5 gap-15 items-center justify-center m-auto lg:m-5 '>
                {/* link weathar */}
                <NavLink to={"/main"} end>
                {
                    ({isActive}) =>(
                        <li className= {isActive ? ' flex lg:flex-col font-medium text-gray-100 items-center text-1xl gap-2 justify-center':' flex lg:flex-col items-center  text-1xl gap-2 justify-center'} >
                            < TiWeatherPartlySunny  className='size-10 lg:size-7'/>
                            <p className='hidden lg:block'>Weathar</p>
                        </li>
                    )
                }
                </NavLink>
            {/* link cities */}
                <NavLink to={'/main/cities'} end>
                {
                    ({isActive}) =>(
                        <li className= {isActive ? ' flex lg:flex-col  text-gray-100 items-center font-medium text-1xl gap-2 justify-center':' flex lg:flex-col items-center  text-1xl gap-2 justify-center' } >
                            <TfiMenuAlt className='size-10 lg:size-7'/>
                            <p className='hidden lg:block'>Citiy</p>
                        </li>
                    )
                }
                </NavLink>
                {/* link map  */}
               <NavLink to={"/main/map"} end>
               {
                ({isActive}) =>(
                        <li className= {isActive ? ' flex lg:flex-col  text-gray-100 items-center font-medium text-1xl gap-2 justify-center':' flex lg:flex-col items-center  text-1xl gap-2 justify-center' }>
                            <CiMap className='size-10 lg:size-7'/>
                            <p className='hidden lg:block'>Map</p>
                        </li>
                )
               }
                </NavLink>
                {/* link setting */}
                <NavLink to={"/main/setting"} end>
                {
                    ({isActive}) =>( 
                        <li className= {isActive ?  ' flex lg:flex-col text-gray-100 items-center font-medium text-1xl gap-2 justify-center':' flex lg:flex-col items-center  text-1xl gap-2 justify-center'}>
                            <IoSettingsOutline className='size-10 lg:size-7'/>
                            <p className='hidden lg:block'>Setting</p>
                        </li>

                    )
                }
                </NavLink>
               
            </ul>
        </nav>
    </header>
   
  )
}

export default Headr;