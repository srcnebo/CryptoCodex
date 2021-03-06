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

  sortCoins = type => {
    const unsortedCoins = [...this.state.coins];
    unsortedCoins.sort((a, b) => {
      let valueA;
      let valueB;
      if (type === "rank" || type === "price_usd") {
        valueA = parseFloat(a[type]);
        valueB = parseFloat(b[type]);
      } else {
        valueA = a[type].toLowerCase();
        valueB = b[type].toLowerCase();
      }

      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      coins: unsortedCoins
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
        {/* <Drop nSelect={this.sortName} placeholder="Select an option" /> */}
        {/* <Drop onSelect={this.sortCoins} /> */}
        <button onClick={() => this.sortCoins("name")}>By name</button>
        <button onClick={() => this.sortCoins("rank")}>By Rank</button>
        <button onClick={() => this.sortCoins("price_usd")}>By Price</button>

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
