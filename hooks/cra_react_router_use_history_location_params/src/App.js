import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Content from './Content';



const App = () => {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Content/>
      </Router>
    </div>
  );
}

export default App;
