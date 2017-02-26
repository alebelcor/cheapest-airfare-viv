'use strict';

const constants = require('./constants');

module.exports = options => {
  return `${constants.ENDPOINT_BOOKING}` +
    `?DepartureCity=${options.originAirport}` +
    `&ArrivalCity=${options.destinationAirport}` +
    `&Adults=1` +
    `&DepartureDate=${options.departureDate}` +
    `&ReturnDate=${options.returnDate}` +
    `&Currency=MXN`;
};
