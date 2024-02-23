import React, { useState } from "react";
import nomination from './nominate.png';

const Candiform =() =>{
     const [val, setVal] = useState("");
     const [sub, setSub] = useState(false);
     const [temp, setTemp] = useState(val);
     const change = (e) => {
     console.log(e);
     setVal(e.target.value);
     setSub(false);
     console.log(val);
    };
    const submitForm = (e) => {
        if (val === "") {
            alert("Please Enter Proper Value");
            e.preventDefault();
        } else {
            e.preventDefault();
            setSub(true);
            setTemp(val);
            setVal("");
        }
    };
    return(
        <>
            <div style={{height:"10vh", width:"60%", marginLeft:"20%", marginTop:"5vh", color:"#004b80", fontSize:"28px"}}>
                <h1 style={{fontFamily: "'Inter', sans-serif"}}> Candidate Nomination Form</h1>
            </div>
            <div style={{height:"5vh", width:"50%", marginLeft:"25%", marginTop:"2vh", color:"white", fontFamily: "'Montserrat', sans-serif", fontWeight:"bold"}}>
              <h1 style={{fontFamily: "'Montserrat', sans-serif", color:"rgb(0, 171, 228)", fontSize:"22px"}}>  *Please fill out the form carefully* </h1> 
            </div>
            <div style={{height:"80vh", width:"50%", backgroundColor:"white", marginLeft:"26%", marginTop:"4vh", paddingTop:"1.8vh", borderRadius:"6px",  boxShadow:"2px 3px 6px gray"}}>
                <div style={{height:"27vh", width:"45%", backgroundColor:"maroon", marginLeft:"30%"}}>
                    <img src={nomination} alt="illustraion for nomination" style={{height:"32vh", width:"100%"}}/>
                </div>
             <form onSubmit={submitForm}>
                 <div style={{height:"auto", width:"60%", backgroundColor:"gray", marginLeft:"20%", marginTop:"5vh"}}>
                    <label>Name: </label>
                    <input type="text" value={val} name="name" onChange={change} />
                    <br /> <br />
                    <label> Age: </label>
                    <input type="text" value={val} name="name" onChange={change} />
                    <br /> <br />
                    <label> Region: </label>
                    <input type="text" value={val} name="name" onChange={change} />
                    <br /> <br />
                    <label> Id No.: </label>
                    <input type="text" value={val} name="name" onChange={change} />
                    <br /> <br />
                    <label> Party Name: </label>
                    <input type="text" value={val} name="name" onChange={change} />
                    <br /> <br />
                    <br /> <br />
                    <br /> <br />
                 </div>
                 <button type="submit">Submit</button>
                 <br />
                 {sub && <h1>The value is {temp}</h1>}
              </form>
            </div>

        </>
    );
};

export default Candiform;