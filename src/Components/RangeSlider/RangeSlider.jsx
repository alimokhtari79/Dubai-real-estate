import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const RangeSlider = ({ measurementUnit }) => {
  const [rangeValue, setRangeValue] = React.useState([0, 1000000]);

  const updateRange = (event, newValue) => {
    setRangeValue(newValue);
  };

  return (
    <div>
      <Box sx={{ maxWidth: 300 }}>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={rangeValue}
          onChange={updateRange}
          valueLabelDisplay="auto"
          min={0}
          max={3000000}
        />
      </Box>
      <div className="range-price">
        {measurementUnit ? (
          <div className="range-price__items">
            <p>$ P</p>
            <p>{rangeValue[0].toLocaleString()}</p>
          </div>
        ) : (
          <div className="range-price__items">
            <p>{rangeValue[0].toLocaleString()}</p>
            <div className="range-price__items-area">
              m<sup>2</sup>
            </div>
          </div>
        )}
        {measurementUnit ? (
          <div className="range-price__items">
            <p>$ P</p>
            <p>{rangeValue[1].toLocaleString()}</p>
          </div>
        ) : (
          <div className="range-price__items">
            <p>{rangeValue[1].toLocaleString()}</p>
            <div className="range-price__items-area">
              m<sup>2</sup>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RangeSlider;
