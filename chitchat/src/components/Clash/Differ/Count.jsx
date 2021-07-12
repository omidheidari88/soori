import React, { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  const decrement = () => {
    setTimeout(() => {
      setCount((count) => count - 1);
    }, 1000);
  };

  return (
    <div className="counter">
      <button onClick={decrement} className="bg-info">
        -
      </button>
      <p className="count">{count}</p>
      <button onClick={increment} className="bg-success">
        +
      </button>
    </div>
  );
};
export default Count;
