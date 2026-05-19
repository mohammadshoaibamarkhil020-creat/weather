import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import umbrila from "../assets/umbrila.png"
const Welcome = () => {
    
  return (
    <div className='flex bg-primary h-screen  font-sans items-center justify-center gap-20 '>
        {/* <div>left sild </div> */}
        <div className='bg-secondary rounded-md h-[70%] w-[30%] hidden lg:flex items-center justify-center '>
            <img src={umbrila} className='w-100 h-100'  alt="" />
        </div>
        {/* <div>right slid</div> */}
        <div className='flex flex-col  items-center  h-[60%] w-[30%] justify-center  '>
            <img src={umbrila}  alt="" className='w-70 h-70' />
            <div>
                <h1 className='font-bold text-4xl '>Breza</h1>
                <p className='text-gray-500 font-medium'>Weathar App</p>
            </div>
            <NavLink to={'/main'} >
            
            <button className='bg-blue-400 rounded-full text-2xl px-5 py-5 lg:hidden block gap-4  '><FaArrowRight /></button>
            <p  className='bg-blue-500 rounded-md font-medium text-2xl px-5 py-3 font-mono hidden lg:block '>Get Started</p>
            </NavLink>
            
        </div>

    </div>
  )
}

export default Welcome