import React, {useState, useCallback} from 'react';
import './App.css';
import Counter from "./Counter";

const App = () => {

    const [firstCounter, setFirstCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0);


  const increaseFirstCounter = useCallback(() => setFirstCounter(firstCounter + 1), [firstCounter]);

  const increaseSecondCounter = useCallback(() => setSecondCounter(secondCounter + 1), [secondCounter]);

const firstCounterComponent = <Counter index={1} callback={increaseFirstCounter} />;
const secondCounterComponent = <Counter index={2} callback={increaseSecondCounter}/>;
  return (
    <div className="App">
      <p>Licznik nr 1 wynosi {firstCounter}</p>
      <p>Licznik nr 2 wynosi {secondCounter}</p>
        {firstCounterComponent}
        {secondCounterComponent}
        {/*<Counter counter= {state} index={1}/>*/}
        {/*<Counter counter= {state} index={2}/>*/}
    </div>
  );
}

export default App;
