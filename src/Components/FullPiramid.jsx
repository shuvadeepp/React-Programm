import React, { useState } from 'react';

export default function FullPiramid(){
    const log                           = console.log;
    const [ inputVal, setInputVal ]     = useState('');
    const [ result, setResult ]         = useState();

    const handleInputChange = (e) => {
        setInputVal(e.target.value, 10);
    }

    const isPiramid = () => { 

        if(inputVal == ''){
            setResult("Please enter value");
        }else if(inputVal <= 10){
            let k = 2 * inputVal-2;
            let store='';
            for(let i=0; i<=inputVal; i++){
                for(let j=0; j<=k; j++){
                    store+="&nbsp;";
                }
                k=k-1;
                for(let x=0; x<=i; x++){
                    store+=" * ";
                }
                store+='\n';
    
            }
            // log(store)
            setResult(store); 
        }else{
            setResult("You input greater then 10. Please set upto 1 to 10");
        }
        
    }

    return(
        <>
            <label className="form-label" htmlFor="takeVal"> <b> Enter number to view pyramid: </b> </label><br /><br />
            <div className="d-flex align-items-center">
                <input className="form-control" type="text" id="takeVal" value={inputVal} onChange={handleInputChange} style={{ marginRight: '10px' }} />
                <button onClick={isPiramid}> click </button>  
            </div> 
            {result && (
                <div
                    dangerouslySetInnerHTML={{ __html: result }} // Render HTML
                    style={{ whiteSpace: 'pre-wrap' }} // Preserve spaces and line breaks
                />
            )}
        </>
    );
}