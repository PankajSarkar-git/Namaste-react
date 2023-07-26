import ShimmerUi from "./ShimmerUi";
import UpperBody from "./UpperBody";
import { CON_URL, MENU_API } from "../utills/contants";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utills/useRestaurantMenu";
import RestaurentCategory from "./RestaurantCategory";
import Offers from "./Offers";
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
    latLong,
    costForTwoMessage,
    locality,
  } = restaurantInfo?.cards[0]?.card?.card?.info;
  const { offers } =
    restaurantInfo.cards[1]?.card?.card?.gridElements?.infoWithStyle;

  const { cards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  // console.log(cards);

  const categories = cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(categories);

  return (
    <>
      <div className="mx-24 my-4 ">
        <div className="container border border-solid border-black">
          <div className="container m-t-6 flex justify-between items-center border-y border-solid border-black px-5 bg-sky-200  ">
            <div className="right-side">
              <h1 className="font-bold text-4xl py-4">{name}</h1>
              <p className="text-lg my-2">{cuisines}</p>
              <p className="text-lg my-2">{locality}</p>
            </div>
            <div className="left-side">
              <h1
                className={avgRating >= 3.7 ? "text-green-700" : "text-red-500"}
              >
                {avgRating} ⭐
              </h1>
              <p>{totalRatingsString}</p>
            </div>
          </div>

          <div className="container py-5 px-5 border-b border-solid border-black">
            <span>{costForTwoMessage}</span>
            <span> ⏰ {parseInt(latLong)} MIN</span>
          </div>

          <Offers offers={offers} />
        </div>

        <div className="menu">
          {categories.map((category, index) => {
            return (
              <RestaurentCategory key={category?.card?.card?.title} data={category?.card?.card} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RestaurentMenu;
