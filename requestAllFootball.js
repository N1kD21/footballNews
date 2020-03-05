'use strict';

const fetch       = require('node-fetch');
let urlGlobal  = `https://api.football-data.org/v2/competitions/`;

async function fetchFootball(url) {
  return new Promise(function(resolve, reject) {
    fetch(url, {'X-Auth-Token'    : '1adde7c0d93044ba92b649eb9e221a81'})
        .then(res => res.json()) // expecting a json response
        .then(json => console.log(json));
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

async function zaprosFootball(flugF){
  return new Promise(async function (resolve, reject) {
/*
    if (flugF == 'undefaul') {
      let urlGlobal  = `http://api.football-data.org/v2/areas`;
    }
*/
    let otvetAllSportsAPI = await fetchFootball(urlGlobal);
    console.log('28. otvetAllSportsAPI >>> ', otvetAllSportsAPI);
    let tierOneLeagues    = await searchInArray(otvetAllSportsAPI.competitions)
    resolve(tierOneLeagues)
  });
}

//zaprosFootball();

module.exports = zaprosFootball;
