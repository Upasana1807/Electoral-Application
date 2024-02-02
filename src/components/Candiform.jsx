import React, { useState } from "react";

const Candiform =() =>{
    const [val, setVal] =useState("");
    const change = (e) =>{
        setVal(e.target.value);
    }
    return(
        <>
            <form>
                <label> Name:</label>
                <input type="text" value={val} name="name" onChange={change}/>
                <button type="submit"> Submit</button>
            </form>
        </>
    );
};

export default Candiform;