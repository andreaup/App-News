import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <h1>News Feed </h1>
      <input
        type = "text" 
        name = "Search"
        placeholder = "Search"
        // onChange={this.props.handleChange}
      />
    </div>
  );
};

export default Header
