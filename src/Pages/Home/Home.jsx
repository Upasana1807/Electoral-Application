import React from 'react'
import './Home.css'
import backg from "../../image/clip3.png"
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


export const  Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <div className='outer-div'>
     
      <div className='inner-div1'>
      <img src={backg} alt="sample" className='clipart-div'></img>
      </div>
      <div className='inner-div2'>
       <div className='inner-div3'>
          <span className='landing-font1'><b>Online Voting</b></span>
       </div>
        <div className='inner-div4'>
          <span className='landing-font2'>System</span>
        </div>
        <div className='button-div'>
          <button className='but-div'><Link to={'/login'} style={{fontFamily:"'Montserrat', sans-serif"}}> Log In </Link></button>
        </div>
      </div>
    </div>
  )
}

// export default Home;

