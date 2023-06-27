import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Resturant from "./components/Resturant";



const AppLayOut = () => {
  return (
    <div className="app">
      <Header />
      <Resturant />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);
