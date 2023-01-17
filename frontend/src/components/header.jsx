import React from "react";

const Header = () => {
  return (
    <div className="main-header">
      <div className="navbar">
        <img id="logo-nav" alt="logo" src="./logo-white.png" />
        <ul>
          <li>Home</li>
          <li>About</li>
          <a href="#main-body1">
            <li>Login</li>
          </a>
          <a href="#main-body2">
            <li>Register</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
