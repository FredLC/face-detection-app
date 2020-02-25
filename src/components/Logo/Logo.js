import React from 'react';
import Tilt from 'react-tilt';
import logo from './ai.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ml5 mr2 mt0 tilt-wrapper">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 60 }}
        style={{ height: 125, width: 125 }}
      >
        <div className="Tilt-inner">
          <img src={logo} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
