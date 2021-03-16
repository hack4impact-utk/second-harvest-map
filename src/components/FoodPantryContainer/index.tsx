import React, { FunctionComponent } from 'react';
import { FoodPantry } from 'utils/types';
import FoodPantryCard from 'src/components/FoodPantryCard/index';

interface Props {
  pantries: FoodPantry[];
}

const FoodPantryContainer: FunctionComponent<Props> = ({ pantries }) => {
  return (
    <>
      {pantries.map(pantry => (
        <FoodPantryCard key={pantry.name} pantry={pantry} />
      ))}
    </>
  );
};

export default FoodPantryContainer;
