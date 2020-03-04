'use strict';

const fetch       = require('node-fetch');
const urlCountry  = `https://api.football-data.org/v2/competitions`;


async function fetchFootball(url) {
  return new Promise(function(resolve, reject) {
    fetch(url)
        .then(res => res.json())
        .then(json => resolve(json));
  });
}


async function searchInArray(array) {
  let newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].plan === 'TIER_ONE') {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

async function zaprosFootball(){
  let otvetAllSportsAPI = await fetchFootball(urlCountry);
  let tierOneLeagues    = await searchInArray(otvetAllSportsAPI.competitions)
  console.log('18. tierOneLeagues >>> ', tierOneLeagues);
  return tierOneLeagues;
}



module.exports = zaprosFootball;
