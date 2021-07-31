import React, { useState, useEffect } from 'react';
import CountyImage from 'src/components/infoandimage/countymapimage.png';
import getFoodPantries from 'src/client/getFoodPantries';
import { FoodPantry } from 'src/utils/types';
import MapContainer from 'src/components/Map/index';
import FoodPantryDisplay from './components/FoodPantryDisplay/index';
import SearchButton from './components/SearchButton/index';

import './styles/main.css';
import './App.css';

function App(): JSX.Element {
  // Pass foodPantries to other components
  const [foodPantries, setFoodPantries] = useState<FoodPantry[]>([]);
  const [filteredPantries, setFilteredPantries] = useState<FoodPantry[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const gatherData = async () => {
      try {
        const allPantries = await getFoodPantries();
        setFoodPantries(allPantries);
        setFilteredPantries(allPantries);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(`Error: ${e}`);
      }
    };

    gatherData();
  }, []);

  const setPantryView = (pantries: FoodPantry[]) => {
    setFilteredPantries(pantries);
    setOffset(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchButton pantries={foodPantries} setFilteredPantries={setPantryView} />
        {/* <FoodPantryDisplay pantries={filteredPantries} /> */}
        <FoodPantryDisplay pantries={filteredPantries} offset={offset} setOffset={setOffset} />
        <div className="MapArea">
          <div className="divider" />
          <h1 className="wordMap">Map</h1>
          <div className="Map">
            {/* <div className="MapContainer"> */}
            <MapContainer pantries={foodPantries} />
            {/* </div> */}
            <div className="TextArea">
              <p className="MapText">
                Do you or someone you know need food assistance? Please call the pantries to find out their schedule of
                distribution prior to going to the pantry. If you cannot find a food pantry in your county, please call
                Second Harvest at (865) 521-0000.
              </p>
              <img src={CountyImage} alt="" className="CountyImage" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default App;
