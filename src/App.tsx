import React, { useState, useEffect } from 'react';
import getFoodPantries from 'src/client/getFoodPantries';
import { FoodPantry } from 'src/utils/types';
import FoodPantryDisplay from './components/FoodPantryDisplay/index';
import logo from './logo.svg';
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
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <FoodPantryDisplay pantries={[]} />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
