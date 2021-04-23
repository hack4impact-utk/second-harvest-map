import React, { FunctionComponent } from 'react';
import { FoodPantry } from 'src/utils/types';
import FoodPantryCard from 'src/components/FoodPantryCard/index';
import './foodpantryContainer.css';

interface Props {
  pantries: FoodPantry[];
}

const FoodPantryContainer: FunctionComponent<Props> = ({ pantries }) => {
  return (
    <div className="pantryContainer">
      {pantries.map(pantry => (
        <FoodPantryCard key={pantry.name} pantry={pantry} />
      ))}
    </div>
  );
};

export default FoodPantryContainer;
