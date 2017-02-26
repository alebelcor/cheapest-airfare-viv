'use strict';

import test from 'ava';

import fn from '../lib/get-query';

const options = {
  originAirport: 'MEX',
  destinationAirport: 'TIJ',
  departureDate: '2016-01-01'
};

test('it should have members', (t) => {
  const query = fn(options);

  t.is(query.AirportFrom, 'MEX');
  t.is(query.AirportTo, 'TIJ');
  t.is(query.BoardDate, '2016-01-01');
  t.is(query.adults, 1);
  t.is(query.children, 0);
  t.is(query.infants, 0);
  t.is(query.Currency, 'MXN');
  t.is(query.searchType, 'Day');
  t.is(query.getFromState, false);
  t.is(query.isChangeBooking, false);
  t.is(query.isReturnTrip, false);
});

test('it should consider roundtrip flights', (t) => {
  options.returnDate = '2016-01-05';
  const query = fn(options);

  t.is(query.ReturnDate, '2016-01-05');
  t.is(query.isReturnTrip, true);
});
