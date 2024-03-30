import React from "react";
import './Nomdone.css';
import NDPIC from "../../image/nomdone.png"

const Nomdone = () =>{
    return(
        <div className="nomdone-outer-div">
            <div className="nomdone-heading-div">
               <h1 className="nomdone-heading-name-div">Thank you for nominating yourself!</h1>
            </div>
            <div className="nomdone-pic-div">
            <img src={NDPIC} alt="nomdonepic" height={330} width={520} /> 
            </div>
            <button className="nomdonebutton">
                <span className="nomdonebutton-text">Log Out</span>
            </button>
        </div>
    )
}

export default Nomdone;