import { FoodPantry } from 'src/utils/types';

const hasTextMatch = (textQuery: string, pantry: FoodPantry): boolean => {
  return Boolean(
    pantry.name.search(textQuery) || pantry.address.streetName.search(textQuery) || pantry.county.search(textQuery)
  );
};

export default hasTextMatch;
