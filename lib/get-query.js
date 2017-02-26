'use strict';

module.exports = options => {
  const query = {
    AirportFrom: options.originAirport,
    AirportTo: options.destinationAirport,
    BoardDate: options.departureDate,
    adults: 1,
    children: 0,
    infants: 0,
    Currency: 'MXN',
    searchType: 'Day',
    getFromState: false,
    isChangeBooking: false
  };

  if (options.returnDate) {
    query.ReturnDate = options.returnDate;
  }

  query.isReturnTrip = Boolean(options.returnDate);

  return query;
};
