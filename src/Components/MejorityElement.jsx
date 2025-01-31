import React, { useState } from 'react';

export default function MejorityElement() {
    const log = console.log;
    const [inputVal, setinputVal] = useState('');
    const [names, setNames] = useState([]);
    const [mostFrequentElement, setMostFrequentElement] = useState(null);

    const handleInputChange = (e) => {
        setinputVal(e.target.value);
    };

    const isMejority = () => {
        if (inputVal.trim() !== '' && names.length < 10) {
            // Add inputVal to names array
            const updatedNames = [...names, inputVal];
            setNames(updatedNames);
            setinputVal('');
            
            // Find the most frequent element
            const frequencyMap = {};
            let maxCount = 0;
            let mostFrequent = null;

            updatedNames.forEach((item) => {
                frequencyMap[item] = (frequencyMap[item] || 0) + 1;  
                if (frequencyMap[item] > maxCount) {
                    maxCount = frequencyMap[item];
                    mostFrequent = item;
                }
            });
 
            setMostFrequentElement(mostFrequent);
        }else if(inputVal === ''){ 
            setMostFrequentElement('Field can not be blank!');
        } 
    };

    return (
        <>
            <label className="form-label" htmlFor="takeVal">
                <b> Enter Your Country Name : </b>
            </label>
            <br />
            <br />
            <div className="d-flex align-items-center">
                <input className="form-control" type="text" id="takeVal" value={inputVal} onChange={handleInputChange} style={{ marginRight: '10px' }}
                />
                <button onClick={isMejority}> Click </button>
            </div>

            <br />
            <br />

            {/* Display the names array */}
            {names.length > 0 && (
                <b className="border p-2 my-1 rounded"> [{names.join(', ')}] </b>
            )}

        
            {mostFrequentElement !== null && (
                <div className="mt-3">
                    <b>Most Frequent Element: </b>
                    <span className="text-success">{mostFrequentElement}</span>
                </div>
            )}

            {mostFrequentElement === null && names.length > 0 && (
                <div className="mt-3">
                    <b>No Majority Element Found</b>
                </div>
            )}
        </>
    );
}