'use strict';
const newObject               = require('../lib/formirovanieCaption');

function modGoogleNewsM(arrayStat) {
  const ResultArray = [];
  arrayStat.forEach(async (item, i) => {
    if (item !== undefined) {
      ResultArray[i] = await newObject(item);
    }
  });
  return ResultArray;
}

module.exports = modGoogleNewsM;
