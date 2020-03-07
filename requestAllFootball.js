'use strict';

const fetch         = require('node-fetch');

async function fetchFootball(url) {
  return new Promise(function(resolve, reject) {
    fetch(url, {'X-Auth-Token'    : ''})
        .then(res => res.json()) // expecting a json response
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

async function zaprosFootball(id, YEAR){
  let urlCompetitions = `https://api.football-data.org/v2/competitions/`;
  return new Promise(async function (resolve, reject) {
    let otvetAllSportsAPI = await fetchFootball(urlCompetitions);
    let tierOneLeagues    = await searchInArray(otvetAllSportsAPI.competitions)
    resolve(tierOneLeagues)
  });
}


module.exports = zaprosFootball;
