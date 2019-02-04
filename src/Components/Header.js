import React from "react";

const Header = props => {
  return (
    <header>
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
