import React, { FunctionComponent } from 'react';
import mapimage from './countymapimage.png';

const Countymap: FunctionComponent = () => {
  return (
    <>
      <div>
        <p>
          Do you or someone you know need food assistance? Scroll down, click the county on the map you live in and a
          list of pantries in that county will appear. Please call the pantries to find out their schedule of
          distribution prior to going to the pantry. If you cannot find a food pantry in your county, please call Second
          Harvest at (865) 521-0000.
        </p>
      </div>
      <div>
        <img src={mapimage} width="550" alt="county map" />
      </div>
    </>
  );
};

export default Countymap;
