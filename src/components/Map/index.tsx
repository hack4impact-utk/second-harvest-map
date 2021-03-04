import React, { FunctionComponent } from 'react';
import Map from 'google-map-react';

const MapContainer: FunctionComponent = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Map
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY ?? '' }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={8}
      />
    </div>
  );
};

export default MapContainer;
