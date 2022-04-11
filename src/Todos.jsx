import React from "react";

export const Todos = ({ value, dispatch }) => {
  return (
    <div>
      <h1 style={{ color: value.completed ? "red" : "black" }}>{value.name}</h1>
      <button
        onClick={() => dispatch({ type: "toggle", payload: { id: value.id } })}
      >
        Toggle
      </button>
      <button
        onClick={() => dispatch({ type: "delete", payload: { id: value.id } })}
      >
        Delete
      </button>
    </div>
  );
};
export default Todos;
