import React, { useState } from "react";
import "./Candiform.css";
import nomination from "./nominate.png";

const Candiform = () => {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const [val4, setVal4] = useState("");
  const [val5, setVal5] = useState("");
  const [picv, setPicv] = useState("");
  const [sub, setSub] = useState(false);
  const [temp1, setTemp1] = useState(val1);
  const [temp2, setTemp2] = useState(val2);
  const [temp3, setTemp3] = useState(val3);
  const [temp4, setTemp4] = useState(val4);
  const [temp5, setTemp5] = useState(val5);
  const [temp6, setTemp6] = useState(picv);
  const change6 = (e) => {
    setSub(false);
    setPicv(URL.createObjectURL(e.target.files[0]));
    console.log(picv);
  }
  const change1 = (e) => {
    console.log(e);
    setSub(false);
    setVal1(e.target.value);
    console.log(val1);
  };
  const change2 = (e) => {
    console.log(e);
    setSub(false);
    setVal2(e.target.value);
    console.log(val2);
  };
  const change3 = (e) => {
    console.log(e);
    setSub(false);
    setVal3(e.target.value);
    console.log(val3);
  };
  const change4 = (e) => {
    console.log(e);
    setSub(false);
    setVal4(e.target.value);
    console.log(val4);
  };
  const change5 = (e) => {
    console.log(e);
    setSub(false);
    setVal5(e.target.value);
    console.log(val5);
  };
    
    
   
  const submitForm = (e) => {
    if (
      val1 === "" ||
      val2 === "" ||
      val3 === "" ||
      val4 === "" ||
      val5 === ""
    ) {
      alert("Please Fill the Form Properly");
      e.preventDefault();
    } else {
      e.preventDefault();
      setSub(true);
      setTemp1(val1);
      setVal1("");
      setTemp2(val2);
      setVal2("");
      setTemp3(val3);
      setVal3("");
      setTemp4(val4);
      setVal4("");
      setTemp5(val5);
      setVal5("");
      setTemp6(picv);
      setPicv("");
    }
  };

  return (
    <>
      <div
        style={{
          height: "10vh",
          width: "60%",
          marginLeft: "20%",
          marginTop: "5vh",
          color: "#004b80",
          fontSize: "28px",
        }}
      >
        <h1 style={{ fontFamily: "'Inter', sans-serif" }}>
          {" "}
          Candidate Nomination Form
        </h1>
      </div>
      <div
        style={{
          height: "5vh",
          width: "50%",
          marginLeft: "25%",
          marginTop: "2vh",
          color: "white",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: "bold",
        }}
      >
        <h1
          style={{
            fontFamily: "'Montserrat', sans-serif",
            color: "rgb(0, 171, 228)",
            fontSize: "22px",
          }}
        >
          {" "}
          *Please fill out the form carefully & all fields are mandatory*{" "}
        </h1>
      </div>
      <div
        style={{
          height: "auto",
          width: "55%",
          backgroundColor: "white",
          marginLeft: "23%",
          marginTop: "4vh",
          paddingTop: "1.8vh",
          borderRadius: "6px",
          boxShadow: "2px 3px 6px gray",
        }}
      >
        <div
          style={{
            height: "27vh",
            width: "45%",
            backgroundColor: "maroon",
            marginLeft: "30%",
          }}
        >
          <img
            src={nomination}
            alt="illustraion for nomination"
            style={{ height: "32vh", width: "100%" }}
          />
        </div>
        <div
          style={{
            height: "80vh",
            width: "100%",
            marginTop: "5vh",
            display: "flex",
          }}
        >
          <form onSubmit={submitForm}>
            <div
              style={{
                height: "auto",
                width: "200%",
                marginTop: "2vh",
                textAlign: "left",
                marginLeft: "8%",
              }}
            >
              <label className="candi-form-label">Name: </label>
              <input
                type="text"
                value={val1}
                onChange={change1}
                className="candi-form-box"
                placeholder="Enter the candidate name"
                style={{
                  paddingLeft: "2%",
                  fontSize: "12.5px",
                  marginLeft: "8%",
                }}
              />
              <br /> <br />
              <label className="candi-form-label"> Age: </label>
              <input
                type="number"
                value={val2}
                onChange={change2}
                className="candi-form-box"
                placeholder="Enter the age of the candidate"
                style={{
                  paddingLeft: "2%",
                  fontSize: "12.5px",
                  marginLeft: "11%",
                }}
              />
              <br /> <br />
              <label className="candi-form-label"> Region: </label>
              <input
                type="text"
                value={val3}
                onChange={change3}
                className="candi-form-box"
                placeholder="Enter the region of the candidate"
                style={{
                  paddingLeft: "2%",
                  fontSize: "12.5px",
                  marginLeft: "6.5%",
                }}
              />
              <br /> <br />
              <label className="candi-form-label"> Id No.: </label>
              <input
                type="text"
                value={val4}
                onChange={change4}
                className="candi-form-box"
                placeholder="Enter the voter id of the candidate"
                style={{
                  paddingLeft: "2%",
                  fontSize: "12.5px",
                  marginLeft: "8%",
                }}
              />
              <br /> <br />
              <label className="candi-form-label"> Party Name: </label>
              <input
                type="text"
                value={val5}
                onChange={change5}
                className="candi-form-box"
                placeholder="Enter the party name of the candidate"
                style={{
                  paddingLeft: "2%",
                  fontSize: "12.5px",
                  marginLeft: "-1%",
                }}
              />
              <br /> <br />
              <br /> <br />
              <br /> <br />
            </div>
            <button
              type="submit"
              style={{
                height: "6vh",
                width: "30%",
                backgroundColor: "rgb(0, 171, 228)",
                color: "white",
                border: "none",
                boxShadow: "1px 1px 2px gray",
                fontFamily: "'Montserrat', sans-serif",
                borderRadius: "5px",
                fontSize: "15px",
                marginLeft: "120%",
              }}
              className="candi-form-btn"
            >
              Submit
            </button>
            <br />
            {sub && <h1>The value is {temp1}</h1>}
            {sub && <h1>The value is {temp2}</h1>}
            {sub && <h1>The value is {temp3}</h1>}
            {sub && <h1>The value is {temp4}</h1>}
            {sub && <h1>The value is {temp5}</h1>}
          </form>
          <div>
            <div
              style={{
                height: "29vh",
                width: "70%",
                backgroundColor: "olive",
                marginTop: "7vh",
                marginLeft: "50%",
              }}
            >
              <img src={picv} alt="" style={{width:"100%", height:"29vh"}}/>
            <input type="file" 
                onChange={change6}/>
              {sub && {temp6}}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Candiform;
