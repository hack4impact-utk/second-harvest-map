import React, { useState } from 'react';
import { FoodPantry } from 'src/utils/types';

import logo from './logo.svg';
import './styles/main.css';
import './App.css';
import FoodPantryDisplay from './components/FoodPantryDisplay/index';
import SearchButton from './components/SearchButton/index';

function App(): JSX.Element {
  const [filteredPantries, setFilteredPantries] = useState<FoodPantry[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <FoodPantryDisplay pantries={filteredPantries} />
        <SearchButton pantries={[]} setFilteredPantries={setFilteredPantries} />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
