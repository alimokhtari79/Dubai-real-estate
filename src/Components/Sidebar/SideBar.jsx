import React from 'react';
import Range from '../Range/Range';
import Facilities from './../Facilities/Facilities';

const SideBar = () => {
  return (
    <aside className="filter-aside">
      <div className="filter-aside__header">
        <h4 className="left">FILTERS</h4>
        <p className="right">Reset</p>
      </div>
      <div className="collections filters-type-padding">
        <p className="filters-type__header">Collections</p>
        <div className="collections__item">
          <input type="radio" id="html" value="Apartments" />
          <label htmlFor="html">Apartments (23)</label>
        </div>
        <div className="collections__item">
          <input type="radio" id="html" value="Houses" />
          <label htmlFor="html">Houses (67)</label>
        </div>
      </div>
      <Range title={'Price Range'} measurementUnit={true} />
      <Range title={'Area'} measurementUnit={false} />
      <Facilities />
      <div className="applyFilter">
        <button>Apply</button>
      </div>
    </aside>
  );
};

export default SideBar;
