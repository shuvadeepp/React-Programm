import React, { useState } from 'react';

export default function LeapYear(){
    const log = console.log;
    const [inputVal, setinputVal] = useState("");
    const [chkYear, setChkYear] = useState("");
    
    const handleInputChange = (e) => {
        setinputVal(e.target.value);
    }

    const isLeapYear = () => {
        if(inputVal == ""){
            setChkYear(`Please enter year value!`);
        }else{
            if(inputVal % 4 === 0 && inputVal % 100 !== 0 || inputVal % 400 === 0){
                setChkYear(`${inputVal} Is leap Year`);
            } else {
                setChkYear(`${inputVal} Is NOT leap Year`);
            }
        }
        
    }

    return(
        <>
            <label className="form-label" htmlFor="takeVal"> <b> Enter Year to check leap year: </b> </label><br /><br />
            <div className="d-flex align-items-center">
                <input className="form-control" type="text" id="takeVal" value={inputVal} onChange={handleInputChange} style={{ marginRight: '10px' }} />
                <button onClick={isLeapYear}>Click</button>  
            </div> 
            { chkYear>0 ? ( <p>  <b>{chkYear}</b>  </p> ) : ( <p style={{color: "red"}}> {chkYear} </p> ) }
        </>
    )
}