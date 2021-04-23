import { FoodPantry } from 'src/utils/types';
import { API_URL, API_PATHS } from 'src/utils/env';

// getFoodPantries gets data (food pantries) from the Express Server
const getFoodPantries = async (): Promise<FoodPantry[]> => {
  // Get url
  const url = `${API_URL}/${API_PATHS.GET_PANTRIES}`;

  // Fetch and parse data
  const response = await fetch(url);
  const data = await response.json();

  // To be changed later as we create Express REST API
  return data;
};

export default getFoodPantries;
