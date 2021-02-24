// To get location call geoLocation()
// returns GeolocationCoordinates type
// Usage var loc = geoLocation();
// loc.latitude, loc.longitude, loc.altitude
// See https://developer.mozilla.org/en-US/docs/Web/API/GeolocationCoordinates for other location options

export var options = {
  // tracking settings
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function position() {
  const pos = new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej, options);
  });
  pos.then((res) => {
    console.log('got location');
  });
  pos.catch((err) => {
    // if there is an error or user denys location access
    console.log('I get called:', err.message);
  });

  return pos;
}

export async function geoLocation() {
  var geo: any;
  try {
    // position returns geolocationposition
    geo = await position();

    //just return coordinates
    return geo.coords;
  }
  catch(err){
    console.log(err);
  }
}
