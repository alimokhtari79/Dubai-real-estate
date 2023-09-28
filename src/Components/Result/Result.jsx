import React from 'react';
import HouseCart from '../HouseCart/HouseCart';
import LongArrow from '../LongArrow/LongArrow';
import FilterIcon from '../FilterIcon/FilterIcon';
import SortIcon from './../SortIcon/SortIcon';

const Result = () => {
  return (
    <div className="result-container">
      <div className="result-header">
        <h2>12 Results</h2>
      </div>
      <div className="filter-sort--mainContainer">
        <div className="filter-sort--container">
          <FilterIcon />
          <p>Filters</p>
        </div>
        <div className="filter-sort--container">
          <SortIcon />
          <p>Sort</p>
        </div>
      </div>
      <div className="houseCarts-layout">
        <HouseCart />
      </div>
      <div className="viewMore-btn-container">
        <button className="viewMore-btn">
          <p>View More</p>
          <LongArrow />
        </button>
      </div>
    </div>
  );
};

export default Result;
