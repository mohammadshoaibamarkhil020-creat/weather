import React from 'react'
import Cityfirst from '../components/Cityfirst'
import Serch from '../components/serch'
import Rightabout from '../components/rightabout'
import Rightmedin from '../components/rightmedin'
import Rightbuutom from '../components/Rightbuutom'
function Citi() {
  return (
    <section  className=' w-screen h-[95%] justify-center lg:flex gap-3 items-center '>
      <div className='h-screen w-[60%] lg:pl-2 lg:flex gap-2 flex-col mt-2 hidden '>
        <Serch />
        <Cityfirst />
      </div>
      <div className='h-screen w-[37%] flex-col mt-2 justify-center gap-4 p-3'>
        <Rightabout/>
        <Rightmedin/>
        <Rightbuutom/>
      </div>
    </section>
  )
}

export default Citi