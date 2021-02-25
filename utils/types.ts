export interface FoodPantry {
  name: string;
  address: {
    streetNumber: number;
    streetName: string;
    zipCode: number;
  };
  hours: {
    monday: string[];
    tuesday: string[];
    wednesday: string[];
    thursday: string[];
    friday: string[];
    saturday: string[];
    sunday: string[];
  };
  phoneNumber: string;
  position: {
    latitude: number;
    longitude: number;
  };
  website?: string;
}
