import React, { useState } from "react";
import UpperBody from "./UpperBody";
import Resturant from "./Restaurant";

const Body = () => {
  const [restaurentList, setRestaurentList] = useState([]);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <UpperBody
        setSearchText={setSearchText}
        searchText={searchText}
        data={data}
        setData={setData}
        restaurentList={restaurentList}
        setRestaurentList={setRestaurentList}
      />
      <Resturant
        setSearchText={setSearchText}
        searchText={searchText}
        data={data}
        restaurentList={restaurentList}
        setRestaurentList={setRestaurentList}
        setData={setData}
      />
    </div>
  );
};

export default Body;
