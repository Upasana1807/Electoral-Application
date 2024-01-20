import React from "react";
import "./VoterDetails.css";
import Continue from "../../Images/continue.png";
import My from "../../Images/my.png";

const VoterDetails =()=>{
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
                <h1><b><u>Personsl Deteils</u></b></h1>
            </div>
            <div className="details_div">
                <div className="details_div1">
                    <div className="name"><span><b>Name :</b></span></div>
                    <div className="id"><span><b>Id :</b></span></div>
                    <div className="assemly"><span><b>Assemly :</b></span></div>
                </div>
                <div className="details_div2">
                <div className="name"><span><b>Raumya Koley</b></span></div>
                    <div className="id"><span><b>395674</b></span></div>
                    <div className="assemly"><span><b>Kalna</b></span></div>
                </div>
            </div>
            <div className="checkbox_div">
            <input type="checkbox" id="check"/>
                <label for="check" >I hereby confirm all my details are true and I want to Vote.
                
                </label>
            </div>
            <div className="batton">
                <button className="btn">
                    <img src={Continue} alt="sample" className="Continue_logo"></img>
                    <p><b>Continue</b></p>
                </button>
            </div>
            </div> 

           
        </div>
        </>
    )
}
export default VoterDetails;