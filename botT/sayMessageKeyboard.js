'use strict';

async function sayMessageKeyboard(botT, chatIdSay, messageSay) {
  const optionsNew = {
    'disable_web_page_preview': true,
    'parse_mode': 'HTML',
    'reply_markup': {
      'inline_keyboard': [
        [
          {
            text: 'Утвердить статью',
            'callback_data': 'Утверждение статьи'
          }
        ]
      ]
    }
  };
  if (chatIdSay !== null || messageSay !== null || optionsNew !== null) {
    await botT.sendMessage(chatIdSay, messageSay, optionsNew);
    return;
  }
  throw new Error('137. sayMessageKeyboard main.js');
}

module.exports = sayMessageKeyboard;
