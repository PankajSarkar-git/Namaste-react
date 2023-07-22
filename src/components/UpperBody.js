import React,{useState} from "react";
import useRestaurant from "../utills/useRestaurant";

const UpperBody = ({ restaurentList, setRestaurentList }) => {
  const [searchText, setSearchText] = useState("");

  const data = useRestaurant();
  
  const inputData = (e) => {
    const input = e.target.value;
    const search = input.charAt(0).toUpperCase() + input.slice(1);
    setSearchText(search);
  };
  const search = () => {
    if (searchText === "") {
      setRestaurentList(data);
    } else {
      setRestaurentList(
        data.filter((item) =>
          item.data.cuisines
            .map((cuisine) => cuisine.toLowerCase())
            .includes(searchText.toLowerCase())
        )
      );
      
    }
  };
  return (
    <div>
      <div className="funtion-container">
        <div className="search">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search...."
            value={searchText}
            onChange={inputData}
          />
          <button type="submit" onClick={search}>
            Search
          </button>
        </div>
        <div className="options">
          <button
            type="button"
            className="filter-btn"
            onClick={() => {
              setRestaurentList(
                 restaurentList.filter((res) => res.data.avgRating >= 4)
              );
            }}
          >
            Top Rated Restaurant
          </button>
          <button
            type="button"
            className="filter-btn"
            onClick={() => {
              setRestaurentList(data);
            }}
          >
            All
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpperBody;
