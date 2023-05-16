'use strict';

async function sayMessageDefault(botT, chatIdSay, messageSay) {
  const options = {
    'disable_web_page_preview': true,
    'parse_mode': 'HTML'
  };
  if (chatIdSay !== null || messageSay !== null || options !== null) {
    await botT.sendMessage(chatIdSay, messageSay, options);
    return;
  }
  throw new Error('116. sayMessageDefault main.js');
}

module.exports = sayMessageDefault;
