'use strict';
const express         = require('express');
const app             = express();
const bodyParser      = require('body-parser');
const urlShortener    = require('node-url-shortener');
const TelegramBot     = require('node-telegram-bot-api');

//const zaprosFootball      = require('./requestAllFootball.js');
const zaprosFootballNews  = require('./googleNewsAPI.js');



// ------ API
const port            = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());
app.get('/api', (req, res) => {
  res.send('Ответ от API на Хероку  ->  путь к запросу ' + req.route.path);
});
app.post('/url', (req, res) => {
  const url = req.body.url;

  urlShortener.short(url, (err, shortUrl) => {
    res.send(shortUrl);
  });
});
app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));
//-------API


//------Telegram
const token               = '716536032:AAF679qSXFEjD3swXRKINrdgUYfoAysOLpc';
const chatIdChanelNews    = '-1001382295148';
const chatIdChanelModer   = '725519934';
const chatIdChanelModer2  = '594504840';
let counter               = 0;
let bufer                 = [];

const botTelegram = new TelegramBot(token, { polling: true });
botTelegram.onText(/(.+)/, async (msg) => {
  const chatId          = msg.chat.id;
  //google news api
  const otvetGoogleNewsAPI = await zaprosFootballNews();
  if (chatId !== chatIdChanelModer) {
    vivodGoogleNews(otvetGoogleNewsAPI, chatId);
  } else {
    vivodGoogleNewsM(otvetGoogleNewsAPI, chatIdChanelModer);
  }
  //  bufer.push(otvetGoogleNewsAPI);
  bufer = bufer.concat(otvetGoogleNewsAPI);

});

setInterval(otvetInChannel, 7200000);

otvetInChannel();

async function otvetInChannel() {
  const massivCountry           = ['ua', 'ru'];
  let upravlenieMassiv        = [];
  let upravlenieMassivFilter  = [];
  if (bufer.length > 500) {
    bufer = [];
  }
  //  let otvetGoogleNewsApiInteval = await zaprosFootballNews();
  const otvetGoogleNewsApi          = await Promise.all(massivCountry.map(zaprosFootballNews));
  console.log('68. otvetGoogleNewsApi >>> ', otvetGoogleNewsApi);
  const otvetGoogleNewsApiInteval   = otvetGoogleNewsApi[0].concat(otvetGoogleNewsApi[1]);
  if (counter === 0) {
    upravlenieMassiv = [
      { otvet: otvetGoogleNewsApiInteval, chatId: chatIdChanelModer },
      { otvet: otvetGoogleNewsApiInteval, chatId: chatIdChanelModer2 }
    ];
    Promise.all(upravlenieMassiv.map(vivodGoogleNewsM));
    //bufer.push(otvetGoogleNewsApiInteval);
    bufer = bufer.concat(otvetGoogleNewsApiInteval);
    counter++;
  } else {
    const otvetGoogleNewsApiIntevalFilter = await searchInArray(bufer, otvetGoogleNewsApiInteval);
    if (otvetGoogleNewsApiIntevalFilter.length !== 0) {
      upravlenieMassivFilter = [
        { otvet: otvetGoogleNewsApiIntevalFilter, chatId: chatIdChanelModer },
        { otvet: otvetGoogleNewsApiIntevalFilter, chatId: chatIdChanelModer2 }
      ];
      Promise.all(upravlenieMassivFilter.map(vivodGoogleNewsM));
      //bufer.push(otvetGoogleNewsApiIntevalFilter);
      bufer = bufer.concat(otvetGoogleNewsApiIntevalFilter);
    }
  }
}

async function vivodGoogleNewsM(object) {
  const arrayStat     = object.otvet;
  const chatIdGoogle  = object.chatId;
  let immage         = '';
  let zagolovok     = '';
  let nameResourse  = '';
  let linkArticle   = '';
  console.log('92. arrayStat >>> ', arrayStat);
  for (let i = 0; i < arrayStat.length; i++) {
    if (arrayStat[i].error === undefined) {
      immage = arrayStat[i].immageUrl;
      zagolovok = arrayStat[i].zagolovok;
      nameResourse = arrayStat[i].nameResourse;
      linkArticle = arrayStat[i].linkArticle;
      if (`${zagolovok}\n${nameResourse}\n${linkArticle}`.length < 1025) {
        await sayPhotoKeyboard(chatIdGoogle, immage,
          { caption: `${zagolovok}\n<a href="${linkArticle}">${nameResourse}</a>` });
      } else {
        const zagolovokMassiv = zagolovok.split('\n\n');
        if (zagolovokMassiv.length === 1) {
          await sayPhotoDefault(chatIdGoogle, immage);
          await sayMessageKeyboard(chatIdGoogle, `${zagolovok}\n<a href="${linkArticle}">${nameResourse}</a>`);
        } else {
          for (let iOtvetov = 0; iOtvetov < zagolovokMassiv.length; iOtvetov++) {
            switch (iOtvetov) {
            case 0:
              try {
                await sayPhotoKeyboard(chatIdGoogle, immage, { caption: `${zagolovokMassiv[iOtvetov]}` });
              } catch (error)  {
                if (error.message === 'ETELEGRAM: 400 Bad Request: MEDIA_CAPTION_TOO_LONG') {
                  await sayPhotoDefault(chatIdGoogle, immage);
                  await sayMessageKeyboard(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}`);
                }
              }
              break;
            case zagolovokMassiv.length - 1:
              await sayMessageKeyboard(chatIdGoogle,
                `${zagolovokMassiv[iOtvetov]}\n<a href="${linkArticle}">${nameResourse}</a>`);
              break;
            default:
              await sayMessageKeyboard(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}`);
            }
          }
        }
      }
    } else {
      await sayMessageDefault(chatIdGoogle, 'Запрос к Google News API небыл успешен. Мы решаем данную проблему.');
    }
  } // конец for 68 строка
}

async function vivodGoogleNews(array, chatIdGoogle) {
  let immage         = '';
  let zagolovok     = '';
  let nameResourse  = '';
  let linkArticle   = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].error === undefined) {
      if (array[i].immageUrl !== null || array[i].immageUrl !== undefined)        immage = array[i].immageUrl;
      if (array[i].zagolovok !== null || array[i].zagolovok !== undefined)        zagolovok = array[i].zagolovok;
      if (array[i].nameResourse !== null || array[i].nameResourse !== undefined)  nameResourse = array[i].nameResourse;
      if (array[i].linkArticle !== null || array[i].linkArticle !== undefined)    linkArticle = array[i].linkArticle;
      if (`${zagolovok}\n${nameResourse}\n${linkArticle}`.length < 1024) {
        await sayPhotoDefault(chatIdGoogle, immage, { caption: `${zagolovok}\n[${nameResourse}](${linkArticle})` });
      } else {
        const zagolovokMassiv = zagolovok.split('\n\n');
        if (zagolovokMassiv.length === 1) {
          await sayPhotoDefault(chatIdGoogle, immage);
          await sayMessageDefault(chatIdGoogle, `${zagolovok}\n<a href="${linkArticle}">${nameResourse}</a>`);
        } else {
          for (let iOtvetov = 0; iOtvetov < zagolovokMassiv.length; iOtvetov++) {
            switch (iOtvetov) {
            case 0:
              try {
                await sayPhotoDefault(chatIdGoogle, immage, { caption: `${zagolovokMassiv[iOtvetov]}` });
              } catch (error)  {
                if (error.message === 'ETELEGRAM: 400 Bad Request: MEDIA_CAPTION_TOO_LONG') {
                  await sayPhotoDefault(chatIdGoogle, immage);
                  await sayMessageDefault(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}`);
                }
              }
              break;
            case zagolovokMassiv.length - 1:
              await sayMessageDefault(chatIdGoogle,
                `${zagolovokMassiv[iOtvetov]}\n<a href="${linkArticle}">${nameResourse}</a>`);
              break;
            default:
              await sayMessageDefault(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}`);
            }
          }
        }
      }
    } else {
      await sayMessageDefault(chatIdGoogle, 'Запрос к Google News API небыл успешен. Мы решаем данную проблему.');
    }
  } // конец for 68 строка
}

async function searchInArray(arrayStaroe, arrayNovoe) {
  const otvet = [];
  arrayNovoe.forEach((itemNovoeArray) => {
    const otvet1 = arrayStaroe.find((itemStaroeArray) => itemNovoeArray.zagolovok === itemStaroeArray.zagolovok);
    if (otvet1 === undefined) {
      otvet.push(itemNovoeArray);
    }
  });
  return otvet;
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
  await botTelegram.sendPhoto(chatIdSay, urlPhoto, options);
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
  await botTelegram.sendPhoto(chatIdSay, urlPhoto, options);
}

async function sayMessageDefault(chatIdSay, messageSay) {
  const options = {
    'disable_web_page_preview': true,
    'parse_mode': 'HTML'
  };
  await botTelegram.sendMessage(chatIdSay, messageSay, options);
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
  await botTelegram.sendMessage(chatIdSay, messageSay, optionsNew);
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
const TelegramBotTurniket = require('node-telegram-bot-api');
const tokenTurniket       = '1271196207:AAEt2iluEDf2qW5bXU6cBSXliFsA1rV_8I4';
const chatIdPrishelUshel  = '-1001170043710';


const botTurniketTelegram = new TelegramBotTurniket(tokenTurniket, { polling: true });

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
