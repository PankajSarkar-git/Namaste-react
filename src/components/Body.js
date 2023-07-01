import React, {useState} from "react";
import UpperBody from "./UpperBody";
import Resturant from "./Resturant";

const Body = () => {
    const [resturentList, setResturentList] = useState([]);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  return (
    <div>
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

export default Body;
