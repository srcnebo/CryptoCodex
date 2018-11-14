import React from "react";
import "./Coins.css";

const Coins = props => {
  const coins =
    props.coins != null ? (
      props.coins
        .filter(coin => {
          return coin.name.toLowerCase().startsWith(props.typing);
        })
        .map(coin => {
          return (
            <div key={coin.id} className="coin">
              <div className="row1">
                <h3 className="coin-symbol">{coin.symbol}</h3>
                <h5 className="coin-rank">rank{coin.rank}</h5>
              </div>
              <div className="row2">
                <h3 className="coin-name">{coin.name}</h3>
                <h4 className="coin-price">
                  USD {Number(coin.price_usd).toFixed(2)}
                </h4>
              </div>
              <div className="row3">
                <div className="coin-history">
                  <h5>Price History</h5>
                  <h5>Change(1h): {coin.percent_change_1h}%</h5>
                  <h5>Change(1D): {coin.percent_change_24h}%</h5>
                  <h5>Change(7D): {coin.percent_change_7d}%</h5>
                </div>

                <h5 className="coin-volume">
                  Volume: {Number(coin.available_supply)}
                </h5>
              </div>
            </div>
          );
        })
    ) : (
      <div>
        <h1>Loading.....</h1>
      </div>
    );

  return coins;
};

export default Coins;
