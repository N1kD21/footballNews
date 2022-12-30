'use strict';

const fetch                 = require('./fetch.js');


async function checkLinkPhoto(url) {
  try {
    const res      = await fetch(url);
    if (res.indexOf('404') === -1) {
      return res;
    } else {
      throw new Error ('Undefined photo')
    }
  } catch (e) {
    console.log('12. checkLinkPhoto -- Error \n', e);
  };
}

module.exports = checkLinkPhoto;
