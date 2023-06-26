import React from "react";
import userIcon from "./userIcon.png"
import logo from "./logo.png"
import './index.css'


const Navbar = () => {


  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} className="logo-img" />
        </div>
        <div className="search">
          <input type="text" name="" id="" placeholder="Search...."/>
          <button type="submit">Search</button>
        </div>
        <div className="icon">
            <img src={userIcon} alt="" srcset="" className="userIcon" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
