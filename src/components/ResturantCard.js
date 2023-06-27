import React from "react";

import { CON_URL } from "../utills/contants";

const ResturantCard = ({ resList }) => {
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = resList?.data;
  return (
    <div className="card">
      <img
        src={CON_URL + cloudinaryImageId}
        alt="Biriyani"
        className="card-img"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>{avgRating}</h3>
      <h3> {deliveryTime} Minutes</h3>
      <h3>₹ {costForTwo / 100} FOR TWO</h3>
    </div>
  );
};

export default ResturantCard;
