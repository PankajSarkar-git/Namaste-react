import React, { useContext, useState } from "react";
import useRestaurant from "../utills/useRestaurant";
import UserContext from "../utills/UserContext";

const UpperBody = ({ restaurentList, setRestaurentList }) => {
  const [searchText, setSearchText] = useState("");
  const {setUserName,loggedinUser} = useContext(UserContext);

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
          item.info.cuisines
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
                restaurentList.filter((res) => res.info.avgRating >= 4.5)
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

          <div>
          <label>User Name: </label>
            <input type="text" className="border border-solid border-black w-48 h-8" value={loggedinUser} onChange={(e)=>{
              const  value = e.target.value;
              setUserName(value)
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperBody;
