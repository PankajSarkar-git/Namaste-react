import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Resturant from "./components/Resturant";
import UpperBody from "./components/UpperBody";

const AppLayOut = () => {
  const [resturentList, setResturentList] = useState([]);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");



  return (
    <div className="app">
      <Header />
      <UpperBody
        setSearchText={setSearchText}
        searchText={searchText}
        data={data}
        setData={setData}
        resturentList={resturentList}
        setResturentList={setResturentList}
      />
      <Resturant
        setSearchText={setSearchText}
        searchText={searchText}
        data={data}
        resturentList={resturentList}
        setResturentList={setResturentList}
        setData={setData}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);
