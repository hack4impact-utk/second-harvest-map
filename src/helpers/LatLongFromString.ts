/**
 * Returns the latitude and longitude for the Address or Name
 * @param address The address
 * @returns latitide and longitude
 */
export default function MapLinkFromAddress(address: string) {
    if (!address || !address.trim()) {
        throw new Error('Empty Parameter address');
      }
    
      const GoogleMapsBaseURL = 'https://maps.googleapis.com/maps/api/geocode/json?';
    
      // Changes space to '+' and commas to '%2C'
      const changedAddress = address.replace(/ /g, '+');
    
      let query = `${GoogleMapsBaseURL}address=${changedAddress}&key=`;
    }
}