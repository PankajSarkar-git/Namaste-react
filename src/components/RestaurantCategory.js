import React, {useState} from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data, setShowIndex ,showItems , /*index*/ }) => {
  // const [showItem , setShowItem] = useState(false);
  // console.log(data);
  const { title, itemCards } = data;


  function hideAndShow() {
    // console.log('clicked');
    // setShowItem(!showItem)
    // setShowIndex(index);
    // setShowIndex(index);
    setShowIndex();
  }
  return (
    <>
      {/* Accordion header */}
      <div className="my-4 pb-3 p-4  bg-gray-100 border-solid border-black border shadow-xl">
        <div className=" flex justify-between border-solid border-black border-b cursor-pointer" onClick={hideAndShow}>
          <span className="text-2xl font-bold pb-3">
            {title} ({itemCards.length})
          </span>
          <span className={showItems ? "rotate-180 pb-6 text-2xl" : "rotate-0 text-2xl"}>🔻</span>
        </div>
        <div>
          {showItems &&<ItemList itemCards={itemCards} />}
        </div>

        {/* Accordion body */}
      </div>
    </>
  );
};

export default RestaurentCategory;
