import React, { FunctionComponent } from 'react';
import Map from 'google-map-react';

const MapContainer: FunctionComponent = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Map
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY ?? '' }}
        defaultCenter={{ lat: 35.96, lng: -83.92 }}
        defaultZoom={8}
        //could use onGoogleApiLoaded(func) to access full maps api if needed
      />
    </div>
  );
};

export default MapContainer;
