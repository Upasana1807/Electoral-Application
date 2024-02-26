import React from 'react'
import './Candash.css'
import BG from "../../image/icon.jpg"
import ICON from "../../Images/icon.png"

const  Candash = () => {
    return (
        <div className='candash-outer-div'>
            <div className='candash-inner-div'>
                <div className='candash-inner1'>
                    <div className='candash-inner-div1'>
                        <span className='candash-heading'>Candidate Dashbord</span>
                    </div>
                    <div className='candash-inner-div2'>
                        <div className='candash-pic-div'>
                        <img src={ICON} alt="icon" height={78} width={78}/> 
                        </div>
                        <div className='candash-name-div'>
                            <span className='candash-name'>NARASINGHA CHATTOPADHYAY</span>
                        </div>
                    </div>
                </div>
                <div className='candash-inner2'>
                    {/* <div className='inner-box'>

                    </div> */}
                </div>
            </div>
            <div className='candash-inner-div3'>
                <div className='candash-box'>
                    <div className='candash-box-img'>
                    <img src={BG} alt="pic" height={125} width={155}/> 
                    </div>
                    <div className='candash-box-text'>
                    <span className='candash-name1'>NARASINGHA</span>    
                    </div>
                </div>
                <div className='candash-box'>
                    <div className='candash-box-img'>
                    <img src={BG} alt="pic" height={125} width={155}/>
                    </div>
                    <div className='candash-box-text'>
                    <span className='candash-name2'>CMP</span>       
                    </div>
                </div>
                <div className='candash-box'>
                    <div className='candash-box-img'>
                    <img src={BG} alt="pic" height={125} width={155}/>
                    </div>
                    <div className='candash-box-text'>
                    <span className='candash-name3'>SANDAKFU</span>     
                    </div>
                </div>
                <div className='candash-box'>
                    <div className='candash-box-img'>
                    <img src={BG} alt="pic" height={125} width={155}/>
                    </div>
                    <div className='candash-box-text'>
                    <span className='candash-name4'>DOHA</span>     
                    </div>
                </div>
                {/* <div className='box-right'>
                    <div className='box-img-right'>

                    </div>
                    <div className='box-text-right'>
                    <span className='name4'>PENDING</span>
                    </div>
                </div> */}
            </div>
            <div className='candash-button-div'>
               <button className='candash-but-div'>Log Out</button>
            </div>
        </div>
      )
  }

  export default Candash