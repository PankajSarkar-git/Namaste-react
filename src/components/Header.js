import React from "react";

import { LOGO_URL } from "../utills/contants";
const Header = () => {
  return (
    <div className="nav-bar">
      <div>
        <img src={LOGO_URL} alt="Logo" className="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
