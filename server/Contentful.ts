import { createClient } from 'contentful-management';
import { FoodPantry } from 'src/utils/types';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env.local' });

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
      name: entries.items[i].fields.pantryName['en-US'],
      address: entries.items[i].fields.address['en-US'],
      phoneNumber: entries.items[i].fields.phoneNumber['en-US'],
      position: {
        latitude: entries.items[i].fields.position['en-US'].lat,
        longitude: entries.items[i].fields.position['en-US'].lon,
      },
      website: 'website' in entries.items[i].fields ? entries.items[i].fields.website['en-US'] : null,
      email: 'email' in entries.items[i].fields ? entries.items[i].fields.email['en-US'] : null,
    };

    foodPantries.push(foodPantry);
  }

  return foodPantries;
}
