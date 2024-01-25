import React from 'react'
import './Navbar.css'
import logo from "../../image/icon.jpg"
import icon from "../../image/icon2.jpg"

export const Navbar = () => {
  return (
    <div className='nav-outer'>
      <div className='nav-inner1'>
      <img src={logo} alt="sample" className='icon-div'></img>
      </div>
      <div className='nav-inner2'>
      <img src={icon} alt="sample" className='icon-div2'></img>
      </div>
    </div>
  )
}

// export default Navbar