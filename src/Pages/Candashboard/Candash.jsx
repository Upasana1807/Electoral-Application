import React from 'react';
import './Candash.css';
import {Link} from "react-router-dom";
import BG4 from "../../image/clock.png";
import ICON from "../../Images/icon.png";
import BG3 from "../../image/region-1.png";
import BG2 from "../../image/party-logo.png";
import BG1 from "../../image/party-name.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const  Candash = () => {
    const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);
    return (
        <div className='candash-outer-div'>
            <div className='candash-inner-div'>
                <div className='candash-inner1'>
                    <div className='candash-inner-div1'>
                        <span className='candash-heading'>Candidate Dashboard</span>
                    </div>
                    <div className='candash-inner-div2'>
                        <div className='candash-pic-div'>
                            <img src={ICON} alt="icon" height={32} width={32} /> 
                        </div>
                        <div className='candash-name-div'>
                            <span className='candash-name'>NARASINGHA  CHATTOPADHYAY</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='candash-inner-div3'>
                <div className='candash-box'>
                    <div className='candash-box-heading'>
                      <span className='candash-name1-box-headxing'>Party Name</span>    
                    </div>
                    <div className='candash-box-img'>
                        <img src={BG1} alt="pic" height={100} width={100} /> 
                    </div>
                    <div className='candash-box-text'>
                        <span className='candash-name1'>CMP</span>    
                    </div>
                </div>
                <div className='candash-box'>
                    <div className='candash-box-heading'>
                    <span className='candash-name2-box-headxing'>Logo</span>    
                    </div>
                    <div className='candash-box-img'>
                        <img src={BG2} alt="pic" height={100} width={100} />
                    </div>
                    <div className='candash-box-text'>
                        <span className='candash-name2'>CPM</span>       
                    </div>
                </div>
                <div className='candash-box'>
                    <div className='candash-box-heading'>
                    <span className='candash-name3-box-headxing'>Region</span>    
                    </div>
                    <div className='candash-box-img'>
                        <img src={BG3} alt="pic" height={100} width={100} />
                    </div>
                    <div className='candash-box-text'>
                        <span className='candash-name3'>SANDAKFU</span>     
                    </div>
                </div>
                <div className='candash-box'>
                    <div className='candash-box-heading'>
                    <span className='candash-name4-box-headxing'>Status</span>    
                    </div>
                    <div className='candash-box-img'>
                        <img src={BG4} alt="pic" height={100} width={100} />
                    </div>
                    <div className='candash-box-text'>
                        <span className='candash-name4'>Pending</span>     
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
                <Link to="/">
               <button className='candash-but-div'>Log Out</button>
               </Link>
            </div>
        </div>
      )
  }

  export default Candash;