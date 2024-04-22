import React from "react";
import './Nomdone.css';
import NDPIC from "../../image/nomdone.png"
import {Link} from "react-router-dom";

const Nomdone = () =>{
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