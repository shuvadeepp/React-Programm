import React, { useState } from 'react';

export default function MathTable(){
    const log = console.log;
    const [inputVal, setInputVal] = useState("");
    const [result, setResult] = useState();

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    }

    const isMultiply = () => {
        if(inputVal == ''){
            setResult("Please enter value");
        } else {
            // log(inputVal)
            let res='';
            for(let i=1; i<=10; i++){
                const multiplication = inputVal * i; 
                res += `${inputVal} x ${i} = ${multiplication} \n`; 
            } 
            setResult(res);
            
            // log(result)
        }
    }


    return(
        <>
        <label className="form-label" htmlFor="takeVal"> <b> Enter number to multification table: </b> </label><br /><br />
            <div className="d-flex align-items-center">
                <input className="form-control" type="text" id="takeVal" value={inputVal} onChange={handleInputChange} style={{ marginRight: '10px' }} />
                <button onClick={isMultiply}> Generate </button>  
            </div> 
        { result ? ( <pre> <p>{result}</p> </pre> ) : ( <p style={{color: "red"}}> {result} </p> ) }
        </>
    );
}