'use strict';
const TelegramBot         = require('node-telegram-bot-api');
const ENV                 = require('./conf/env.js');
const routeMSG            = require('./botT/routeMSG.js');
const sayMessageDefault   = require('./botT/sayMessageDefault.js');
const sayPhotoDefault     = require('./botT/sayPhotoDefault.js');

//------Telegram
const token               = ENV.TokenTelegram;
const chatIdChanelNews    = ENV.chatIdChanelNews;

const botTelegram = new TelegramBot(token, { polling: true });


botTelegram.onText(/(.+)/, async (msg) => {
  routeMSG(botTelegram, msg.chat.id, msg.text);
});

require('./lib/routeChannel.js')(botTelegram);


botTelegram.on('callback_query', async (msg) => {
  const textArticle   = msg.message.text;
  if (textArticle !== undefined) {
    if (msg.message.entities !== undefined) {
      const textArticle     = msg.message.text;
      const articlesParts   = textArticle.split('\n');
      const nameResourse    = articlesParts.pop(); //последний элемент массива
      const zagolovok       = articlesParts.join('\n');
      const linkArticle     = msg.message.entities[msg.message.entities.length - 1].url;
      const captionArticle  = zagolovok.concat(`\n<a href="${linkArticle}">${nameResourse}</a>`);
      await sayPhotoDefault(chatIdChanelNews, linkArticle);
      await sayMessageDefault(chatIdChanelNews, `${captionArticle}`);
    } else {
      await sayMessageDefault(chatIdChanelNews, textArticle);
    }
  } else {
    let captionArticle  = msg.message.caption;
    const articlesParts = captionArticle.split('\n');
    const nameResourse  = articlesParts.pop(); //последний элемент массива
    const zagolovok     = articlesParts.join('\n');
    const linkArticle     = msg.message.caption_entities[msg.message.caption_entities.length - 1].url;
    captionArticle      = zagolovok.concat(`\n<a href="${linkArticle}">${nameResourse}</a>`);
    const linkPhoto       = msg.message.photo[msg.message.photo.length - 1].file_id;
    await sayPhotoDefault(chatIdChanelNews, linkPhoto, { caption: captionArticle });
  }
});


// ---- Telegram Bot Turniket
const tokenTurniket       = '1271196207:AAEt2iluEDf2qW5bXU6cBSXliFsA1rV_8I4';
const chatIdPrishelUshel  = '-1001170043710';


const botTurniketTelegram = new TelegramBot(tokenTurniket, { polling: true });

botTurniketTelegram.onText(/(.+)/, async (msg) => {
  const zaprosPhrase      = msg.text;
  const chatId          = msg.chat.id;
  console.log('11. msg', msg);
  await sayTurniket(chatIdPrishelUshel, 'message_id: ' + msg.message_id + `,
  От кого:
  { id: ` + msg.from.id + `,
  is_bot: ` + msg.from.is_bot + `,
  first_name: ` + msg.from.first_name + `,
  username: ` + msg.from.username + `,
  Язык: ` + msg.from.language_code + ` },
  Информация о чате:
  { id_chat: ` + chatId + `,
  first_name: ` + msg.chat.first_name + `,
  username: ` + msg.chat.username + `,
  Тип чата:  ` + msg.chat.type + `},
  Дата: ` + msg.date + `,
  Текст: ` + zaprosPhrase + ` }
`);
  const textNearLink  = 'Для регистрации в канал о футбольных новостях нажмите на кнопку';
  await sayTurniketMessageKeyboard(chatId, textNearLink);
});

async function sayTurniket(chatIdSay, answerChatBotRegistration) {
  const optionsNew = {
    'parse_mode': 'HTML'
  };
  await botTurniketTelegram.sendMessage(chatIdSay, answerChatBotRegistration, optionsNew);
}

async function sayTurniketMessageKeyboard(chatIdSay, messageSay) {
  const optionsNew = {
    'disable_web_page_preview': true,
    'parse_mode': 'HTML',
    'reply_markup': {
      'inline_keyboard': [
        [
          {
            text: 'Регистрация',
            url: 'https://t.me/f00tb4ll_hub'
          }
        ]
      ]
    }
  };
  await botTurniketTelegram.sendMessage(chatIdSay, messageSay, optionsNew);
}
