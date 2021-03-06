import React, { FunctionComponent } from 'react';
import { ChildComponentProps } from 'google-map-react';
import './styles.css';

const Marker: FunctionComponent<ChildComponentProps> = (): JSX.Element => {
  return (
    <div id="body">
      {/* <h1 id="text">Sample Text</h1> */}
      {/* <img alt={Pin} id="svg_pin" /> */}
      <svg
        className="svg_pin"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="black"
        width="18px"
        height="18px">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    </div>
  );
};

export default Marker;
