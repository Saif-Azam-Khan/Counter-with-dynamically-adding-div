import React, { useState } from "react";
import Boxes from "./component/Boxes";
import "./App.css";

function App() {
  // State variables for number, whether decrement button is disabled, and boxes to display
  const [number, setNumber] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [newBox, setNewBox] = useState([]);

  // Function to handle increment button click
  let handleAdd = (e) => {
    setNumber(number + 1);
    setDisabled(false);
    setHere(newBox.concat(<Boxes id={number} number={number}/>));
  };

  // Function to handle decrement button click
  let handleSubtract = (e) => {
    let i = number;
    if (i === 1) {
      setDisabled(true);
      setNumber(number - 1);
      setHere(newBox.slice(0,-1));
    } else {
      setNumber(number - 1);
      setHere(newBox.slice(0,-1));
    }
  };

  // Render the app UI
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={handleAdd}>+ 1</button>
      <button id="sub" onClick={handleSubtract} disabled={disabled}>
        - 1
      </button>
      <div>{newBox}</div>
    </div>
  );
}

export default App;




