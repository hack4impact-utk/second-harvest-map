import React, { FunctionComponent } from 'react';
import 'src/styles/main.css';
import './searchArea.css';

const SearchButton: FunctionComponent = () => {
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

        <input type="text" className="searchArea" placeholder="Search by location, Zip, or County" />
      </div>
    </>
  );
};

export default SearchButton;
