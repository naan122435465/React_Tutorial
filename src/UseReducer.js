import { useReducer } from "react";
import React from "react";

// Init state
const initState = 0;

// Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";

//Reducer
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("invalid action");
  }
};
function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div style={{ padding: "0 20px" }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
}
export default UseReducer;
