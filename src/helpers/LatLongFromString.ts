/**
 * Returns the latitude and longitude for the Address or Name
 * @param address The address
 * @returns latitide and longitude
 */

export default async function LatLongFromAddress(address: string) {
  if (!address || !address.trim()) {
    throw new Error('Empty Parameter address');
  }

  const geocodeApi = 'https://maps.googleapis.com/maps/api/geocode/json';
  let url = `${geocodeApi}?address=${encodeURIComponent(address)}`;

  url += `&key=${process.env.REACT_APP_GOOGLE_MAP_KEY|| ''}`;
  url += `&language=en`;

  try {
    const response = await fetch(url);
    if (response.ok)
    {
      console.log('Recieved ok');
      const obj = await response.json();
      console.log(obj);
      console.log([obj.results[0].geometry.location.lat, obj.results[0].geometry.location.lng])
      return [obj.results[0].geometry.location.lat, obj.results[0].geometry.location.lng]
    } else {
      console.log('Got status: ' + response.status);
    }
  } catch (e) {
    console.log('Error!');
  }
}
