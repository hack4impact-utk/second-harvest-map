/**
 * Returns the Google Maps URL for the Address or Name
 * @param address The address or name to find
 * @returns the url of the address on google maps
 */
export default function MapLinkFromAddress(address: string): string {
  if (!address || !address.trim()) {
    throw new Error('Empty Parameter address');
  }

  const GoogleMapsBaseURL = 'https://www.google.com/maps/search/?api=1&';

  // Changes space to '+' and commas to '%2C'
  const changedAddress = address.replace(/ /g, '+').replace(',', '%2C');

  return `${GoogleMapsBaseURL}query=${changedAddress}`;
}
