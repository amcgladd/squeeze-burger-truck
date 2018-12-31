import React from 'react';
import GoogleMap from './GoogleMap';
import PropTypes from 'prop-types';
import moment from 'moment';

function Event({ streetAddress, addressState, city, zipcode, date, timeOpen, timeClose, lat, lng}) {

  const momentDate = moment(date).format('dddd, MMMM D, YYYY');
  const formattedDate = momentDate.toUpperCase();
  const formattedTimeOpen = moment(timeOpen, 'HH:mm').format('h A');
  const formattedTimeClose = moment(timeClose, 'HH:mm').format('h A');

  return(
    <div className="box">
      <style>{`
        p {
          margin-block-start: 0px;
          margin-block-end: 0px;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }
        .box {
          margin-top: 35px;
          margin-left: 25px;
          border: 2px solid #E9ECF2;
          border-left: 5px solid #E9ECF2;
          width: 800px;
        }
        .dateAndTime {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          margin-left: 20px;
          margin-right: 20px;
          font-size: 1rem;
          color: #868e9e;
        }
        .address {
          margin-left: 20px;
          margin-bottom: 20px;
          font-size: 1.25rem;
          color: #49505e;
        }
        .googleMapBox {
          height: 100px;
        }
      `}</style>
      <div className="dateAndTime">
        <p>{formattedDate}</p>
        <p>{formattedTimeOpen} to {formattedTimeClose}</p>
      </div>
      <div className="address">
        <p>{streetAddress}, {city}, {addressState} {zipcode}</p>
      </div>
      <div className="googleMapBox">
        <div className="googleMap">
          <GoogleMap
            lat={lat}
            lng={lng}
          />
        </div>
      </div>
    </div>
  );
}

Event.propTypes = {
  streetAddress: PropTypes.string,
  addressState: PropTypes.string,
  city: PropTypes.string,
  zipCode: PropTypes.string,
  date: PropTypes.string,
  timeOpen: PropTypes.string,
  timeClose: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number
}

export default Event;
