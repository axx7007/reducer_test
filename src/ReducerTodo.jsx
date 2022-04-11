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
        return <Todos value={value} />;
      })}
    </div>
  );
};

export default ReducerTodo;
