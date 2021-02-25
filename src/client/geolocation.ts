// Geolocation returns the coordinates of a person's location
// to access variables use location.latitude, location.longitude

export default function geoLocation(): GeolocationCoordinates {
  // position returns geolocationposition
  let location: GeolocationCoordinates | null = null;
  navigator.geolocation.getCurrentPosition((pos: GeolocationPosition) => {
    location = pos.coords;
  });

  if (location == null) {
    throw new Error('location was null');
  }

  return location;
}
