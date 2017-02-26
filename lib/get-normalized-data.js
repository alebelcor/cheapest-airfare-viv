'use strict';

const getLegs = require('./get-legs');

module.exports = data => {
  if (!data.Success || data.availabilityTemplate.OutAvailability.length === 0) {
    throw new Error('No availability found');
  }

  return {
    outbound: getLegs(data.availabilityTemplate.OutAvailability),
    inbound: getLegs(data.availabilityTemplate.InAvailability)
  };
};
