import React, { useState } from "react";

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
             <u> <h1 style={{fontFamily: "'Montserrat', sans-serif", color:"rgb(0, 171, 228)", fontSize:"22px"}}>  *Please fill out the form carefully* </h1> </u>
            </div>
            <div style={{height:"80vh", width:"50%", backgroundColor:"red", marginLeft:"26%", marginTop:"4vh"}}>
             <form onSubmit={submitForm}>
                 <label>Name: </label>
                 <input type="text" value={val} name="name" onChange={change} />
                 <br />
                 <button type="submit">Submit</button>
                 <br />
                 {sub && <h1>The value is {temp}</h1>}
              </form>
            </div>

        </>
    );
};

export default Candiform;