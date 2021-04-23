export interface FoodPantry {
  name: string;
  website?: string;
  email?: string;
  address: string;
  phoneNumber: string;
  county: string;
  position: {
    latitude: number;
    longitude: number;
  };
}
