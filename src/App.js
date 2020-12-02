/** @format */

import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [colors] = useState([
    "red",
    "yellow",
    "blue",
    "green",
    "purple",
    "pink",
  ]);
  const [randomColor, setRandomColor] = useState(["white"]);
  const increment = () => {
    setCounter(counter + 1);
    const random = colors[Math.floor(Math.random() * colors.length)];
    setRandomColor(random);
  };

  const decrement = () => {
    setCounter(counter - 1);
    const random = colors[Math.floor(Math.random() * colors.length)];
    setRandomColor(random);
  };

  const reset = () => {
    setCounter(0);
    setRandomColor("white");
  };

  return (
    <div className="app">
      <div style={{ backgroundColor: randomColor }} className="card">
        <h1>{counter}</h1>
        <div className="button_container">
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
