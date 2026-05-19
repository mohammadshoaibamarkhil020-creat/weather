import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from '../components/header'
const Lauout = () => {
  return (
    <div className='bg-primary flex items-center  justify-center '>
        
        <Header/>
        <Outlet />
    </div>
  )
}

export default Lauout