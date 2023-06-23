import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>add + 5</button>
      <button onClick={() => dispatch(decrement(10))}>desc - 10</button>
      {isLogged ? <h3>Valuable information I shouldn`t see</h3> : ""}
    </div>
  );
}

export default App;
