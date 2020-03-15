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
//    res.sendFile(path.join(__dirname + '/index.html'));
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
const token             = '716536032:AAF679qSXFEjD3swXRKINrdgUYfoAysOLpc';
const chatIdChanelNews  = '-1001382295148';
let counter             = 0;
let bufer               = [];

const botTelegram = new TelegramBot(token, {polling: true});
botTelegram.onText(/(.+)/, async (msg) => {
  const chatId          = msg.chat.id;
  //google news api
  let otvetGoogleNewsAPI = await zaprosFootballNews();
  vivodGoogleNews(otvetGoogleNewsAPI, chatId);
  bufer = otvetGoogleNewsAPI;
});

setInterval(async () => {
  let otvetGoogleNewsApiInteval = await zaprosFootballNews();
  if (counter == 0) {
    vivodGoogleNews(otvetGoogleNewsApiInteval, chatIdChanelNews);
    bufer = otvetGoogleNewsApiInteval;
    counter++;
  } else {
    let otvetGoogleNewsApiIntevalFilter = await searchInArray(bufer, otvetGoogleNewsApiInteval);
    if (otvetGoogleNewsApiIntevalFilter.length != 0) {
      vivodGoogleNews(otvetGoogleNewsApiIntevalFilter, chatIdChanelNews);
      bufer = otvetGoogleNewsApiIntevalFilter;
    }
  }
}, 7200000);


async function vivodGoogleNews(array, chatIdGoogle) {
  let image         = '';
  let zagolovok     = '';
  let nameResourse  = '';
  let linkArticle   = '';
  for (var i = 0; i < array.length; i++) {
    if (array[i].image !== null || array[i].image !== undefined)                image = array[i].image;
    if (array[i].zagolovok !== null || array[i].zagolovok !== undefined)        zagolovok = array[i].zagolovok;
    if (array[i].nameResourse !== null || array[i].nameResourse !== undefined)  nameResourse = array[i].nameResourse;
    if (array[i].linkArticle !== null || array[i].linkArticle !== undefined)    linkArticle = array[i].linkArticle;
    await sayMessage(chatIdGoogle, `${array[i].immageUrl}\n${array[i].zagolovok}\n${array[i].nameResourse}\n${array[i].linkArticle}`);
  }
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
  botTelegram.sendPhoto(chatIdSay, urlPhoto);
}

async function sayMessage(chatIdSay, messageSay) {
  botTelegram.sendMessage(chatIdSay, messageSay);
}

botTelegram.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log('100. msg >>> ', msg);
});
