import React from 'react';
import './Navbar.css';
import logo from "../../image/vote.jpg";
import icon from "../../image/home.png";

export const  Navbar= ()=>  {
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
