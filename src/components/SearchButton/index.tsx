import React, { FunctionComponent, useRef, useState } from 'react';
import 'src/styles/main.css';
import { FoodPantry } from 'src/utils/types';
import './searchArea.css';

type Suggestion = FoodPantry | string;

interface Props {
  pantries: FoodPantry[];
}

// Type Guard for Food Pantries
const isFoodPantry = (item: Suggestion): item is FoodPantry => typeof item !== 'string' && 'name' in item;

const SearchButton: FunctionComponent<Props> = ({ pantries }) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const Counties: Set<string> = new Set<string>();

  pantries.forEach(pantry => Counties.add(pantry.county));

  const getSuggestions = (searchQuery: string | undefined, counties: string[]): Suggestion[] => {
    if (!searchQuery || searchQuery.length < 3) return [];

    const CountyMatches = counties.filter(countyName => countyName.search(searchQuery) !== -1);

    const PantryMatches: FoodPantry[] = pantries.filter(
      pantry =>
        pantry.name.search(searchQuery) !== -1 ||
        pantry.address.streetName.search(searchQuery) !== -1 ||
        pantry.county.search(searchQuery) !== -1
    );

    return [...CountyMatches.map(match => `${match} County`), ...PantryMatches].splice(0, 5);
  };

  return (
    <>
      <h1 className="text">Search by clicking</h1>
      <button className="Button" type="button">
        <svg
          className="PinSVG"
          width="15"
          height="23"
          viewBox="0 0 15 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.13041 0.222229C3.21834 0.222229 0.0543213 3.70001 0.0543213 8.00001C0.0543213 13.8333 7.13041 22.4445 7.13041 22.4445C7.13041 22.4445 14.2065 13.8333 14.2065 8.00001C14.2065 3.70001 11.0425 0.222229 7.13041 0.222229ZM7.13041 10.7778C5.73541 10.7778 4.60323 9.53334 4.60323 8.00001C4.60323 6.46667 5.73541 5.22223 7.13041 5.22223C8.52541 5.22223 9.65758 6.46667 9.65758 8.00001C9.65758 9.53334 8.52541 10.7778 7.13041 10.7778Z"
            fill="white"
          />
        </svg>
        Current Location
      </button>
      <h1 className="text">or</h1>
      <input
        type="text"
        className="searchArea"
        ref={searchInput}
        onKeyDown={
          (/* USE LATER FOR ENTER KEY: e: React.KeyboardEvent<HTMLInputElement> */) => {
            setSuggestions(getSuggestions(searchInput.current?.value, Array.from(Counties)));
          }
        }
      />
      {suggestions.map(suggest => (
        <h1>{isFoodPantry(suggest) ? suggest.name : suggest}</h1>
      ))}
    </>
  );
};

export default SearchButton;
