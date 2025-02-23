import React, { useState, useEffect } from "react";
import useToggleSate from './toggleHook';

export default function Customhook(){

    const [value, toggleValue]      = useToggleSate();
    const [retValue, setRetValue]   = useState("OFF");
    
    useEffect(() => {
        setRetValue(value ? "NO" : "OFF");
    }, [value]);
    // console.log(value);
    
    return(
        <>
            <label className="form-label" htmlFor="takeVal"> <b> Custom Hook </b> </label><br /><br />
            <div className="d-flex align-items-center"> 
                <button onClick={()=>toggleValue()}> click {retValue} </button>  
            </div>  
            <span>{value ? "Open" : "Close"}</span>
        </>
    );
}