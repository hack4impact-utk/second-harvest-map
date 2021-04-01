import { createClient } from 'contentful-management';
import { FoodPantry } from 'src/utils/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const client = createClient({
  accessToken: process.env.CONTENTFUL_PERSONAL_TOKEN as string,
});

/**
 * @returns An array filled with Food Pantry Entries retrieved.
 */
export default async function getFoodPantries(): Promise<FoodPantry[]> {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
  const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT as string);
  const entries = await environment.getEntries({
    content_type: 'foodPantry',
  });

  const foodPantries: FoodPantry[] = [];
  for (let i = 0; i < entries.total; i += 1) {
    const foodPantry: FoodPantry = {
      name: entries.items[i].fields.pantryName,
      address: {
        streetNumber: null,
        streetName: entries.items[i].fields.streetName,
        zipCode: entries.items[i].fields.zipCode,
      },
      phoneNumber: entries.items[i].fields.phoneNumber,
      position: null,
      website: entries.items[i].fields.website,
    };
    foodPantries.push(foodPantry);
  }

  return foodPantries;
}
