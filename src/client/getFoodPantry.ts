import { FoodPantry } from 'utils/types';
import { API_URL, API_PATHS } from 'utils/env'

// getFoodPantries gets data (food pantries) from the Express Server
export default const getFoodPantries = async (): Promise<FoodPantry[]> => {
  // Get url
  let url = `${API_URL}/${API_PATHS.GET_PANTRIES}`;

  // Fetch and parse data
  let response = await fetch(url);
  let data = await response.json();

  // To be changed later as we create Express REST API
  return data.foodPantries;
}
