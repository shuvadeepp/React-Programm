
import React, { useState } from 'react';

export default function CheckPrime(){
    const log                               = console.log;
    const [ inpuVal, setinputVal ]          = useState('');
    const [ isPrime, setIsprime ]           = useState(false);
    const [ showResult, setShowResult ]     = useState(false);

    function handleInputChange(e){   // inpit field
        // log(e.target.value);
        setinputVal(e.target.value); 
        // setShowResult(false);
    }

    function checkPrime(){   // button click
        // log("button clicked ::::: " + inpuVal)
        const num = parseInt(inpuVal);
        if(num <= 1){
            setIsprime(false);  
            // setShowResult(true);
        } else {
            let count=0;
            for(let i=1; i<=num; i++){
                if(num % i == 0){
                    count++;
                }
            }
            // log(count)
            setIsprime(count == 2);
            setShowResult(true);
        }

        
    }

    return (
        <>
        <label className="form-label" htmlFor="takeVal"> <b> Enter number to check prime or not: </b> </label><br /><br />
        <div className="d-flex align-items-center">
            <input className="form-control" type="text" id="takeVal" value={inpuVal} onChange={handleInputChange} style={{ marginRight: '10px' }} />
            <button onClick={checkPrime}>Click</button> 
            
        </div>
        {
            showResult && (
                <b> {inpuVal} is { isPrime ? 'Prime number' : 'Not prime number' } </b>
            )
        }
        </>
      );
}