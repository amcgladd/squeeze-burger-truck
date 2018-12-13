import React from "react";
import '../assets/styles/Hero.scss';
import blackLogo from '../assets/logos/squeeze_logo_black.png';


function Maps(){

  return (
    <div className="flex-container">
      <div className="slide1">
        <div className="hero-center">
          <img className="black-logo" src={blackLogo}/>
        </div>
      </div>
    </div>
  );
}

export default Maps;
