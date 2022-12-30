'use strict';

const checkLinkPhoto  = require('../lib/checkLinkPhoto.js');

const urlArray = [
  'https://sport.novyny.live/media/cache/resolve/original/639ff37f96bf7-dmytryy-kuleba-1.jpg'
];


urlArray.forEach(async function(elem) {
  const print = await checkLinkPhoto(elem);
  if (print === undefined) {
    console.log('12. checkLinkPhotoTests - Test is error');
  } else {
    console.log('12. checkLinkPhotoTests -- Test is Done!');
  }
});
