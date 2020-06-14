import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render() {
      return (
      <div className="main">
        <h1 className="head">Get It Done</h1>
        <div className="input">
          <input className="thingsToDo" type="text" placeholder="Enter things you have to do"></input>
          <button>Create List</button>
        </div>
        <button>Hide/Show</button>
        <p id="demo"></p>
      </div>
    );
  }
}

export default App;
