import { FoodPantry } from 'src/utils/types';

const SampleFoodPantries: FoodPantry[] = [
  {
    name: 'Dante Church of God',
    address: '410 Dante School Road Knoxville, TN 37918',
    county: 'Knox',
    position: {
      latitude: 36.031195548220644,
      longitude: -83.98594027526391,
    },
    phoneNumber: '(865) 689-4829',
  },
  {
    name: 'Knox Free Food Market',
    address: '6709 Maynardville Pike Knoxville, TN 37918',
    county: 'Knox',
    position: {
      latitude: 36.06860492536348,
      longitude: -83.92789318875579,
    },
    phoneNumber: '(865) 922-0261',
  },
  {
    name: 'Chilhowee Baptist Center',
    address: '1905 E Broadway Maryville, TN 37804',
    county: 'Blount',
    position: {
      latitude: 35.77472539392523,
      longitude: -83.95544423294236,
    },
    phoneNumber: '(865) 981-2992',
  },
];

export default SampleFoodPantries;
