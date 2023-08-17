import React, { useEffect, useState } from "react";
// import "./style.CSS";

const User = (props) => {
    console.log("render");
    const [count] = useState(0);
    const [count2] = useState(1);
    const { name, location } = props;


    // useEffect(() => {
    // const timer =  setInterval(() => {
    //     console.log("fhgfgfg");
    //   }, 1000);
    // console.log("useEffect");

    //   return () => {
    //     clearInterval(timer)
    //     console.log("Unmount");
    //   }
    // }, []);
  return (
    <div className="user-card">
      <h1>count : {count}</h1>
      <h1>count : {count2}</h1>
      <h2>Name : {name}</h2>
      <h3> Location : {location}</h3>
      <h4>Contact : pankajsarkar2345@.gmail.com</h4>
    </div>
  );
};

export default User;
