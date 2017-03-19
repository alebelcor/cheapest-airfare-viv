'use strict';

module.exports = rawLeg => {
  // Cheapest one
  const lightFare = rawLeg.LightFare;

  return [{
    total: lightFare.OriginalBaseFare
  }];
};
