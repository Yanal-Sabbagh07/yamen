import React from "react";
import "../../styles/pages/homepage/Header.scss";
const Header = () => {
  return (
    <header className="Home-header">
      <div className="header-text1">
        <h1>
          <em>Vision Express</em> Financial brokers
        </h1>
      </div>
      <div className="header-text2">
        <h2>
          Consultants endeavor to facilitate financial transactions and manage
          buiseness operations
        </h2>
      </div>
      <div className="buttons-container"></div>
    </header>
  );
};

export default Header;
