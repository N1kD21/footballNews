'use strict';

async function sayPhotoDefault(botT, chatIdSay, urlPhoto, options) {
  if (options === undefined) {
    options = {};
  } else {
    options = {
      caption: options.caption,
      'parse_mode': 'HTML'
    };
  }
  if (chatIdSay !== null || urlPhoto !== null) {
    await botT.sendPhoto(chatIdSay, urlPhoto, options);
    return;
  }
  throw new Error('83. sayPhotoDefault main.js');
}

module.exports = sayPhotoDefault;
