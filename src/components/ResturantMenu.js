import React, { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { CON_URL, MENU_API } from "../utills/contants";
import { useParams } from "react-router-dom";
import "./style.CSS";

const ResturentMenu = () => {
  const [resturantInfo, setResturantInfo] = useState(null);
  const [filterResturant,setFilterResturant] = useState([]);
  const { resId } = useParams();

  const fetchData = async () => {
    // const data = await fetch(MENU_API + resId + "&submitAction=ENTER");
    const data = await fetch( MENU_API+resId+"&submitAction=ENTER");

    const json = await data.json();
    console.log(json);
    setResturantInfo(json?.data);
    setFilterResturant(json?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (resturantInfo === null) {
    return <ShimmerUi />;
  }

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    locality,
  } = resturantInfo?.cards[0]?.card?.card?.info;
  const { offers } =
    resturantInfo.cards[1]?.card?.card?.gridElements?.infoWithStyle;

  const { cards } = resturantInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <>
      <div className="main-container">
        <div className="container-card">
          <div className="container">
            <div className="right-side">
              <h1 className="hotel-name">{name}</h1>
              <p>{cuisines}</p>
              <p>{locality}</p>
            </div>
            <div className="left-side">
              <h1 className="rating">{avgRating}</h1>
              <p>{totalRatingsString}</p>
            </div>
          </div>

          <div className="container">
            <span>{costForTwoMessage}</span>
          </div>

          <div className="container offer-container">
            {offers.map((offer, index) => {
              const { header, description } = offer.info;
              return (
                <div className="offer-card" key={index}>
                  <h3> {header}</h3>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="menu">
          {cards.map((menuCard, index) => {
            const { title, name, itemCards } = menuCard?.card?.card;
            console.log(itemCards);
            return (
              <div className="container-card" key={index}>
                <h1> {title || name}</h1>
                {itemCards?.map((item, index) => {
                  const { name, imageId, id, price, description } =
                    item.card.info;
                  return (
                    <>
                      <div className="container" key={id}>
                        <div className="right-side">
                          <h3>{name}</h3>
                          <p className="price">Price: {price / 100}</p>
                          <p>{description}</p>
                        </div>
                        <div className="left-side">
                          <img src={CON_URL + imageId} alt="" id="img-food" />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ResturentMenu;
