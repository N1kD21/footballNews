'use strict';

const ALL_SPORTS_API_KEY  = 'TBDIXZD08gaw9YuObMutL5hasW8PzgrAaEbM55BU';
const urlFixtures         = `https://data.football-api.com/v3/competitions?Authorization=TBDIXZD08gaw9YuObMutL5hasW8PzgrAaEbM55BU`;
console.log('5. urlFixtures >>> ', urlFixtures);
const httpsFootball       = require('https');
const httpFootball        = require('http');

const fetchFootball = urlFootball => new Promise((resolve, reject) => {
  let protocolZaprosaFootball = '';
  if (urlFootball.startsWith('https')) {
    protocolZaprosaFootball     = httpsFootball;
  } else {
    protocolZaprosaFootball     = httpFootball;
  }
  protocolZaprosaFootball.get(urlFootball, resOtvetFootball => {
    const bufferOtvetaFootball = [];
    resOtvetFootball.on('data', chunkOtvetaFootball => {
      bufferOtvetaFootball.push(chunkOtvetaFootball)
    });
    resOtvetFootball.on('end', () => resolve(bufferOtvetaFootball.join()));
  });
});



(async() => {
  let otvetAllSportsAPI = await fetchFootball(urlFixtures);
  console.log('18. otvetAllSportsAPI >>> ', otvetAllSportsAPI);
})()


//module.exports = zaprosFixtures;
