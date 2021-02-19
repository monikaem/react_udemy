import React, { useRef, createRef, useState, useEffect } from "react";
import './App.css';

function App() {

    const [counter, setCounter] = useState(0);
const textInputRef = useRef(true);
const numberInputRef = createRef(true);

const focusOnInput = () => {
    textInputRef.current.focus();
}

const increaseCounter = () => {
    setCounter(counter + 1);
}

useEffect(
    () => {
        textInputRef.current.focus();
    }, []
);

console.log(textInputRef);
console.log(numberInputRef);


  return (
    <div className="App">
      <input
      ref={textInputRef}
      type="text"
      />
      <input
          type="number"
          ref={numberInputRef}
      />
      <button onClick={focusOnInput}>Ustaw focus na input</button>
        <button onClick={increaseCounter }>Przerenderuj komponent</button>
    </div>
  );
}

export default App;
