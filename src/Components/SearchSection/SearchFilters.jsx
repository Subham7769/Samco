import React from "react";
import FilterTile from "./FilterTile";
import { FaFilter } from "react-icons/fa";

const SearchFilters = () => {

  function expand(e){
    console.log(e.target.parentElement)
    e.target.parentElement.classList.toggle('expand');
  }

  return (
    <div className="SearchFilterSection">
      <h3 onClick={expand}><FaFilter style={{ color: "white" }} /> Select Your Filters </h3>
      <div className="SearchFiltersContainer">
        {/* first filter */}
        <div className="searchFilter">
          <div className="filter">
            <h3>Asset Class</h3>
            <div className="tileContainer">
              <FilterTile color={"orange"} count={"537"} heading={"Equity"} />
              <FilterTile color={"skyblue"} count={"393"} heading={"Debt"} />
              <FilterTile color={"brown"} count={"14"} heading={"Commodity"} />
              <FilterTile color={"purple"} count={"146"} heading={"Hybrid"} />
              <FilterTile color={"coral"} count={"101"} heading={"Other"} />
            </div>
          </div>
          <div className="filter">
            <h3>Rating</h3>
            <div className="tileContainer">
              <FilterTile color={"seagreen"} count={"23"} heading={"5 Start"} />
              <FilterTile color={"seagreen"} count={"130"} heading={"4 Start"} />
              <FilterTile color={"seagreen"} count={"106"} heading={"3 Start"} />
              <FilterTile color={"seagreen"} count={"163"} heading={"2 Start"} />
              <FilterTile color={"seagreen"} count={"115"} heading={"1 Start"} />
            </div>
          </div>
        </div>

        {/* second filter */}
        <div className="searchFilter">
          <div className="filter">
            <h3>Popular Filters</h3>
            <div className="tileContainer">
              <FilterTile color={"skyblue"} count={"36"} heading={"ELSS"} />
              <FilterTile color={"skyblue"} count={"23"} heading={"Multicap Equity"} />
              <FilterTile color={"skyblue"} count={"146"} heading={"Hybrid"} />
              <FilterTile color={"skyblue"} count={"35"} heading={"Liquid"} />
              <FilterTile color={"skyblue"} count={"67"} heading={"Short Term debt"} />
            </div>
          </div>
        </div>

        {/* third Filter */}
        <div className="searchFilter">
          <div className="filter">
            <h3>Minimum Investment Range</h3>
            <div className="tileContainer">
              <FilterTile color={"lightgreen"} count={"36"} heading={"500"} value={"Less Than"} />
              <FilterTile color={"lightgreen"} count={"23"} heading={"5000"} value={"Less Than"} />
              <FilterTile color={"lightgreen"} count={"146"} heading={"5000"} value={"Greater Than"} />
            </div>
          </div>
        </div>

        {/* fourth Filter */}
        <div className="searchFilter special">
          <div className="filter">
            <div className="tileContainer specialTile">
              <FilterTile color={"white"} count={"36"} heading={"Smart SIP"} />
              <FilterTile color={"coral"} count={"23"} heading={"Fund House"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
