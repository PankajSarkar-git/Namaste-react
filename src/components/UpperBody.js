import React, { useState } from "react";
import useRestaurant from "../utills/useRestaurant";

const UpperBody = ({ restaurentList, setRestaurentList }) => {
  const [searchText, setSearchText] = useState("");

  const data = useRestaurant();

  const inputData = (e) => {
    const input = e.target.value;
    const search = input.charAt(0).toUpperCase() + input.slice(1);
    setSearchText(search);
  };
  const search = () => {
    if (searchText === "") {
      setRestaurentList(data);
    } else {
      setRestaurentList(
        data.filter((item) =>
          item.data.cuisines
            .map((cuisine) => cuisine.toLowerCase())
            .includes(searchText.toLowerCase())
        )
      );
    }
  };
  return (
    <div>
      <div className="p-4 m-4 flex items-center justify-between">
        <div className="">
          <input
            className="border border-solid border-black w-96 h-10"
            type="text"
            name=""
            id=""
            placeholder="Search...."
            value={searchText}
            onChange={inputData}
          />
          <button type="submit" onClick={search} className="px-8 py-2 rounded-e-lg bg-blue-400 my-4   ">
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className=" bg-blue-500 py-2 px-10 rounded-lg mx-28"
            onClick={() => {
              setRestaurentList(
                restaurentList.filter((res) => res.data.avgRating >= 4)
              );
            }}
          >
            Top Rated Restaurant
          </button>
          <button
            type="button"
            className="  bg-blue-500 py-2 px-10 rounded-lg mr-24"
            onClick={() => {
              setRestaurentList(data);
            }}
          >
            All
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpperBody;
