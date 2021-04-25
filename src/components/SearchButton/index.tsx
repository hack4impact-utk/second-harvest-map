/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { FunctionComponent, useState } from 'react';
import { FoodPantry } from 'src/utils/types';
import Parse from 'src/helpers/ParseQuery';
import { API_URL, API_PATHS } from 'src/utils/env';
import 'src/styles/main.css';
import './searchArea.css';

type Suggestion = FoodPantry | string;

interface Props {
  pantries: FoodPantry[];
  setFilteredPantries(pantries: FoodPantry[]): void;
}

// Helper Function
const isInString = (str: string, text: string): boolean => {
  const safeText = text.replace(/\W/g, '').toLowerCase();
  return str.toLowerCase().search(safeText) !== -1;
};

// Type Guard for Food Pantries
const isFoodPantry = (item: Suggestion): item is FoodPantry => typeof item !== 'string' && 'name' in item;

const SearchButton: FunctionComponent<Props> = ({ pantries, setFilteredPantries }) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [usingCurrLoc, setUsingCurrLoc] = useState<boolean>(false);
  const Counties: Set<string> = new Set<string>();

  pantries.forEach(pantry => Counties.add(pantry.county));

  const getSuggestions = (searchQuery: string | undefined, counties: string[]): Suggestion[] => {
    if (!searchQuery || searchQuery.length < 3) return [];
    const query = searchQuery.toLowerCase().replace(/\W/g, '');
    const CountyMatches = counties.filter(countyName => countyName.toLowerCase().search(query) !== -1);

    const PantryMatches: FoodPantry[] = pantries.filter(
      pantry =>
        pantry.name.toLowerCase().search(query) !== -1 ||
        pantry.address.toLowerCase().search(query) !== -1 ||
        pantry.county.toLowerCase().search(query) !== -1
    );

    return [...CountyMatches.map(match => `${match} County`), ...PantryMatches].splice(0, 5);
  };

  // Filter Pantries on Enter
  const textFilterPantries = (text: string): FoodPantry[] => {
    // Search by data in pantry
    const directSearch = pantries.filter(
      // I did not write it this way, linter forced me!
      pantry => isInString(pantry.name, text) || isInString(pantry.address, text) || isInString(pantry.county, text)
    );

    // Search as an adress
    if (directSearch !== []) {
      return directSearch;
    }

    // If it is an adress, call server search
    if (Parse(text) === 'add1') {
      // return call server
    }

    // alert and return empty if no matches
    alert('Not found');
    return [];
  };

  async function OnClickcurloc() {
    function getLongAndLat() {
      return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
    }

    try {
      const position = (await getLongAndLat()) as GeolocationPosition;
      const loc = position.coords;
      const Names = (await (
        await fetch(`${API_URL}/${API_PATHS.GET_PANTRIES}?lat=${loc.latitude}&lon=${loc.longitude}`)
      ).json()) as string[];
      if (Names.length > 0) {
        setUsingCurrLoc(true);
        setSearchInput('Current Location');
        setFilteredPantries(pantries.filter(pantry => Names.includes(pantry.name)));
        console.log(loc.longitude, loc.latitude);
      }
    } catch (e) {
      console.log(e);
      alert('could not get location');
    }
  }

  return (
    <>
      <h1 className="text">Search by clicking</h1>
      <button
        className="Button"
        type="button"
        onClick={() => {
          OnClickcurloc();
          setSuggestions([]);
        }}>
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
      <div className="searchBox">
        <svg
          className="searchGlass"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.1527 15.0943H16.0686L15.6844 14.7238C17.0292 13.1595 17.8388 11.1286 17.8388 8.91938C17.8388 3.99314 13.8456 0 8.91938 0C3.99314 0 0 3.99314 0 8.91938C0 13.8456 3.99314 17.8388 8.91938 17.8388C11.1286 17.8388 13.1595 17.0292 14.7238 15.6844L15.0943 16.0686V17.1527L21.9554 24L24 21.9554L17.1527 15.0943ZM8.91938 15.0943C5.50257 15.0943 2.74443 12.3362 2.74443 8.91938C2.74443 5.50257 5.50257 2.74443 8.91938 2.74443C12.3362 2.74443 15.0943 5.50257 15.0943 8.91938C15.0943 12.3362 12.3362 15.0943 8.91938 15.0943Z"
            fill="black"
          />
        </svg>

        <input
          type="text"
          className="searchArea"
          value={searchInput}
          style={{
            borderRadius: suggestions.length > 0 ? '9px 9px 0 0' : '9px',
            color: usingCurrLoc ? '#2486ff' : '#000000',
          }}
          placeholder="Search by location, Zip, or County"
          onChange={e => {
            if (!usingCurrLoc) {
              setSearchInput(e.target.value);
              setSuggestions(getSuggestions(e.target.value, Array.from(Counties)));
            }
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              setFilteredPantries(textFilterPantries(searchInput || ''));
              setSuggestions([]);
            }
            if (usingCurrLoc && e.key === 'Backspace') {
              setSearchInput('');
              setUsingCurrLoc(false);
            }
          }}
        />

        {suggestions.length > 0 && (
          <div className="SuggestionsContainer">
            {suggestions.map(suggest => (
              <button
                className="Suggestions-Area"
                key={isFoodPantry(suggest) ? suggest.name : suggest}
                type="button"
                onClick={() => {}}>
                {isFoodPantry(suggest) ? (
                  <svg
                    className="SuggestionsPin"
                    width="11"
                    height="30"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 2.5L14 7V16H2V7L8 2.5ZM8 0L0 6V18H16V6L8 0ZM7.5 6.5V9.5H7V6.5H6V9.5H5.5V6.5H4.5V9.5C4.5 10.33 5.17 11 6 11V15H7V11C7.83 11 8.5 10.33 8.5 9.5V6.5H7.5ZM9 8.5V11.5H10V15H11V6.5C9.9 6.5 9 7.4 9 8.5Z"
                      fill="black"
                    />
                  </svg>
                ) : (
                  <svg
                    className="SuggestionsPin"
                    width="11"
                    height="30"
                    viewBox="0 0 11 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.25 0C2.3475 0 0 2.3475 0 5.25C0 9.1875 5.25 15 5.25 15C5.25 15 10.5 9.1875 10.5 5.25C10.5 2.3475 8.1525 0 5.25 0ZM5.25 7.125C4.215 7.125 3.375 6.285 3.375 5.25C3.375 4.215 4.215 3.375 5.25 3.375C6.285 3.375 7.125 4.215 7.125 5.25C7.125 6.285 6.285 7.125 5.25 7.125Z"
                      fill="black"
                    />
                  </svg>
                )}

                <h1 className="Suggestions-Text">{isFoodPantry(suggest) ? suggest.name : suggest}</h1>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchButton;
