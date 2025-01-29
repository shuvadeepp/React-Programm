import React, { useState } from 'react';

export default function ReverseString(){
    const log = console.log;
    const [inputVal, setInputVal] = useState("");
    const [result, setResult] = useState();

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    }

    const isReverse = () => {
        if(inputVal == ''){
            setResult("Please enter value");
        }else{
            let rev = '';
            for(let i = inputVal.length -1; i>=0; i--){
                rev += inputVal[i];
            }
            setResult(rev);
        }
         
    }

    return(
        <>
        <label className="form-label" htmlFor="takeVal"> <b> Enter charecter to reverse: </b> </label><br /><br />
            <div className="d-flex align-items-center">
                <input className="form-control" type="text" id="takeVal" value={inputVal} onChange={handleInputChange} style={{ marginRight: '10px' }} />
                <button onClick={isReverse}> click </button>  
            </div> 
            { result && ( <b> {result} </b> ) }
        </>
    );
}