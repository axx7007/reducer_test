import React from "react";

export const Todos = ({ value }) => {
  return (
    <div>
      <h1>{value.name}</h1>
      <button>Delete</button>
    </div>
  );
};
export default Todos;
