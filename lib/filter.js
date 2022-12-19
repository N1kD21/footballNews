'use strict';

const arrTest = require('../tests/filterTest.js');

function lambda(arr) {
  arr[0].forEach((item, i) => {
    if (item.nameResourse.indexOf('rbc') !== -1 || item.nameResourse.indexOf('Rbc') !== -1) {
      arr[0].splice(i, 1);
    }
  });
  console.log('12. filter.js --- Done');
  return arr;

}

lambda(arrTest);

module.exports = lambda;
