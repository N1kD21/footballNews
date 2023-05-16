'use strict';

async function sayPhotoKeyboard(botT, chatIdSay, urlPhoto, options) {
  options = {
    caption: options.caption,
    'parse_mode': 'HTML',
    'disable_web_page_preview': true,
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
  if (chatIdSay !== null || urlPhoto !== null || options !== null) {
    await botT.sendPhoto(chatIdSay, urlPhoto, options);
    return;
  }
  throw new Error('105. sayPhotoKeyboard main.js');
}

module.exports = sayPhotoKeyboard;
