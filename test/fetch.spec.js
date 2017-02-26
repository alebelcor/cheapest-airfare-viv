'use strict';

import test from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';
import got from 'got';
import moment from 'moment';
import isPlainObj from 'is-plain-obj';

import constants from '../lib/constants';
import fn from '../lib/fetch';
import fixtures from './fixtures.json';

const today = moment();
const options = {
  originAirport: 'MEX',
  destinationAirport: 'LAX',
  departureDate: today.add(20, 'days').format(constants.DATETIME_DATE_FORMAT),
  returnDate: today.add(25, 'days').format(constants.DATETIME_DATE_FORMAT)
};

let post;

test.before((t) => {
  post = sinon.stub(got, 'post').resolves({
    body: fixtures
  });
});

test.after((t) => {
  post.restore();
});

test('it should return a promise', (t) => {
  t.true(typeof fn(options).then === 'function');
});

test('it should return an object', async (t) => {
  const data = await fn(options);

  t.true(isPlainObj(data));
});
