import React, { useState } from "react";
import{Link } from 'react-router-dom'
import { LOGO_URL } from "../utills/contants";
import useOnlineStatus from "../utills/useOnlineStatus";
const Header = () => {
  const [logButton, setLogButton] = useState("Log In");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="nav-bar">
      <div>
        <img src={LOGO_URL} alt="Logo" className="logo" />
      </div>
      <ul>
      <li>Online Status : {onlineStatus ? "🟢":"🔴"}</li>
        <li> <Link to="/">Home</Link></li>
        <li> <Link to='/About'>About Us</Link></li>
        <li><Link to= "/Contact">Contact Us</Link></li>
        <li><Link to= "/grocery">Grocery</Link></li>
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
