'use strict';
const zaprosFootballNews  = require('../googleNewsAPI.js');
const modGoogleNewsM      = require('./modGoogleNewsM.js');
const searchInArray       = require('./searchInArray.js');

async function otvetInChannel(bufer, counter) {
  const massivCountry           = ['ua'];
  const otvetGoogleNewsApi      = await Promise.all(massivCountry.map(zaprosFootballNews));
  console.log('otvetInChannel - > ', otvetGoogleNewsApi);
  const otvetGoogleNewsApiUaRu  = await modGoogleNewsM(otvetGoogleNewsApi[0].concat(otvetGoogleNewsApi[1]));
  if (counter === 0) {
    return otvetGoogleNewsApiUaRu;
  } else {
    const otvetGoogleNewsApiUaRuFilter = await searchInArray(bufer, otvetGoogleNewsApiUaRu);
    return otvetGoogleNewsApiUaRuFilter;
  }
}

module.exports = otvetInChannel;
