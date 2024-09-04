import React from "react";
import './Nomdone.css';
import NDPIC from "../../image/nomdone.png"
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";



const Nomdone = () =>{
    const location = useLocation();
    useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);
    return(
        <div className="nomdone-outer-div">
            <div className="nomdone-heading-div">
               <h1 className="nomdone-heading-name-div">Thank you for nominating yourself!</h1>
            </div>
            <div className="nomdone-pic-div">
            <img src={NDPIC} alt="nomdonepic" height={330} width={520} /> 
            </div>
            <Link to="/">
            <button className="nomdonebutton">

                <span className="nomdonebutton-text">Log Out</span>
            </button>
            </Link>
        </div>
    )
}

export default Nomdone;