import './App.css';
import React, {PureComponent, createRef} from "react";
import Counter from "./Counter";


class App extends PureComponent {
    state = {
        isCounterVisible: true,
    }

  paragraphElement = createRef();

    addChar = () => {
        this.paragraphElement.current.textContent += '!';
    }
    toggleVisibilityCounter = () => {
    this.setState({
        isCounterVisible: !this.state.isCounterVisible
    })}

  render () {
      const counterElement = this.state.isCounterVisible ? <Counter/> : null;

  return (
    <div className="App">
      <p
        ref={this.paragraphElement}>Hello</p>
        <button onClick={this.addChar}>Dodaj !</button>
        <button onClick={this.toggleVisibilityCounter}>Pokaż/Ukryj Counter</button>
        {counterElement}
    </div>
  );
    }
}


export default App;
