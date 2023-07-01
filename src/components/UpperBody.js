import React from "react";

const UpperBody = ({
  resturentList,
  setResturentList,
  data,
  setData,
  searchText,
  setSearchText,
}) => {
  const inputData = (e) => {
    const input = e.target.value;
    const search = input.charAt(0).toUpperCase() + input.slice(1);
    console.log(search);
    setSearchText(search);
  };
  const search = () => {
    if (searchText === "") {
      setData(resturentList);
    } else {
      setData(
        resturentList.filter((item) =>
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
              setData(data.filter((res) => res.data.avgRating >= 4));
            }}
          >
            Top Rated Resturant
          </button>
          <button
            type="button"
            className="filter-btn"
            onClick={() => {
              setData(resturentList);
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