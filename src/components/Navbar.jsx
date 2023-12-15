import React from 'react'
import img1 from '../assets/images/logoMain.png'
import '../cssFile/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar_main'>
      <img className='navabr_logo' src={img1} alt="" />
      
    </div>
  )
}

export default Navbar
