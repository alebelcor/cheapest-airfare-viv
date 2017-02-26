'use strict';

import test from 'ava';
import get from '../lib/get-leg-fares';

import fixtures from './fixtures.json';

let rawLeg = fixtures.availabilityTemplate.OutAvailability[0];
let legFares;

test.beforeEach((t) => {
  legFares = get(rawLeg);
});

test('it should return an array', (t) => {
  t.true(Array.isArray(legFares));
});

test('it should return a one element array', (t) => {
  t.true(legFares.length === 1);
});

test('fare should have certain members', (t) => {
  const fare = legFares[0];

  t.true(fare.hasOwnProperty('total'));
});