import './App.css';
import React, { useReducer } from "react";


const initialState = {
  count: 0,
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
      case 'decrement':
        return {count: state.count - 1}
    default:
          throw new Error('Sth went wrong')
  }

}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <p>Stan licznika to {state.count}</p>
      <button onClick={()=> dispatch({type: 'increment'})}>Dodaj 1</button>
      <button onClick={()=> dispatch({type: 'decrement'})}>Odejmij 1</button>
    </div>
  );
}

export default App;
