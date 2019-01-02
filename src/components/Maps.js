import React from "react";
import '../assets/styles/Maps.scss';
import schedule from '../assets/logos/SCHEDULE_orange.png';
import ScrollableAnchor from 'react-scrollable-anchor'

function Maps(){

  return (
    <ScrollableAnchor id={'schedule'}>
    <div id="test" className="map-container">
      <div className="schedule-banner">
        <div className="schedule-border">
          <img src={schedule}/>
        </div>
      </div>
      <div className="content-container">
        <div className="arrange-catering-button">
          <button className="map-catering-button">book catering</button>
        </div>
      </div>
    </div>
    </ScrollableAnchor>
  );
}

export default Maps;
