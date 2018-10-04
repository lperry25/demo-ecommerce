import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import './components/MyNavBar';
import MyNavBar from "./components/MyNavBar";
import Products from "./components/Products";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavBar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Products/>
        </header>
      </div>
    );
  }
}

export default App;
