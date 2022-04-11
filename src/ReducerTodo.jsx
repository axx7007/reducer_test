import React, { useReducer, useState } from "react";
import Todos from "./Todos";
export const ReducerTodo = () => {
  const [name, setName] = useState("");

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          { id: Date.now(), name: action.payload.name, completed: false },
        ];
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(reducer, []);
  const OnInput = (e) => {
    setName(e.target.value);
  };

  const onAdd = () => {
    dispatch({ type: "add", payload: { name: name } });
  };
  return (
    <div>
      <input type="text" value={name} onChange={OnInput} />
      <button onClick={onAdd}>Add</button>

      {todos.map((value) => {
        return <Todos key={value.id} value={value} />;
      })}
    </div>
  );
};
export default ReducerTodo;
