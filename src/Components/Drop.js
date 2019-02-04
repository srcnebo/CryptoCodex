import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Price", "Name", "Rank"];

const Drop = props => {
  return (
    <div>
      <Dropdown
        options={options}
        onChange={() => {
          if (options[2]) {
            props.onSelect("rank");
          } else if (options[1]) {
            console.log("Clicked");
            props.onSelect("name");
          } else if (options[0]) {
            props.onSelect("price_usd");
          }
        }}
        onClick={() => props.click("name")}
        placeholder="Select an option"
      />
    </div>
  );
};

export default Drop;
