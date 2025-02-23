import React, { useState } from "react";

export default function CounterSimple(){
    const [addition, setAddition] = useState(0);
    const [subtraction, setSubtraction] = useState(0);
    const [count, setCount] = useState(0);

  /* const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  }; */

  const increment = () => {
    // setAddition((prevCount) => prevCount + 1);
    setAddition((prevCount) => {
      const newAdd =  prevCount + 1;
      setCount(newAdd);
      return newAdd;
    });
  };

  const decrement = () => {
    // setSubtraction((prevCount) => prevCount - 1);
    setSubtraction((prevCount) => {
      const newSub =  prevCount - 1;
      setCount(newSub);
      return newSub;
    });
  };

  // Computation happens every render, even when not needed
  function multiply(){
    console.log("i'm re-rendering");
    return addition * 10;
  }
//   const computedValue = count * 2;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2> Without using Memo </h2>
      <h2>Counter: {count}</h2>
      {/* <h3>Computed Value: {computedValue}</h3> */}
      <h3>Multiply Value: {multiply()}</h3>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={increment}>➕ Increment</button>
    </div>
  );
};


