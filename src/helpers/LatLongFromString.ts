/**
 * Returns the latitude and longitude for the Address or Name
 * @param address The address
 * @returns latitide and longitude
 */

export default async function LatLongFromAddress(address: string): Promise<[number, number] | undefined> {
  if (!address || !address.trim()) {
    throw new Error('Empty Parameter address');
  }

  const geocodeApi = 'https://maps.googleapis.com/maps/api/geocode/json';
  let url = `${geocodeApi}?address=${encodeURIComponent(address)}`;

  url += `&key=${process.env.REACT_APP_GOOGLE_MAP_KEY || ''}`;
  url += `&language=en`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const obj = await response.json();
      return [obj.results[0].geometry.location.lat, obj.results[0].geometry.location.lng];
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(`Error: ${e}`);
  }
}
