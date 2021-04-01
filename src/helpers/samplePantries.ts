import { FoodPantry } from 'src/utils/types';

const SampleFoodPantries: FoodPantry[] = [
  {
    name: 'Dante Church of God',
    address: {
      streetNumber: 410,
      streetName: 'Dante School Road Knoxville, TN',
      zipCode: 37918,
    },
    position: {
      latitude: 36.031195548220644,
      longitude: -83.98594027526391,
    },
    phoneNumber: '(865) 689-4829',
  },
  {
    name: 'Knox Free Food Market',
    address: {
      streetNumber: 6709,
      streetName: 'Maynardville Pike Knoxville, TN',
      zipCode: 37918,
    },
    position: {
      latitude: 36.06860492536348,
      longitude: -83.92789318875579,
    },
    phoneNumber: '(865) 922-0261',
  },
  {
    name: 'Chilhowee Baptist Center',
    address: {
      streetNumber: 1905,
      streetName: 'E Broadway Maryville, TN',
      zipCode: 37804,
    },
    position: {
      latitude: 35.77472539392523,
      longitude: -83.95544423294236,
    },
    phoneNumber: '(865) 981-2992',
  },
];

export default SampleFoodPantries;
