import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {

    const [counter, setCounter] = useState(0);
    const [isActive, setIsActive] = useState(true)


    const handler = () => {
    setCounter(counter + 1);
    }
    const toggleVisibilityCounter = () => setIsActive(prevValue => !prevValue)

    const counterComponent = isActive ? <Counter rerenderCounter={counter}/> : null;

  return (
    <div>
        <button onClick={toggleVisibilityCounter}>Pokaż/Ukryj komponent</button>
        {counterComponent}
        <button onClick={handler}>Przerenderuj komponent</button>
    </div>
  );
}

const Counter = ({rerenderCounter}) => {

    const [counter, setCounter] = useState(0);

    const handleMouseMove = event => setCounter(event.clientX);

    useEffect(() => {
        window.addEventListener(('mousemove'), handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [rerenderCounter]);


    return (
        <div>
            <p>{counter}</p>
            <p>{rerenderCounter}</p>
        </div>
    )
}

export default App;
