import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";

const Restaurant = ({ restaurentList, setRestaurentList }) => {
  const [data, setData] = useState([]);
  // console.log(restaurentList);
  // higher oder component

  const Promotedrestaurantcar = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fatchData();
  }, []);
  const fatchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    //optional chaining
    setData(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurentList(
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // conditional Rendering
  // if (resturentList.length === 0) {
  //   return <ShimmerUi />;
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are Offline check your internet connection!</h1>;
  }
  // console.log(restaurentHead);

  return restaurentList.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className=" flex flex-wrap flex-row">
        <div className="flex flex-wrap flex-row justify-center">
          {restaurentList.map((restaurant) => {
            return (
              <Link
                to={"/Restaurants/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {restaurant.info.promoted ? (
                  <Promotedrestaurantcar resList={restaurant} />
                ) : (
                  <RestaurantCard resList={restaurant} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Restaurant;
