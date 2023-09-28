import React from 'react';
import { filtersFacilities } from '../../constants';

const Facilities = () => {
  return (
    <div>
      {filtersFacilities.map((Facility) => (
        <div className="filters-type-padding" key={Facility.title}>
          <h4>{Facility.title}</h4>
          <ul>
            {Facility.options.map((option) => (
              <li key={option.id} className="FacilityOption">
                <input className="optionCheck" type="checkbox" id={option.id} />
                <label className="optionLabel" htmlFor={option.id}>
                  {option.value}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
