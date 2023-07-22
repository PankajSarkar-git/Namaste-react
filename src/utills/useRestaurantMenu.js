import { useState, useEffect } from "react";
import { MENU_API } from "./contants";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setResturantInfo] = useState(null)
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId + "&submitAction=ENTER");
    const json = await data?.json();
    setResturantInfo(json?.data)
    // setFilterRestaurant(json?.data);
  };
  return restaurantInfo;
};

export default useRestaurantMenu;
