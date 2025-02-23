import React, { useState, useMemo } from "react";

export default function Counter() {
  const [addition, setAddition] = useState(0);
  const [subtraction, setSubtraction] = useState(0);
  const [count, setCount] = useState(0);

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

  // Memoize the computed value
  const computedValue = useMemo(() => {
    console.log("Recalculating computed value...");
    return addition * 10; // Example: A computed value that is double the count
  }, [addition]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2> Using Memo </h2>  
      {/* <h2>Increment: {addition}</h2>
      <h2>Decrement: {subtraction}</h2> */}
      <h2>Counter: {count}</h2>
      <h3>Computed Value (count * 2): {computedValue}</h3>
      <button onClick={decrement} style={{ marginRight: "10px" }}>➖ Decrement</button>
      <button onClick={increment}>➕ Increment</button>
    </div>
  );
};


