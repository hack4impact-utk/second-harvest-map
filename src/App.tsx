import React, { useState, useEffect } from 'react';
import getFoodPantries from 'src/client/getFoodPantries';
import { FoodPantry } from 'src/utils/types';
import FoodPantryDisplay from './components/FoodPantryDisplay/index';
import SearchButton from './components/SearchButton/index';
import './styles/main.css';
import './App.css';

function App(): JSX.Element {
  // Pass foodPantries to other components
  const [foodPantries, setFoodPantries] = useState<FoodPantry[] | undefined>([]);

  useEffect(() => {
    const gatherData = async () => {
      try {
        setFoodPantries(await getFoodPantries());
      } catch (e) {
        console.log(`Error: ${e}`);
      }
    };

    gatherData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <FoodPantryDisplay pantries={[]} />
        <SearchButton pantries={[]} />
      </header>
    </div>
  );
}
export default App;
