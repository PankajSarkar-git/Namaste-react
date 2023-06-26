import React from "react";
import logo from "./user.png"
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
            <h1 className="hedding">REACT</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
