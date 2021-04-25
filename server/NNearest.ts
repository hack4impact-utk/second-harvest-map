import dotenv from 'dotenv';
import fetch from 'node-fetch';
import getFoodPantries from './Contentful';

dotenv.config({ path: '../.env.local' });

interface DistanceElement {
  status: string;
  duration: {
    value: number;
    text: string;
  };
  distance: {
    value: number;
    text: string;
  };
}

interface DistanceMatrix {
  rows: Array<{
    elements: Array<DistanceElement>;
  }>;
}
/**
 * Returns indices of pantry list in order of n closest to point
 * @param lat latitude
 * @param long longitude
 * @param n number of closest pantries
 * @returns array of indices
 */
export default async function getNNearest(lat: number, long: number, n = 9): Promise<string[]> {
  const PantriesList = await getFoodPantries();

  let distanceMatApi = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=';

  distanceMatApi = `${distanceMatApi}${lat.toString()},${long.toString()}&destinations=`;

  PantriesList.forEach((_, index) => {
    distanceMatApi = `${distanceMatApi}${PantriesList[index].position.latitude.toString()}%2C${PantriesList[
      index
    ].position.longitude.toString()}`;
    if (+index < PantriesList.length - 1) {
      distanceMatApi = `${distanceMatApi}%7C`;
    }
  });

  distanceMatApi += `&key=${process.env.REACT_APP_GOOGLE_MAP_KEY || ''}`;

  try {
    const response = await fetch(distanceMatApi);
    if (response.ok) {
      const obj = (await response.json()) as DistanceMatrix;
      const Rows = obj.rows;
      const distList: number[] = [];

      Rows.forEach(outer => {
        outer.elements.forEach(inner => distList.push(inner.distance.value));
      });

      const distances = distList.map((value, index) => {
        return { index, value };
      });

      distances.sort((a, b) => a.value - b.value);

      const retList = distances.map(dist => PantriesList[dist.index].name).splice(0, n);

      return retList;
    }
    return [];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(`Error: ${e}`);
    return [];
  }
}
