import React, { useEffect,useState } from "react";
import UpperBody from "./UpperBody";
import Resturant from "./Restaurant";
import useRestaurant from "../utills/useRestaurant";

  

const Body = () => {
  const data = useRestaurant();
  const [restaurentList, setRestaurentList] = useState([]);
  // setRestaurentList(data)
  // console.log(data);
  // const data = useRestaurant();

  return (
    <div>
      <UpperBody
        restaurentList={restaurentList}
        setRestaurentList={setRestaurentList}
      />
      <Resturant
        restaurentList={restaurentList}
        setRestaurentList={setRestaurentList}
      />
    </div>
  );
};

export default Body;
