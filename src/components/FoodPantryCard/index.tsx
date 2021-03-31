import React, { FunctionComponent } from 'react';
import { FoodPantry } from 'utils/types';
import './pantryCard.css';

interface Props {
  pantry: FoodPantry;
}

const FoodPantryCard: FunctionComponent<Props> = ({ pantry }) => {
  return (
    <div className="Card">
      <h1 className="pantry_name"> {pantry.name}</h1>

      <div className="content_container">
        <div className="address">
          {/* SVG for Address
           */}
          <svg
            className="address_svg"
            width="20"
            height="29"
            viewBox="0 0 20 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0C4.47143 0 0 4.5385 0 10.15C0 17.7625 10 29 10 29C10 29 20 17.7625 20 10.15C20 4.5385 15.5286 0 10 0ZM10 13.775C8.02857 13.775 6.42857 12.151 6.42857 10.15C6.42857 8.149 8.02857 6.525 10 6.525C11.9714 6.525 13.5714 8.149 13.5714 10.15C13.5714 12.151 11.9714 13.775 10 13.775Z"
              fill="black"
            />
          </svg>
          <h1 className="pantry_address">
            {pantry.address.streetNumber} {pantry.address.streetName}, {pantry.address.zipCode}
          </h1>
        </div>

        <div className="number">
          {/* SVG for Phone Number
           */}
          <svg
            className="phone_svg"
            width="20"
            height="23"
            viewBox="0 0 20 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.93845 9.54621C5.50513 13.0142 8.02921 15.845 11.1082 17.6219L13.5017 14.9259C13.7955 14.595 14.2306 14.4847 14.6114 14.6318C15.83 15.0852 17.1464 15.3303 18.4955 15.3303C19.0939 15.3303 19.5835 15.8818 19.5835 16.5557V20.8325C19.5835 21.5065 19.0939 22.058 18.4955 22.058C8.27945 22.058 0 12.7324 0 1.22544C0 0.55145 0.489586 0 1.08797 0H4.89586C5.49425 0 5.98383 0.55145 5.98383 1.22544C5.98383 2.75725 6.20143 4.22778 6.60397 5.60028C6.72365 6.02918 6.63661 6.50711 6.33198 6.85023L3.93845 9.54621Z"
              fill="black"
            />
          </svg>
          <h1 className="phone-number">{pantry.phoneNumber}</h1>
        </div>

        {pantry.website && (
          <div className="website">
            {/* SVG for Website
             */}
            <svg
              className="website_svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM13.2 18H10.8V10.8H13.2V18ZM13.2 8.4H10.8V6H13.2V8.4Z"
                fill="black"
              />
            </svg>
            <a rel="noreferrer" target="_blank" href={pantry.website} className="pantry_website">
              {pantry.website}
            </a>
          </div>
        )}

        {pantry.email && (
          <div className="email">
            {/* SVG for Email
             */}
            <svg
              className="email_svg"
              width="26"
              height="21"
              viewBox="0 0 26 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.4 0H2.6C1.17 0 0.013 1.18125 0.013 2.625L0 18.375C0 19.8188 1.17 21 2.6 21H23.4C24.83 21 26 19.8188 26 18.375V2.625C26 1.18125 24.83 0 23.4 0ZM23.4 5.25L13 11.8125L2.6 5.25V2.625L13 9.1875L23.4 2.625V5.25Z"
                fill="black"
              />
            </svg>
            <a href={`mailto:${pantry.email}`} className="pantry_email">
              {pantry.email}
            </a>
          </div>
        )}
      </div>

      <button type="button" className="get_directions">
        Get Directions
      </button>
    </div>
  );
};

export default FoodPantryCard;
