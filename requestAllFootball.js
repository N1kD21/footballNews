'use strict';

const fetch         = require('node-fetch');

//let urlTeams        = `https://api.football-data.org/v2/competitions/${id}/teams`;

async function fetchFootball(url) {
  return new Promise(function(resolve, reject) {
    fetch(url, {'X-Auth-Token'    : '1adde7c0d93044ba92b649eb9e221a81'})
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
  let urlToFetch      = 'https://api.football-data.org/v2/competitions/2018/matches';
/*
  let urlTeams        = `https://api.football-data.org/v2/competitions/${id}/teams/`;
  if (id != undefined) {
    urlToFetch        = urlTeams;
  }
*/
  return new Promise(async function (resolve, reject) {
    let otvetAllSportsAPI = await fetchFootball(urlToFetch);
    console.log('35. otvetAllSportsAPI >>> ', otvetAllSportsAPI);
//    let tierOneLeagues    = await searchInArray(otvetAllSportsAPI.competitions)
//    resolve(tierOneLeagues)
  });
}

zaprosFootball('2224', '2019');

//module.exports = zaprosFootball;
