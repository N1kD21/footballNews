'use strict';

const fun = (botT, command) => {
  const otvetInChannel      = require('./otvetInChannel.js');
  const ENV                 = require('../conf/env.js');
  const sayPhotoKeyboard    = require('../botT/sayPhotoKeyboard.js');
  const sayMessageKeyboard  = require('../botT/sayMessageKeyboard.js');
  const chatIdChanelModer2  = ENV.chatIdChanelModer2;    // Кilya
  //const chatIdChanelModer   = ENV.chatIdChanelModer;  //Вalera


  let bufer                 = [];


  setInterval(routFun('All'), 7200000);

  routFun(command);
  async function routFun(command) {
    const arrRes = await otvetInChannel(bufer, command);
    bufer = bufer.concat(arrRes);
    for (let iteratorJ = 0; iteratorJ < arrRes.length; iteratorJ++) {
      try {
        const item = arrRes[iteratorJ];
        if (typeof item.caption === 'string') {
          sayPhotoKeyboard(botT, chatIdChanelModer2, item.immage, { caption: item.caption });
        } else {
          let iteratorJ = 0;
          let capt = '';
          for (let i = 0; i < item.caption.length; i++) {
            if (i === 0) {
              sayPhotoKeyboard(botT, chatIdChanelModer2, item.immage, { caption: item.caption[0] });
            } else {
              capt = capt.concat(item.caption[i]);
              if (i === item.caption.length - 1) {
                sayMessageKeyboard(botT, chatIdChanelModer2, capt);
                iteratorJ++;
              }
              if (iteratorJ === 4) {
                sayMessageKeyboard(botT, chatIdChanelModer2, capt);
                iteratorJ = 0;
                capt = '';
              }
            }
          }
        }
      } catch (e) {
        console.log('Error \n', e);
      }
    }
    return bufer;
  }
};


module.exports = fun;
