import React from 'react'
import Cityfirst from '../components/Cityfirst'
import Serch from '../components/serch'
function Citi() {
  return (
    <div  className=' w-screen h-screen '>
      <div className='h-screen w-[60%] lg:flex gap-2 flex-col mt-2 hidden '>
        <Serch />
        <Cityfirst />
      </div>
    </div>
  )
}

export default Citi