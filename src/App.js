import React, { Component } from "react";
import Coins from "./Components/Coins";
import "./App.css";

const Count = ({ count, addOne, minOne }) => (
  <div>
    <h1>{count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minOne}>-1</button>
  </div>
);

class App extends Component {
  state = {
    count: 0,
    coins: null
  };
  componentWillMount() {
    console.log("log will mount");
  }
  componentDidMount() {
    const url = "https://api.coinmarketcap.com/v1/ticker/?limit=20";
    fetch(url)
      .then(response => response.json())
      .then(coins => {
        this.setState({
          coins: coins
        });
      });
    console.log("Component did mount log");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");
    console.log(prevState.count);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Value from next state: ", nextState.count);
    console.log("logging from should component update method");
    if (nextState.count >= 6) {
      return false;
    }
    return true;
  }
  addOne = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };
  minOne = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    const coins = this.state.coins;
    console.log(coins);

    console.log("Loging from render method");
    return (
      <div className="App">
        <h1>React Life Cycle Methods</h1>
        <Count
          count={this.state.count}
          addOne={this.addOne}
          minOne={this.minOne}
        />
        <div className="coins">
          <Coins coins={coins} />;
        </div>
      </div>
    );
  }
}

export default App;
