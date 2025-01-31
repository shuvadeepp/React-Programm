import React, { useState } from "react";

export default function SinglePyramid(){

    const log = console.log;
    const [inputVal , setInputVal] = useState('');
    const [result , setResult] = useState();

    const handleInputChange = (e) => {
        setInputVal(e.target.value, 10);
    }

    const isSinglePyramid = () => {
        let stars=''
        for(let i=0; i<=inputVal; i++){
            for(let k=0; k<=i; k++){
                stars+=' * ';
            }
            stars+='\n';
        }
        stars+='\n';
        log(stars);
        setResult(stars);
    }

    return(
        <>
            <label className="form-label" htmlFor="takeVal"> <b> Enter number to view single pyramid: </b> </label><br /><br />
            <div className="d-flex align-items-center">
                <input className="form-control" type="text" id="takeVal" value={inputVal} onChange={handleInputChange} style={{ marginRight: '10px' }} />
                <button onClick={isSinglePyramid}> click </button>  
            </div> 

            {result && (
                <pre
                    dangerouslySetInnerHTML={{ __html: result }} // Render HTML safely
                />
            )}
        </>
    );
}