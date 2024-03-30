import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Voterdetails.css";
import My from "../../Images/my.png";
const Voterdetails =() =>{
    const[isChecked,setIsChecked]=useState(false);
    return(
        <>
           <div className="inner_div">
           <div className="image_div">
            <div className="image">
                <img src={My} alt="sample" className="profile_pic"></img>
            </div>
            </div> 
           <div className="personal_details_div">
            <div className="headding">
                <h1><b><u>Personal Details</u></b></h1>
            </div>
            <div className="details_div">
                <div className="details_div1">
                    <div className="name"><span><b>Name :</b></span></div>
                    <div className="id"><span><b>Voter Id :</b></span></div>
                    <div className="assemly"><span><b>Assembly :</b></span></div>
                </div>
                <div className="details_div2">
                <div className="name"><span><b>Raumya Koley</b></span></div>
                    <div className="id"><span><b>395674</b></span></div>
                    <div className="assemly"><span><b>Kalna</b></span></div>
                </div>
            </div>
            <div className="checkbox_div">
            <input type="checkbox" id="box" checked={isChecked}
            onChange={()=> setIsChecked(!isChecked)}
            />
                <i><b> I hereby confirm all my details are true and I want to Vote.
                </b>
                </i>
            </div>
            <div className="batton">
            <Link to="/voting">
                <button className={isChecked ? 'enabled' : 'disabled'} onClick={() => alert('This page will redirect you to the voting page')} id="btn">
                <b>Continue</b>
                </button>
                </Link>
            </div>
            </div> 

           
        </div>

        </>
    );
};

export default Voterdetails;