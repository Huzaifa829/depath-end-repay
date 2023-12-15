import React from 'react'
import Navbar from '../components/Navbar'
import '../cssFile/HomePage.css'
import SideBar from '../components/layout/SideBar'

const HomePage = () => {
  return (
<>
<Navbar/>
<div className='HA_main'>
<div className='HA_main_part1'>
    <SideBar/>
</div>
<div>
    
</div>
</div>
</>
  )
}

export default HomePage
