import React, { useEffect, useState } from "react";
import resList from "../utills/mockData";
import ResturantCard from "./ResturantCard";
import resList from "../utills/mockData";

const Resturant = () => {
  const [resturentList, setResturentList] = useState(resList);
  //   const [inputItem, setInputItem] = useState(resList);
  const [inputValue, setInputValue] = useState("");
  useEffect(()=>{
    setResturentList(resList);
  } ,[inputValue])

  const inputData = (e) => {
    const input = e.target.value;
    const search = input.charAt(0).toUpperCase() + input.slice(1);
    console.log(search);
    setInputValue(search);
  };
  const search = () => {
   setResturentList(resturentList.filter((item) => item.data.cuisines.includes(inputValue)));
  };
  return (
    <div className="cantainer">
      <div className="funtion-container">
        <div className="search">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search...."
            value={inputValue}
            onChange={inputData}
          />
          <button type="submit" onClick={search}>
            Search
          </button>
        </div>
        <div className="options">
          <button
            type="button"
            className="filter-btn"
            onClick={() => {
              setResturentList(
                resturentList.filter((res) => res.data.avgRating > 4)
              );
            }}
          >
            Top Rated Resturant
          </button>
          <button
            type="button"
            className="filter-btn"
            onClick={() => {
              setResturentList(resList);
            }}
          >
            All
          </button>
        </div>
      </div>

      <div className="card-cantainer">
        {resturentList.map((restaurant) => {
          return (
            <ResturantCard resList={restaurant} key={restaurant.data.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Resturant;
