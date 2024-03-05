import React from "react";
import './Typage.css';
import TYPIC from "../../image/typic.png"

const Typage =() =>{
    return(
        <div className="ty-outer-div">
            <div className="ty-heading-div">
               <h1 className="ty-heading-name-div">Thank you for casting your vote!</h1>
            </div>
            <div className="ty-pic-div">
            <img src={TYPIC} alt="typic" height={330} width={520} /> 
            </div>
            <button className="tybutton">
                <span className="tybutton-text">Log Out</span>
            </button>
        </div>
    );
};

export default Typage;