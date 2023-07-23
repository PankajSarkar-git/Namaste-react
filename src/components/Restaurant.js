import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";
import useRestaurant from "../utills/useRestaurant";

const Restaurant = ({  restaurentList, setRestaurentList }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fatchData();
  }, []);
  const fatchData =  async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    //optional chaining
    setData(jsonData?.data?.cards[2]?.data?.data?.cards);
    setRestaurentList(jsonData?.data?.cards[2]?.data?.data?.cards)
  };

  // conditional Rendering
  // if (resturentList.length === 0) {
  //   return <ShimmerUi />;
  // }
  
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return(
      <h1>
        You are Offline check your internet connection!
      </h1>
    )
  }
  console.log(restaurentList);

  return restaurentList.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className=" flex flex-wrap flex-row">
      <div className="flex flex-wrap flex-row justify-center">
        {restaurentList.map((restaurant) => {
          return (
            <Link
              to={"/Restaurants/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard resList={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Restaurant;
