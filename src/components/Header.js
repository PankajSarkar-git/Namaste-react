import React, { useState } from "react";
import{Link } from 'react-router-dom'
import { LOGO_URL } from "../utills/contants";
import useOnlineStatus from "../utills/useOnlineStatus";
const Header = () => {
  const [logButton, setLogButton] = useState("Log In");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between px-8 shadow-md">
      <div>
        <img src={LOGO_URL} alt="Logo" className="w-24" />
      </div>
      <ul className="flex items-center ">
      <li>Online Status : {onlineStatus ? "🟢":"🔴"}</li>
        <li className="p-4 m-2"> <Link to="/">Home</Link></li>
        <li className="p-4 m-2"> <Link to='/About'>About Us</Link></li>
        <li className="p-4 m-2"><Link to= "/Contact">Contact Us</Link></li>
        <li className="p-4 m-2"><Link to= "/grocery">Grocery</Link></li>
        <li className="p-4 m-2">Cart</li>
        <button
          className="p-4 m-2"
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
