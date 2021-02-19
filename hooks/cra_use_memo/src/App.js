import React, {useState, useMemo} from 'react';
import './App.css';
import Counter from "./Counter";

const App = () => {
    const [state, setState] = useState({x: 0, y: 0});
    const [firstCounter, setFirstCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0);

    const increaseX = () => setState({...state, x: state.x  + 1});
    const increaseY = () => setState({...state, y: state.y  + 1});

  const increaseFirstCounter = () => setFirstCounter(firstCounter + 1);

  const increaseSecondCounter = () => setSecondCounter(secondCounter + 1);

const firstCounterComponent = useMemo(() => <Counter index={1} counter={state} />, [state.x]);
const secondCounterComponent = useMemo(() => <Counter index={2} counter={state}/>, [state.y]);
  return (
    <div className="App">
      <p>Licznik nr 1 wynosi {state.x}</p>
      <p>Licznik nr 2 wynosi {state.y}</p>
        {firstCounterComponent}
        {secondCounterComponent}
        {/*<Counter counter= {state} index={1}/>*/}
        {/*<Counter counter= {state} index={2}/>*/}
        <button onClick={increaseX}>Zwiększ licznik nr 1</button>
        <button onClick={increaseY}>Zwiększ licznik nr 2</button>
    </div>
  );
}

export default App;
