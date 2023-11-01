// import React from "react";
import { CON_URL } from "../utills/contants";
import CardButton from "./CardButton";

const ItemList = ({ items, cartName }) => {
  // console.log(itemCards);
  return (
    <div className="">
      {items.map((item , index) => {
        const { name, price, id, description, imageId } = item?.card?.info;
        return (
          <div
            key={id}
            className="  border-x border-solid border-black border-b flex justify-between px-3"
          >
            <div className="w-8/12">
              <span className="text-xl block my-3 font-bold">{name}</span>
              <span className="text-lg block my-3 font-bold">
                ₹{price / 100}
              </span>
              <p className="text-lg my-3">{description}</p>
            </div>
            <div className="relative flex items-center ">
              <img className="w-48 p-2" src={CON_URL + imageId} />
              <CardButton item={item} name={cartName} index={index} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
