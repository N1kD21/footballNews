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
const token               = '';
const chatIdChanelNews    = '-';
const chatIdChanelModer   = '';
const chatIdChanelModer2  = '';
let counter               = 0;
let bufer                 = [];

const botTelegram = new TelegramBot(token, {polling: true});
botTelegram.onText(/(.+)/, async (msg) => {
  const chatId          = msg.chat.id;
  console.log('41. msg >>> ', msg);
  //google news api
  let otvetGoogleNewsAPI = await zaprosFootballNews();
  if (chatId != chatIdChanelModer) {
    vivodGoogleNews(otvetGoogleNewsAPI, chatId)
  } else {
    vivodGoogleNewsM(otvetGoogleNewsAPI, chatIdChanelModer);
  }
  bufer.push(otvetGoogleNewsAPI);
});

setInterval(otvetInChannel, 7200000);
setInterval(() => {
  bufer = [];
}, 86400000);

otvetInChannel()

async function otvetInChannel() {
  let massivCountry           = ['ua', 'ru'];
  let upravlenieMassiv        = [];
  let upravlenieMassivFilter  = [];
//  let otvetGoogleNewsApiInteval = await zaprosFootballNews();
  let otvetGoogleNewsApi  = await Promise.all(massivCountry.map(zaprosFootballNews));
  console.log('66. otvetGoogleNewsApi >>> ', otvetGoogleNewsApi);
  let otvetGoogleNewsApiInteval = otvetGoogleNewsApi[0].concat(otvetGoogleNewsApi[1]);
  if (counter == 0) {
    upravlenieMassiv = [{otvet: otvetGoogleNewsApiInteval, chatId: chatIdChanelModer}, {otvet: otvetGoogleNewsApiInteval, chatId: chatIdChanelModer2}]
    Promise.all(upravlenieMassiv.map(vivodGoogleNewsM))
    bufer.push(otvetGoogleNewsApiInteval);
    counter++;
  } else {
    let otvetGoogleNewsApiIntevalFilter = await searchInArray(bufer, otvetGoogleNewsApiInteval);
    if (otvetGoogleNewsApiIntevalFilter.length != 0) {
      upravlenieMassivFilter = [{otvet: otvetGoogleNewsApiIntevalFilter, chatId: chatIdChanelModer}, {otvet: otvetGoogleNewsApiIntevalFilter, chatId: chatIdChanelModer2}]
      Promise.all(upravlenieMassivFilter.map(vivodGoogleNewsM))
      bufer.push(otvetGoogleNewsApiIntevalFilter);
    }
  }
}

async function vivodGoogleNewsM(object) {
  let array         = object.otvet;
  let chatIdGoogle  = object.chatId;
  let image         = '';
  let zagolovok     = '';
  let nameResourse  = '';
  let linkArticle   = '';
  for (var i = 0; i < array.length; i++) {
    if (array[i].error == undefined) {
      if (array[i].immageUrl !== null || array[i].immageUrl !== undefined)        immage = array[i].immageUrl;
      if (array[i].zagolovok !== null || array[i].zagolovok !== undefined)        zagolovok = array[i].zagolovok;
      if (array[i].nameResourse !== null || array[i].nameResourse !== undefined)  nameResourse = array[i].nameResourse;
      if (array[i].linkArticle !== null || array[i].linkArticle !== undefined)    linkArticle = array[i].linkArticle;
      if (`${zagolovok}\n${nameResourse}\n${linkArticle}`.length < 1025) {
        await sayPhotoKeyboard(chatIdGoogle, immage, {caption: `${zagolovok}\n${nameResourse}\n${linkArticle}`});
      } else {
        let zagolovokMassiv = zagolovok.split('\n\n');
        if (zagolovokMassiv.length == 1) {
          await sayPhotoDefault(chatIdGoogle, immage);
          await sayMessageKeyboard(chatIdGoogle, `${zagolovok}\n${nameResourse}\n${linkArticle}`);
        } else {
          for (var iOtvetov = 0; iOtvetov < zagolovokMassiv.length; iOtvetov++) {
            switch (iOtvetov) {
              case 0:
              try {
                await sayPhotoKeyboard(chatIdGoogle, immage, {caption: `${zagolovokMassiv[iOtvetov]}`});
              } catch (error)  {
                if (error.message == 'ETELEGRAM: 400 Bad Request: MEDIA_CAPTION_TOO_LONG') {
                  await sayPhotoDefault(chatIdGoogle, immage);
                  await sayMessageKeyboard(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}`);
                }
              }
                break;
              case zagolovokMassiv.length - 1:
              await sayMessageKeyboard(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}\n${nameResourse}\n${linkArticle}`);
                break;
              default:
              await sayMessageKeyboard(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}`);
            }
          }
        }
      }
    } else {
      await sayMessageDefault(chatIdGoogle, 'Запрос к Google News API небыл успешен. Мы решаем данную проблему.')
    }
  } // конец for 68 строка
}

async function vivodGoogleNews(array, chatIdGoogle) {
  let image         = '';
  let zagolovok     = '';
  let nameResourse  = '';
  let linkArticle   = '';
  for (var i = 0; i < array.length; i++) {
    if (array[i].error == undefined) {
      if (array[i].immageUrl !== null || array[i].immageUrl !== undefined)        immage = array[i].immageUrl;
      if (array[i].zagolovok !== null || array[i].zagolovok !== undefined)        zagolovok = array[i].zagolovok;
      if (array[i].nameResourse !== null || array[i].nameResourse !== undefined)  nameResourse = array[i].nameResourse;
      if (array[i].linkArticle !== null || array[i].linkArticle !== undefined)    linkArticle = array[i].linkArticle;
      if (`${zagolovok}\n${nameResourse}\n${linkArticle}`.length < 1024) {
        await sayPhotoDefault(chatIdGoogle, immage, {caption: `${zagolovok}\n${nameResourse}\n${linkArticle}`});
      } else {
        let zagolovokMassiv = zagolovok.split('\n\n');
        if (zagolovokMassiv.length == 1) {
          await sayPhotoDefault(chatIdGoogle, immage);
          await sayMessageDefault(chatIdGoogle, `${zagolovok}\n${nameResourse}\n${linkArticle}`);
        } else {
          for (var iOtvetov = 0; iOtvetov < zagolovokMassiv.length; iOtvetov++) {
            switch (iOtvetov) {
              case 0:
              try {
                await sayPhotoDefault(chatIdGoogle, immage, {caption: `${zagolovokMassiv[iOtvetov]}`});
              } catch (error)  {
                if (error.message == 'ETELEGRAM: 400 Bad Request: MEDIA_CAPTION_TOO_LONG') {
                  await sayPhotoDefault(chatIdGoogle, immage);
                  await sayMessageDefault(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}`);
                }
              }
                break;
              case zagolovokMassiv.length - 1:
              await sayMessageDefault(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}\n${nameResourse}\n${linkArticle}`);
                break;
              default:
              await sayMessageDefault(chatIdGoogle, `${zagolovokMassiv[iOtvetov]}`);
            }
          }
        }
      }
    } else {
      await sayMessageDefault(chatIdGoogle, 'Запрос к Google News API небыл успешен. Мы решаем данную проблему.')
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

async function sayPhotoDefault(chatIdSay, urlPhoto, options) {
  if (options == undefined) {
    options = {}
  } else {
    options = {
      caption: options.caption
    }
  }
  await botTelegram.sendPhoto(chatIdSay, urlPhoto, options);
}

async function sayPhotoKeyboard(chatIdSay, urlPhoto, options) {
  if (options == undefined) {
    options = {};
  } else {
    options = {
      caption: options.caption,
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
    }
  }
  await botTelegram.sendPhoto(chatIdSay, urlPhoto, options);
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
  if (textArticle != undefined) {
    let poiskHttp     = textArticle.search('http');
    if (poiskHttp == -1) {
      await sayMessageDefault(chatIdChanelNews, textArticle);
    } else {
      let articlesParts = textArticle.split('\n')
      await sayPhotoDefault(chatIdChanelNews, articlesParts[articlesParts.length - 1]);
      await sayMessageDefault(chatIdChanelNews, textArticle);
    }
  } else {
    let captionArticle  = msg.message.caption;
    let articlesParts   = captionArticle.split('\n')
    await sayPhotoDefault(chatIdChanelNews, articlesParts[articlesParts.length - 1], {caption: captionArticle});
  }
});
