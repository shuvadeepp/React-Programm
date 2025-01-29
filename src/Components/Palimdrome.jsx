import React, { useState } from 'react';

export default function CheckPalindrome(){
    const log                               = console.log;
    const [ inputVal, setinputVal ]         = useState(''); 
    const [result, setResult]               = useState('');

    function handleInputChange(e){   
        setinputVal(e.target.value); 
    }

    function isPalindrome(){ 
        let revStr = "";
        for (let i = inputVal.length - 1; i >= 0; i--) {
            revStr += inputVal[i];  
        }
        //  log(inputVal +"==="+ revStr);
        if (inputVal.toLowerCase() === revStr.toLowerCase()) {
            // log(55555555)
            setResult(`${inputVal} is a Palindrome.`);
        } else {
            // log(66666666)
            setResult(`${inputVal} is NOT a Palindrome.`);
        }
    }

    return (
        <>
            <label className="form-label" htmlFor="takeVal"> <b> Enter value to palimdrome or not: </b> </label><br /><br />
            <div className="d-flex align-items-center">
                <input className="form-control" type="text" id="takeVal" value={inputVal} onChange={handleInputChange} style={{ marginRight: '10px' }} />
                <button onClick={isPalindrome}>Click</button>  
            </div> 
            {result && (
                <p>
                    <b>{result}</b>
                </p>
            )}
        </>
      );
}