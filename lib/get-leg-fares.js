'use strict';

module.exports = function getLegFares(rawLeg) {

  // cheapest one
  const lightFare = rawLeg.LightFare;

  return [{
    total: lightFare.OriginalBaseFare
  }];
};
