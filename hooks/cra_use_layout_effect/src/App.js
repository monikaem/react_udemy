import React, { useState } from "react";
import Triangle from './Triangle';
import './style.css';

const App = () => {

const [isVisible, setIsVisible] = useState(false);

const handleOnCLick = () => setIsVisible(prev => !prev);

const triangleComponent = isVisible ? <Triangle/> : null;

  console.log('render');
  return (
    <div className="App">
    <button onClick={handleOnCLick}>Toggle</button>
      {triangleComponent}
    </div>
  );
}

export default App;
