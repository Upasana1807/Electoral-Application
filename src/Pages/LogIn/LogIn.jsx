import React from "react";
import "./LogIn.css";
import Login from "../../Images/login.png";
import Password from "../../Images/password.png";
import Id from "../../Images/id.png";
import Select from "../../Images/select.png";

const LogIn=()=>{
    return(
    <>
    <div className="outer">
        <div className="logo">
            <div className="profile_logo_div">
            <img src={Login} alt="sample" className="profile_logo"></img>
            </div>
            <div className="heading_div">
            
            <span className="heading" style={{marginTop:"3vh"}}>User Sign In</span>
            </div>
            <div className="login_from_div">
                <div className="icon">
                <img src={Select} alt="sample" className="iconimg"></img>
                <img src={Id} alt="sample" className="iconimg"></img>
                <img src={Password} alt="sample" className="iconimg"></img>
                </div>
                <div className="from">
                    <div className="from_div">
                       <select className="select">
                        <option label="User" ></option>
                            <option value="Voter" >Voter</option>
                            <option value="Voter">Admin</option>
                            <option value="Voter">Candidate</option>
                        
                       </select>
                    </div>
                    <div className="from_div">
                    <form className="from-div">
                <input type="number" placeholder=" Please Enter Your ID"className="box"></input><br/>
                </form>
                    </div>
                    <div className="from_div">
                    <form>
                <input type="password" placeholder=" Please Enter Your Password"className="box"></input><br/>
                </form>
                    </div>
                </div>
               
            </div>
            <div className="btn_div">
                <button className="btn_login"><b>Log in</b></button>
</div>
        </div>
        <div className="login"></div>
    </div>
    
    </>
    )
}
export default LogIn; 