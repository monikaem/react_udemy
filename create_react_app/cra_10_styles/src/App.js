import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    active: false,
  }
  handleClick = () => {
    this.setState({
      active: !this.state.active,
    })
  }
  render() {
    // const styles = {
    //   btn_off: {
    //     border: '2px solid black',
    //     padding: '10px 20px',
    //     fontFamily: 'arial',
    //     fontSize: 30,
    //     display: 'block',
    //     margin: '20px auto',
    //     backgroundColor: 'white',
    //   },
    //   btn_on: {
    //     border: '2px solid black',
    //     padding: '10px 20px',
    //     fontFamily: 'arial',
    //     fontSize: 30,
    //     display: 'block',
    //     margin: '20px auto',
    //     backgroundColor: 'cadetblue',
    //     color: 'white',
    //   }
    // }
//nadawanie stylow - alternatywnie poniżej
    let btn = {
      border: '2px solid black',
          padding: '10px 20px',
          fontFamily: 'arial',
          fontSize: 30,
          display: 'block',
          margin: '20px auto',
    }
    if (this.state.active) {
      btn.backgroundColor = 'cadetblue';
      btn.color = 'white';
    }
    return (
      <div>
        <button style={btn} onClick={this.handleClick}>{this.state.active ? "Wyłącz" : "Włącz"}</button>
      </div>
    );
  }
}

export default App;
