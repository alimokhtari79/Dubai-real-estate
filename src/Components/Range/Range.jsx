import React from 'react';
import RangeSlider from '../RangeSlider/RangeSlider';

const Range = ({ title, measurementUnit }) => {
  return (
    <div className="filters-type-padding">
      <p className="filters-type__header">{title}</p>
      <div>
        <div>
          <RangeSlider measurementUnit={measurementUnit} />
        </div>
      </div>
    </div>
  );
};

export default Range;
