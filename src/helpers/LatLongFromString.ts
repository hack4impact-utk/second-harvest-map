/**
 * Returns the latitude and longitude for the Address or Name
 * @param address The address
 * @returns latitide and longitude
 */


export default async function LatLongFromAddress(address: string) {
    if (!address || !address.trim()) {
        throw new Error('Empty Parameter address');
      }
    
      const geocode_api = 'https://maps.googleapis.com/maps/api/geocode/json';
      let url = `${geocode_api}?address=${encodeURIComponent(address)}`;
    
      url += `&key=`;
      url += `&language=en`;

    const response = await fetch(url);

    return response.json();
}
/*
    const json = await response.json();

    if (json.status != "OK")
    {
      console.warn(`${json.error_message}.\nServer returned status code ${json.status}`);
    } 
    else 
    {
      console.log(json);
    }
    console.log("ABOUT TO PRINT JSON");
    console.log(json);
    return json;
}*/