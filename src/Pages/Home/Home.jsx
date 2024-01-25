import React from 'react'
import './Home.css'
import backg from "../../image/clip3.png"

export const  Home = () => {
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
          <button className='but-div'>Log In</button>
        </div>
      </div>
    </div>
  )
}

// export default Home;

