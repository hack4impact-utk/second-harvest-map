import { createClient } from "contentful-management";
import { FoodPantry } from "../../utils/types";
const client = createClient({
    accessToken: process.env.CONTENTFUL_PERSONAL_TOKEN as string,
});


/**
 * @returns An array filled with Food Pantry Entries retrieved.
 */
export async function getFoodPantries() {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE as string);
    const environment = await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT as string);
    const entries = await environment.getEntries({
        content_type: "foodPantry"
    });

    const foodPantries: FoodPantry[] = [];
    for (let i = 0; i < entries.total; i++) {
        const foodPantry: FoodPantry = {
            name: entries.items[i].fields.pantryName,
            address: {
                streetNumber: null,
                streetName: entries.items[i].fields.streetName,
                zipCode: entries.items[i].fields.zipCode
            },
            hours: null,
            phoneNumber: entries.items[i].fields.phoneNumber,
            position: null,
            website: entries.items[i].fields.website
        };
        foodPantries.push(foodPantry);
    }

    return foodPantries;
}
