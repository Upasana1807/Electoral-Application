import React from "react";
import {Link} from "react-router-dom";
import './Typage.css';
import TYPIC from "../../image/typic.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const Typage =() =>{
    const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);



    return(
        <div className="ty-outer-div">
            <div className="ty-heading-div">
               <h1 className="ty-heading-name-div">Thank you for casting your vote!</h1>
            </div>
            <div className="ty-pic-div">
            <img src={TYPIC} alt="typic" height={330} width={520} /> 
            </div>
            <Link to="/">
            <button className="tybutton">
                <span className="tybutton-text">Log Out</span>
            </button>
            </Link>
        </div>
    );
};

export default Typage;