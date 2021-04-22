import getFoodPantries from './Contentful';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env.local' });

export default async function getNNearest(lat: number, long: number, n: number) {

    console.log('Hello');

    const getPantriesList = await getFoodPantries();

    console.log("Got pantry list");

    let distanceMatApi = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=';
    distanceMatApi = distanceMatApi + lat.toString() + ',' + long.toString() + '&destinations=';

    for (let index in getPantriesList) {
        distanceMatApi = distanceMatApi + getPantriesList[index].position.latitude.toString() + '%2C' + getPantriesList[index].position.latitude.toString();
        if (+index < (getPantriesList.length) - 1) {
            distanceMatApi = distanceMatApi + '%7C';
        }
      }


    distanceMatApi += `&key=${process.env.REACT_APP_GOOGLE_MAP_KEY || ''}`;

    console.log(distanceMatApi);

    try {
        const response = await fetch(distanceMatApi);
        if (response.ok) {
          const obj = await response.json();
          let distList = [];
          for (let i in obj.rows)
          {
              for (let j in obj.rows[i].elements) {
                var val = distList.push(obj.rows[i].elements[j].distance.value);
              }
          }
          let distances = distList.map((value, index) => {
            return {index, value};
          });

        distances.sort((a, b) => a.value - b.value);
        console.log(distances);

        let retList = [];
        for (let i = 0; i < n; i++) {
            retList.push(distances[i].index);
        }

        console.log(retList);
        return retList;
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(`Error: ${e}`);
      }

}