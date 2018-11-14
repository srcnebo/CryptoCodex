import React, { Component } from "react";
import Coins from "./Components/Coins";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";

class App extends Component {
  state = {
    coins: null,
    typing: ""
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
  handleChange = e => {
    this.setState({
      typing: e.target.value.toLowerCase()
    });
  };

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

  render() {
    const coins = this.state.coins;
    console.log(coins);

    console.log("Loging from render method");
    return (
      <div className="App">
        <div>
          <Header value={this.state.typing} handleChange={this.handleChange} />
        </div>
        <div className="coins container">
          <Coins coins={coins} typing={this.state.typing} />
        </div>
        <Footer copyrights="&copy; 2018" />
      </div>
    );
  }
}

export default App;
