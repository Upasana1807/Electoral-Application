import React, { useState } from "react";
import "./LogIn.css";
import Login from "../../Images/login.png";
import Password from "../../Images/password.png";
import Id from "../../Images/id.png";
import Select from "../../Images/select.png";
import { useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
// import { BrowserRouter,Routes ,Route } from "react-router-dom";

const LogIn = () => {
  const [val, setval] = useState("");
  const [passval, passsetval] = useState("");
  const [sub, setSub] = useState(false);
  const [user, setUser] = useState("Voter");
  const navigate = useNavigate();
  //   const history = useHistory;

  const selectUser = (e) => {
    setUser(e.target.value);
    console.log(user);
    // history.push(user);
  };

  const change = (e) => {
    setval(e.target.value);
  };
  const passchange = (e) => {
    passsetval(e.target.value);
  };
  const submitFrom = (e) => {
    if (val === "") {
      alert("Please Enter Proper Value");
      e.preventDefault();
    } else {
      e.preventDefault();
      console.log(user);
      setSub(true);
      if (user === "Admin") {
        navigate("/admindash");
      }
      if (user === "Voter") {
        navigate("/voterdetails");
      }
      if (user === "Candidate") {
        navigate("/canform");
      }
    }
  };

  return (
    <>
      <div className="outer">
        <div className="logo">
          <div className="profile_logo_div">
            <img src={Login} alt="sample" className="profile_logo"></img>
          </div>
          <div className="heading_div">
            <span className="heading" style={{ marginTop: "3vh" }}>
              User Sign In
            </span>
          </div>
          <div className="login_from_div">
            <div className="icon">
              <img src={Select} alt="sample" className="iconimg"></img>
              <img src={Id} alt="sample" className="iconimg"></img>
              <img src={Password} alt="sample" className="iconimg"></img>
            </div>
            <div className="from">
              <div className="from_div">
                <select className="select" value={user} onChange={selectUser}>
                  <option value="Voter" id="voter">
                    <b>Voter</b>
                  </option>
                  <option value="Admin">Admin</option>
                  <option value="Candidate">Candidate</option>
                </select>
              </div>
              <div className="from_div">
                <form className="from-div" onSubmit={submitFrom}>
                  <input
                    type="text"
                    placeholder=" Please Enter Your ID"
                    className="box"
                    name="text"
                    value={val}
                    onChange={change}
                  ></input>
                  <br />
                </form>
              </div>
              <div className="from_div">
                <form onSubmit={submitFrom}>
                  <input
                    type="password"
                    placeholder=" Please Enter Your Password"
                    className="box"
                    name="password"
                    value={passval}
                    onChange={passchange}
                  ></input>
                  <br />
                </form>
              </div>
            </div>
          </div>
          <div className="btn_div">
            <button type="submit" className="btn_login" onClick={submitFrom}>
              <b>Log in</b>
            </button>
            <br />
            {sub}
          </div>
        </div>
        <div className="login"></div>
      </div>
    </>
  );
};
export default LogIn;
