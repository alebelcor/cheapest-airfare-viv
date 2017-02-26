'use strict';

import test from 'ava';

import fn from '../lib/get-search-deeplink';

const options = {
  originAirport: 'MEX',
  destinationAirport: 'TIJ',
  departureDate: '2016-01-01',
  returnDate: '2016-01-05'
};

test('it should return a deeplink URL for the search', t => {
  const url = fn(options);

  t.is(url, 'https://www.vivaaerobus.com/Booking/PostCriteria?DepartureCity=MEX&ArrivalCity=TIJ&Adults=1&DepartureDate=2016-01-01&ReturnDate=2016-01-05&Currency=MXN');
});
