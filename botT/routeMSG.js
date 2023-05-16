'use strict';

const sayMessageDefault   = require('./sayMessageDefault.js');
const sayMessageKeyboard  = require('./sayMessageKeyboard.js');
const sayPhotoDefault     = require('./sayPhotoDefault.js');
const sayPhotoKeyboard    = require('./sayPhotoKeyboard.js');


const fun = (bot, id, data) => {

  switch (id) {
  case 594504840:
    bot.sendMessage(id, data);
    break;
  case 2:
    bot.sendMessage(id, data);
    break;
  default:
    bot.sendMessage(id, 'Нема доступу');
    break;
  }
};



module.exports = fun;
