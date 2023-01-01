'use strict';
const TelegramBot         = require('node-telegram-bot-api');
//const zaprosFootball      = require('./requestAllFootball.js');
const otvetInChannel      = require('./lib/otvetInChannel.js');
const ENV                 = require('./conf/env.js');

//------Telegram
const token               = ENV.TokenTelegram;
const chatIdChanelNews    = ENV.chatIdChanelNews;
const chatIdChanelModer2  = ENV.chatIdChanelModer2;    // Кilya
//const chatIdChanelModer   = ENV.chatIdChanelModer;  //Вalera
let bufer                 = [];
let counter               = 0;


const botTelegram = new TelegramBot(token, { polling: true });

botTelegram.onText(/(.+)/, async (msg) => {
  const chatId          = msg.chat.id;
  let arrRes;
  if (chatId !== chatIdChanelModer2) {
    console.log('20. msg.text ', msg.text);
    arrRes = await routFun();
    console.log('arrRes-------------------------- ', arrRes);
  } else {
    console.log('23. msg.text ', msg.text);
  }
  bufer = bufer.concat(arrRes);
});
setInterval(routFun, 7200000);
//setInterval(routFun, 450000);

routFun();

async function routFun() {
    const arrRes = await otvetInChannel(bufer, counter);
    counter++;
    bufer = bufer.concat(arrRes);
    for (let iteratorJ = 0; iteratorJ < arrRes.length; iteratorJ++) {
      try {
      const item = arrRes[iteratorJ];
      if (typeof item.caption === 'string') {
        await sayPhotoKeyboard(chatIdChanelModer2, item.immage, { caption: item.caption });
      } else {
        let iteratorJ = 0;
        let capt = '';
        for (let i = 0; i < item.caption.length; i++) {
          if (i === 0) {
            await sayPhotoKeyboard(chatIdChanelModer2, item.immage, { caption: item.caption[0] });
          } else {
            capt = capt.concat(item.caption[i]);
            if (i === item.caption.length - 1) {
              await sayMessageKeyboard(chatIdChanelModer2, capt);
              iteratorJ++;
            }
            if (iteratorJ === 4) {
              await sayMessageKeyboard(chatIdChanelModer2, capt);
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

async function sayPhotoDefault(chatIdSay, urlPhoto, options) {
  if (options === undefined) {
    options = {};
  } else {
    options = {
      caption: options.caption,
      'parse_mode': 'HTML'
    };
  }
  if (chatIdSay !== null || urlPhoto !== null) {
    await botTelegram.sendPhoto(chatIdSay, urlPhoto, options);
    return;
  }
  throw new Error ('83. sayPhotoDefault main.js')
}

async function sayPhotoKeyboard(chatIdSay, urlPhoto, options) {
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
    await botTelegram.sendPhoto(chatIdSay, urlPhoto, options);
    return;
  }
  throw new Error ('105. sayPhotoKeyboard main.js');
}

async function sayMessageDefault(chatIdSay, messageSay) {
  const options = {
    'disable_web_page_preview': true,
    'parse_mode': 'HTML'
  };
  if (chatIdSay !== null || messageSay !== null || options !== null) {
    await botTelegram.sendMessage(chatIdSay, messageSay, options);
    return;
  }
  throw new Error ('116. sayMessageDefault main.js');
}

async function sayMessageKeyboard(chatIdSay, messageSay) {
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
    await botTelegram.sendMessage(chatIdSay, messageSay, optionsNew);
    return;
  }
  throw new Error ('137. sayMessageKeyboard main.js');
}


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
