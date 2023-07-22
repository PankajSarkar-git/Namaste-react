import ShimmerUi from "./ShimmerUi";
import UpperBody from "./UpperBody";
import { CON_URL, MENU_API } from "../utills/contants";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utills/useRestaurantMenu";
import "./style.CSS";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurentMenu(resId);
  if (restaurantInfo === null) {
    return <ShimmerUi />;
  }
 
  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    locality,
  } = restaurantInfo?.cards[0]?.card?.card?.info;
  const { offers } =
    restaurantInfo.cards[1]?.card?.card?.gridElements?.infoWithStyle;

  const { cards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  return (
    <>
      <UpperBody />
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
          {cards?.map((menuCard, index) => {
            const { title, name, itemCards } = menuCard?.card?.card;
            return (
              <div className="container-card" key={index}>
                <h1> {title || name}</h1>
                {itemCards?.map((item) => {
                  const { name, imageId, id, price, description } =
                    item.card.info;
                  <h1> {title || name}</h1>;
                  return (
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

export default RestaurentMenu;
