'use strict';

const fun = (param, id) => {
  const chatId          = param.chat.id;
  if (chatId !== id) {
    console.log('20. msg.text ', param.text);
    return;
  } else {
    console.log('23. msg.text ', param.text);
  }
};


module.exports = fun;
