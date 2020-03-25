const express         = require('express');
const app             = express();
const path            = require('path');
const bodyParser      = require('body-parser');
const urlShortener    = require('node-url-shortener');
const TelegramBot     = require('node-telegram-bot-api');

const zaprosFootball      = require('./requestAllFootball.js');
const zaprosFootballNews  = require('./googleNewsAPI.js');



// ------ API
const port            = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());
app.get('/api', function(req, res) {
    res.send('Ответ от API на Хероку  ->  путь к запросу ' + req.route.path);
});
app.post('/url', function(req, res) {
    const url = req.body.url;

    urlShortener.short(url, function(err, shortUrl){
        res.send(shortUrl);
    });
});
app.listen(port, () => console.log(`url-shortener listening on port ${port}!`));
//-------API


//------Telegram
const token             = '';
const chatIdChanelNews  = '-';
const chatIdChanelModer = '';
let counter             = 0;
let bufer               = [];

const botTelegram = new TelegramBot(token, {polling: true});
botTelegram.onText(/(.+)/, async (msg) => {
  const chatId          = msg.chat.id;
  //google news api
  let otvetGoogleNewsAPI = await zaprosFootballNews();
  vivodGoogleNews(otvetGoogleNewsAPI, chatId);
  bufer.push(otvetGoogleNewsAPI);
});

setInterval(otvetInChannel, 7200000);
setInterval(() => {
  bufer = [];
}, 86400000);

otvetInChannel()

async function otvetInChannel() {
  let otvetGoogleNewsApiInteval = await zaprosFootballNews();
  if (counter == 0) {
    vivodGoogleNews(otvetGoogleNewsApiInteval, chatIdChanelModer);
    bufer.push(otvetGoogleNewsApiInteval);
    counter++;
  } else {
    let otvetGoogleNewsApiIntevalFilter = await searchInArray(bufer, otvetGoogleNewsApiInteval);
    if (otvetGoogleNewsApiIntevalFilter.length != 0) {
      vivodGoogleNews(otvetGoogleNewsApiIntevalFilter, chatIdChanelModer);
      bufer.push(otvetGoogleNewsApiIntevalFilter);
    }
  }
}

async function vivodGoogleNews(array, chatIdGoogle) {
  let image         = '';
  let zagolovok     = '';
  let nameResourse  = '';
  let linkArticle   = '';
  for (var i = 0; i < array.length; i++) {
    if (array[i].immageUrl !== null || array[i].immageUrl !== undefined)        immage = array[i].immageUrl;
    if (array[i].zagolovok !== null || array[i].zagolovok !== undefined)        zagolovok = array[i].zagolovok;
    if (array[i].nameResourse !== null || array[i].nameResourse !== undefined)  nameResourse = array[i].nameResourse;
    if (array[i].linkArticle !== null || array[i].linkArticle !== undefined)    linkArticle = array[i].linkArticle;
    await sayPhoto(chatIdGoogle, immage);
    try {
      await sayMessageKeyboard(chatIdGoogle, `${zagolovok}\n${nameResourse}\n${linkArticle}`);
    } catch (err) {
      console.log('95. err.message ', err.message);
      if (err.message == 'ETELEGRAM: 400 Bad Request: message is too long') {
        let zagolovokMassiv = zagolovok.split('\n\n');
        for (var iOtvetov = 0; iOtvetov < zagolovokMassiv.length; iOtvetov++) {
          if (iOtvetov != zagolovokMassiv.length - 1) {
            await sayMessageKeyboard(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}`);
          } else {
            await sayMessageKeyboard(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}\n${nameResourse}\n${linkArticle}`);
          }
        }
      }
    }
  } // конец for 68 строка
}


async function searchInArray(arrayStaroe, arrayNovoe) {
  let otvet1;
  let otvet = [];
  arrayNovoe.forEach((itemNovoeArray) => {
    let otvet1 = arrayStaroe.find((itemStaroeArray) => {
      return itemNovoeArray.zagolovok == itemStaroeArray.zagolovok;
    })
    if (otvet1 == undefined) {
      otvet.push(itemNovoeArray);
    }
  });
  return otvet;
}

async function sayPhoto(chatIdSay, urlPhoto) {
  await botTelegram.sendPhoto(chatIdSay, urlPhoto);
}

async function sayMessageDefault(chatIdSay, messageSay) {
  await botTelegram.sendMessage(chatIdSay, messageSay, {disable_web_page_preview: true});
}

async function sayMessageKeyboard(chatIdSay, messageSay) {
  let options = { // кнопка под сообщением
      disable_web_page_preview: true,
      reply_markup: {
          inline_keyboard: [
              [
                {
                      text          : 'Утвердить статью',
                      callback_data : 'Утверждение статьи'
                }
              ]
          ]
      }
  };
  await botTelegram.sendMessage(chatIdSay, messageSay, options);
}


botTelegram.on('callback_query', async function (msg) {
  let textArticle   = msg.message.text;
  let articlesParts = textArticle.split('\n')
  await sayPhoto(chatIdChanelNews, articlesParts[articlesParts.length - 1]);
  await sayMessageDefault(chatIdChanelNews, textArticle);
});
