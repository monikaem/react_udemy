import React, { Component } from 'react';
import './App.css';
import Word from "./Word";

class App extends Component {
  state = {
    words: [],
    isLoaded: false,
  }
  componentDidMount() {
    setTimeout(this.fetchData, 3000)
    fetch('data/words.json')
        .then(response => response.json())
        .then(data => {
          this.setState({
            words: data.words
          })
        })
  }
  fetchData = () => {
  this.setState({
    isLoaded: !this.state.isLoaded
  })
  }
  render() {
    const words = this.state.words.map(word => (
        <Word id={word.id} key={word.id} en={word.en} pl={word.pl}/>
    ))
    return (
      <ul>
        {this.state.isLoaded ? words : "Wczytuję dane..."}
      </ul>
    );
  }
}

export default App;
