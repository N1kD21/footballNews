'use strict';
const zaprosFootballNews  = require('../googleNewsAPI.js');
const modGoogleNewsM      = require('./modGoogleNewsM.js');
const searchInArray       = require('./searchInArray.js');
const filter              = require('./filter.js');

async function otvetInChannel(bufer, counter) {
  const massivCountry           = ['ua'];
  //const otvetGoogleNewsApi      = await Promise.all(massivCountry.map(zaprosFootballNews)); - для нескольких языков
  const otvetGoogleNewsApi      = await zaprosFootballNews(massivCountry[0]);
  const otvetGoogleNewsApiFilter = await filter([otvetGoogleNewsApi]);
  const otvetGoogleNewsApiUaRu  = await modGoogleNewsM(otvetGoogleNewsApiFilter[0].concat(otvetGoogleNewsApiFilter[1]));
  if (counter === 0) {
    return otvetGoogleNewsApiUaRu;
  } else {
    const otvetGoogleNewsApiUaRuFilter = await searchInArray(bufer, otvetGoogleNewsApiUaRu);
    return otvetGoogleNewsApiUaRuFilter;
  }
}

module.exports = otvetInChannel;
