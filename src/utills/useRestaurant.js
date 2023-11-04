import { useEffect, useState } from "react";

const useRestaurant = () => {
  const [data, setData] = useState([]);

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
    setData(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return data;
};

export default useRestaurant;