import React from "react";
import Dropdown from "react-dropdown";

const defaultOptions = options[0];

const Header = props => {
  return (
    <header>
      <Dropdown
        options={options}
        onChange={this._onSelect}
        value={defaultOption}
        placeholder="Select sort criteria"
      />
      <div className="searchField">
        <input
          id="search-field"
          type="text"
          name="searchBar"
          onChange={props.handleChange}
          value={props.value}
        />
      </div>
    </header>
  );
};

export default Header;
