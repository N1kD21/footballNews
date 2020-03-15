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
  console.log('67. array >>> ', array);
  for (var i = 0; i < array.length; i++) {
    if (array[i].immageUrl !== null || array[i].immageUrl !== undefined)        immage = array[i].immageUrl;
    if (array[i].zagolovok !== null || array[i].zagolovok !== undefined)        zagolovok = array[i].zagolovok;
    if (array[i].nameResourse !== null || array[i].nameResourse !== undefined)  nameResourse = array[i].nameResourse;
    if (array[i].linkArticle !== null || array[i].linkArticle !== undefined)    linkArticle = array[i].linkArticle;
    await sayPhoto(chatIdGoogle, immage);

    try {
      await sayMessage(chatIdGoogle, `${zagolovok}\n${nameResourse}\n${linkArticle}`, {disable_web_page_preview: true});
    } catch (err) {
      console.log('95. err.message ', err.message);
      if (err.message == 'ETELEGRAM: 400 Bad Request: message is too long') {
        let zagolovokMassiv = zagolovok.split('\n\n');
        for (var iOtvetov = 0; iOtvetov < zagolovokMassiv.length; iOtvetov++) {
          if (iOtvetov != zagolovokMassiv.length - 1) {
            await sayMessage(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}`)
          } else {
            await sayMessage(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}\n${nameResourse}\n${linkArticle}`, {disable_web_page_preview: true})
          }
        }
      }
    }
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
  await botTelegram.sendPhoto(chatIdSay, urlPhoto);
}

async function sayMessage(chatIdSay, messageSay, options) {
  if (options == undefined) options = {};
  await botTelegram.sendMessage(chatIdSay, messageSay, options);
}

botTelegram.on('message', async (msg) => {
  const chatId = msg.chat.id;
  console.log('100. msg >>> ', msg);
/*
  let zagolovok     = 'Наставник Байєра Петер Бос змирився з майбутньою втратою свого основного таланта Кая Хаверца.\n"Каю 20 років, але це вже його четвертий сезон в Бундеслізі. Це говорить багато про що. Всі в Німеччині вважають його вундеркіндом. З ним приємно працювати, він розумний. Він також грає на піаніно.\nМи продали його приятеля Юліана Брандта дортмундській Борусії минулого літа. Хаверц раптово став ще більш привабливим для інших клубів.\nМи не зможемо зберегти його до наступного літа. Це буде трансфер на 100 млн євро", – цитує Боса Algemeen Dagblad.\nПретендентами на німецького таланта ЗМІ називають Ліверпуль та Баварію. У нинішньому сезоні Бундесліги Хаверц провів 22 матчі, у яких відзначився 6-ма голами та 5-ма асистами.';
  let nameResourse  = 'Football24.ua';
  let linkArticle   = 'https://football24.ua/haverts_pokine_bayyer_vlitku_tse_bude_transfer_na_100_mln_yevro__nastavnik_farmatsevtiv_bos_n591391/';
  await sayPhoto(chatId, 'https://football24.ua/resources/photos/news/600x315_DIR/202003/591391.jpg');
  await sayMessage(chatId, `${zagolovok}\n${nameResourse}\n${linkArticle}`, {disable_web_page_preview: true})
*/
});
