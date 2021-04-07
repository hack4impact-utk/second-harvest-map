import React from 'react';
import './styles/main.css';
import './App.css';
import FoodPantryDisplay from './components/FoodPantryDisplay/index';
import SearchButton from './components/SearchButton/index';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <FoodPantryDisplay pantries={[]} />
        <SearchButton />
      </header>
    </div>
  );
}
export default App;
