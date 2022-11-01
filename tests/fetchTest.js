'use strict';

const fetch = require('../lib/fetch.js');
//const assert                  = require('assert').strict;

/*
const testModificationObj = (input, output) => {
  const n = fetch(input);
  assert.deepStrictEqual(n, output);
};
*/

(async () => {
  const vvv = await fetch('http://newsapi.org/v2/top-headlines?country=ua&category=sports&apiKey=6f06874cc0a64418a5f03728e3c6744f');
  console.log('15, vvv -> ', JSON.parse(vvv));
})();
