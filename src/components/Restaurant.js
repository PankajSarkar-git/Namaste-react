import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";

const Restaurant = ({ data, setData, restaurentList, setRestaurentList }) => {


  const fatchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData);

    //optional chaining
    setRestaurentList(jsonData?.data?.cards[2]?.data?.data?.cards);
    setData(jsonData?.data?.cards[2]?.data?.data?.cards);
  };
  useEffect(() => {
    fatchData();
  }, []);

  // conditional Rendering
  // if (resturentList.length === 0) {
  //   return <ShimmerUi />;
  // }


  return restaurentList.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="cantainer">
      <div className="card-cantainer">
        {data.map((restaurant) => {
          return (
            <Link to={"/Restaurants/"+restaurant.data.id} key={restaurant.data.id}><RestaurantCard resList={restaurant}  /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Restaurant;
