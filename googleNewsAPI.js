'use strict';

const fetch                 = require('./lib/fetch.js');
const sborkaOtveta          = require('./lib/sborkaOtveta.js');

async function zaprosFootballNews(country) {
  const start = new Date().getTime();
  console.log('18', start);
  const API_KEY_GOOGLE      = '6f06874cc0a64418a5f03728e3c6744f';
  const urlGoogleNews       = 'http://newsapi.org/v2/top-headlines?country=' + country + '&category=sports&apiKey=' + API_KEY_GOOGLE;
  const result      = await fetch(urlGoogleNews);
  const resultJSON  = JSON.parse(result);
  return await sborkaOtveta(resultJSON);
}

module.exports = zaprosFootballNews;
