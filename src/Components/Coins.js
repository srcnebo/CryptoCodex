import React from "react";

const Coins = props => {
  const coins =
    props.coins != null ? (
      props.coins.map(coin => {
        return (
          <div key={coin.id} className="coin">
            <h2>{coin.symbol}</h2> <h2>{coin.rank}</h2>
            <h1>{coin.name}</h1>
            <h2>Price: {Number(coin.price_usd).toFixed(2)}</h2>
            <h1>Total Volume: {Number(coin.available_supply)}</h1>
            <h2>Price change 1h: {coin.percent_change_1h}%</h2>
            <h2>Price change 24h: {coin.percent_change_24h}%</h2>
            <h2>Price change 7d: {coin.percent_change_7d}%</h2>
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
