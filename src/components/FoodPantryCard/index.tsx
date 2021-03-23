import React, { FunctionComponent } from 'react';
import { FoodPantry } from 'utils/types';

interface Props {
  pantry: FoodPantry;
}

const FoodPantryCard: FunctionComponent<Props> = ({ pantry }) => {
  return (
    <div>
      <h1 id="pantry_name">Name: {pantry.name}</h1>
      <h1 id="pantry_address">
        Address: {pantry.address.streetNumber} {pantry.address.streetName}, {pantry.address.zipCode}
      </h1>
      <h1 id="pantry_email">Email: {pantry.email}</h1>
      <h1 id="pantry_website">Website: {pantry.website}</h1>
      <h1 id="phone-number">Phone Number: {pantry.phoneNumber}</h1>
    </div>
  );
};

export default FoodPantryCard;
