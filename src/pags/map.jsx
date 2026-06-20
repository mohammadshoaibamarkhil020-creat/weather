import React from 'react'
import Serch from '../components/serch'
import img from '../assets/0b4822ba-5c4c-4fc8-a0c7-da5bb582a373.png'
const Map = () => {
  return (
    <section>
      <div className='flex items-center justify-center gap-2 w-[80%] h-screen'>
          <div>
            <Serch/>
            <img src={img} alt="" width={100} height={100} />
          </div>
      </div>
      <div></div>
    </section>
  )
}

export default Map