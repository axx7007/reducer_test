import React, { useReducer, useState } from "react";

export const Reducer = () => {
  //   const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const reducer = (state, action) => {
    switch (action.type) {
      case "minus":
        return state - 1;
      case "plus":
        return state + 1;
      case "byamount":
        return state + action.payload.amount;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);

  const EditValue = (e) => {
    var variable = parseInt(e.target.value);
    console.log(typeof variable);
    setValue(variable);
  };
  return (
    <div>
      <h1>Count{count}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button
        onClick={() =>
          dispatch({ type: "byamount", payload: { amount: value } })
        }
      >
        {value}
      </button>
      <select onChange={EditValue}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};
export default Reducer;
