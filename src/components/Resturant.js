import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import ShimmerUi from "./ShimmerUi";

const Resturant = ({ data, setData, resturentList, setResturentList }) => {
  const fatchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData);

    //optional chaining
    setResturentList(jsonData?.data?.cards[2]?.data?.data?.cards);
    setData(jsonData?.data?.cards[2]?.data?.data?.cards);
  };
  useEffect(() => {
    fatchData();
  }, []);

  // conditional Rendering
  // if (resturentList.length === 0) {
  //   return <ShimmerUi />;
  // }
  return resturentList.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="cantainer">
      <div className="card-cantainer">
        {data.map((restaurant) => {
          return (
            <ResturantCard resList={restaurant} key={restaurant.data.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Resturant;
