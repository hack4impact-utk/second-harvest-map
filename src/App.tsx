import React, { useState, useEffect } from 'react';
import getFoodPantries from 'src/client/getFoodPantries';
import { FoodPantry } from 'src/utils/types';
import FoodPantryDisplay from './components/FoodPantryDisplay/index';
import SearchButton from './components/SearchButton/index';
import './styles/main.css';
import './App.css';

function App(): JSX.Element {
  // Pass foodPantries to other components
  const [foodPantries, setFoodPantries] = useState<FoodPantry[]>([]);
  const [filteredPantries, setFilteredPantries] = useState<FoodPantry[]>([]);

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

  return (
    <div className="App">
      <header className="App-header">
        <SearchButton pantries={foodPantries} setFilteredPantries={setFilteredPantries} />
        <FoodPantryDisplay pantries={filteredPantries} />
      </header>
    </div>
  );
}
export default App;
