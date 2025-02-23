import React, { useState } from "react";

function useToggleSate(initialValue=false){
    const [value, setValue ] = useState(initialValue);

    const toggleValue = () => setValue((preValue) => !preValue); 

    return [value, toggleValue];
}
export default useToggleSate;