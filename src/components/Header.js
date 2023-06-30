import React, { useState } from "react";

import { LOGO_URL } from "../utills/contants";
const Header = () => {
  const [logButton, setLogButton] = useState("Log In");
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
        <button
          className="log-buttton"
          onClick={() => {
            logButton === "Log In"
              ? setLogButton("Log Out")
              : setLogButton("Log In");
          }}
        >
          {logButton}
        </button>
      </ul>
    </div>
  );
};

export default Header;
