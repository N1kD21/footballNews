'use strict';

const fetch               = require('node-fetch');
const ALL_SPORTS_API_KEY  = 'TBDIXZD08gaw9YuObMutL5hasW8PzgrAaEbM55BU';


async function zaprosFixtures() {
  const urlFixtures       = `https://data.football-api.com/v3/competitions?Authorization=${ALL_SPORTS_API_KEY}`;
  return new Promise(function(resolve, reject) {
    fetch(urlFixtures)
    .then(res => res.text())
    .then(body => resolve(body));
  });
}


module.exports = zaprosFixtures;
