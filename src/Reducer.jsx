import React, { useReducer, useState } from "react";

export const Reducer = () => {
  //   const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer((state, action) => {
    return 10 - state;
  }, 1);
  return (
    <div>
      <h1>Count{count}</h1>
      <button onClick={() => dispatch()}>+</button>
      <button onClick={() => dispatch()}>-</button>
    </div>
  );
};
export default Reducer;
