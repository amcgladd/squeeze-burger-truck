import React from "react";
import '../assets/styles/Hero.scss';
import finalLogo from '../assets/logos/FINAL.png';


function Maps(){

  return (
    <div className="flex-container">
      <div className="slide1">
        <div className="hero-center">
          <img className="black-logo" src={finalLogo}/>
        </div>
      </div>
    </div>
  );
}

export default Maps;
