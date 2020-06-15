import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(key, value){
    this.setState({
      [key]: value
    })
  }
  addItem() {
    //create id for new items
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    //copying current list
    const list = [...this.state.list];

    //add new item to list 
    list.push(newItem);

    //update list 
    this.setState({
      list,
      newItem:""
    })
  }
  
  render() {
      return (
      <div className="main">
        <h1 className="head">Get It Done</h1>
        <div className="input">
        <button>Hide/Show</button>
        <br></br>
        <input
            type="text"
            placeholder="Enter things you have to do"
            className="thingsToDo"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>Create List</button>
          <br></br>
            {this.state.list.map(item => {
              return (
                <p key={item.id}>
                  {item.value}
                  <input type="checkbox"/>
                </p>
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;
