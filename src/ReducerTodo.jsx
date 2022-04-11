import React, { useReducer, useState } from "react";
import Todos from "./Todos";
const ReducerTodo = () => {
  const [name, setName] = useState("");

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          { id: Date.now(), name: action.payload.name, completed: false },
        ];
      case "delete":
        return state.filter((value) => value.id !== action.payload.id);
      case "toggle":
        state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, completed: !item.completed };
          }
          return item;
        });

      default:
        return state;
    }
  };
  const [todos, dispatch] = useReducer(reducer, []);

  const onAdd = () => {
    if (name.length > 0) {
      dispatch({ type: "add", payload: { name: name } });
    }
    setName("");
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>

      {todos.map((value) => {
        return <Todos value={value} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default ReducerTodo;
