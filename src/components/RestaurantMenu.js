import ShimmerUi from "./ShimmerUi";
import UpperBody from "./UpperBody";
import { CON_URL, MENU_API } from "../utills/contants";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utills/useRestaurantMenu";
// import "./style.CSS";

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
      <div className="mx-24 my-4 ">
        <UpperBody />
        <div className="container border border-solid border-black">
          <div className="container m-t-6 flex justify-between items-center border-y border-solid border-black px-5 bg-sky-200  ">
            <div className="right-side">
              <h1 className="font-bold text-4xl py-4">{name}</h1>
              <p className="text-lg my-2">{cuisines}</p>
              <p className="text-lg my-2">{locality}</p>
            </div>
            <div className="left-side">
              <h1 className={ avgRating >= 3.7 ? "text-green-700" :"text-red-500" }>{avgRating} ⭐</h1>
              <p>{totalRatingsString}</p>
            </div>
          </div>

          <div className="container py-5 px-5 border-b border-solid border-black">
            <span>{costForTwoMessage}</span>
          </div>

          <div className="container h-36 flex justify-between items-center py-5 px-5 border-b border-solid border-black ">
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
              <div className="" key={index}>
                <h1 className="py-1 px-5 text-4xl font-bold "> {title || name}</h1>
                {itemCards?.map((item) => {
                  const { name, imageId, id, price, description } =
                    item.card.info;
                  <h1> {title || name}</h1>;
                  return (
                    <div className="py-5 px-5 border border-solid border-black my-4 flex justify-between" key={id}>
                      <div className="right-side">
                        <h3>{name}</h3>
                        <p className="price">Price: {price / 100}</p>
                        <p>{description}</p>
                      </div>
                      <div className="left-side">
                        <img src={CON_URL + imageId} alt="" className="w-32" />
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
