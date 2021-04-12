'use strict';

const fetch         = require('node-fetch');

async function fetchFootball(url) {
  return new Promise((resolve, reject) => {
    fetch(url, { 'X-Auth-Token': '1adde7c0d93044ba92b649eb9e221a81' })
      .then((res) => res.json()) // expecting a json response
      .then((json) => resolve(json))
      .catch((err) => reject(err));
  });
}

async function searchInArray(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].plan === 'TIER_ONE') {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

async function zaprosFootball() {
  const urlCompetitions = 'https://api.football-data.org/v2/competitions/';
  const otvetAllSportsAPI = await fetchFootball(urlCompetitions);
  const tierOneLeagues    = await searchInArray(otvetAllSportsAPI.competitions);
  return new Promise((resolve, reject) => {
    if (tierOneLeagues === undefined) {
      reject('Error');
    }
    resolve(tierOneLeagues);
  });
}

module.exports = zaprosFootball;
