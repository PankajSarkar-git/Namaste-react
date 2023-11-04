import React from "react";

import { CON_URL } from "../utills/contants";

const RestaurantCard = ({ resList }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    cloudinaryImageId,
  } = resList;
  // console.log(resList);
  return (
    <div data-testid= "testCardDiv" className=" h-fit  w-80 p-2 border border-solid border-red-700 m-4 rounded-lg bg-gray-100 hover:bg-gray-200 ">
      <img
        src={CON_URL + cloudinaryImageId}
        alt="image"
        className=" w-full pb-1 rounded-lg "
      />
      <div className="mx-3 text-lg">
      <h2 className="py-1 font-bold text-3xl">{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h3 className={ avgRating >= 3.7 ? "text-green-700" :"text-red-500" } >{avgRating}⭐</h3>
      <h3> {sla.deliveryTime} Minutes</h3>
      <h3>{/*₹*/} {costForTwo }</h3>
      </div>
    </div>
  );
};


// higher oder component 


export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute mx-4 my-2 p-2 bg-black text-white rounded-e-lg" >Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
