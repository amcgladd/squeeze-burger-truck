import React from 'react';
import PropTypes from 'prop-types';
import AdminEvent from './AdminEvent';

function AdminEventList({ addresses }) {
  return(
    <div>
      {Object.keys(addresses).map(function(addressEventId) {
        var addressEvent = addresses[addressEventId];
        return <AdminEvent key={addressEventId}
          streetAddress={addressEvent.streetAddress}
          state={addressEvent.state}
          city={addressEvent.city}
          zipcode={addressEvent.zipcode}
          date={addressEvent.date}
          dayOfWeek={addressEvent.dayOfWeek}
          timeOpen={addressEvent.timeOpen}
          timeClose={addressEvent.timeClose}/>
      })}
    </div>
  );
}

AdminEventList.propTypes = {
  addresses: PropTypes.object
}

export default AdminEventList;
