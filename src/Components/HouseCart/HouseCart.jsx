import React from 'react';
import LocationIcon from '../LocationIcon/LocationIcon';
import { PropertyCollection } from '../../constants';

const HouseCart = () => {
  console.log(PropertyCollection);
  return PropertyCollection.map((house) => (
    <div key={house.id} className="houseCart-container">
      <figure>
        <img src={house.image} alt={house.name} />
      </figure>
      <div className="houseCart__details">
        <div className="houseCart__details-top">
          <p className="houseCart__details-category">{house.category}</p>
          <h3 className="houseCart__details-name">{house.name}</h3>
          <p className="houseCart__details-description">{house.description}</p>
        </div>
        <div className="houseCart__details-down">
          <div className="houseCart__details-down--location">
            <LocationIcon />
            <div>
              <span>Deira, </span>
              <span>Dubai</span>
            </div>
          </div>
          <div className="houseCart__details-down--price">
            {house.price.toLocaleString()} $
          </div>
        </div>
      </div>
    </div>
  ));
};

export default HouseCart;
