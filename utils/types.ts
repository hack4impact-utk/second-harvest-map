export interface FoodPantry {
  name: string;
  website: string;
  email: string;
  address: {
    streetNumber: number;
    streetName: string;
    zipCode: number;
  };
  phoneNumber: string;
  position: {
    latitude: number;
    longitude: number;
  };
}
