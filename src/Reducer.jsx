import React, { useReducer, useState } from "react";

const Reducer = () => {
  //   const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);
  const reducer = (state, action) => {
    switch (action.type) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      case "fives":
        return state + action.payload.amount;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);

  const onSelect = (e) => {
    var variable = parseInt(e.target.value);
    setValue(variable);
  };
  return (
    <div>
      <h1>Count{count}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button
        onClick={() => dispatch({ type: "fives", payload: { amount: value } })}
      >
        {value}
      </button>

      <select onChange={onSelect}>
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
