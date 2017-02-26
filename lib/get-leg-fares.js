'use strict';

module.exports = rawLeg => {
  // cheapest one
  const lightFare = rawLeg.LightFare;

  return [{
    total: lightFare.OriginalBaseFare
  }];
};
