'use strict';

const fetchNPM    = require('node-fetch');

async function fetch(urlFetch) {
  return new Promise((resolve, reject) => {
    fetchNPM(urlFetch)
      .then((res) => res.text())
      .then((body) => resolve(body))
      .catch((err) => reject(err));
  });
}

module.exports = fetch;
