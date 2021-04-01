import React, { FunctionComponent } from 'react';
import Map from 'google-map-react';
import { FoodPantry } from 'src/utils/types';
import Marker from '../Marker';

interface Props {
  pantries: FoodPantry[];
}

const MapContainer: FunctionComponent<Props> = ({ pantries }) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Map
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY ?? '' }}
        defaultCenter={{ lat: 35.96, lng: -83.92 }}
        defaultZoom={8}>
        {pantries.map(pantry => (
          <Marker lat={pantry.position.latitude} lng={pantry.position.longitude} />
        ))}
      </Map>
    </div>
  );
};

export default MapContainer;
