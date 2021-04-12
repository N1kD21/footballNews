'use strict';

const fetch                 = require('node-fetch');
const zapitDoFootball24UA   = require('./football24UA.js');
const zapitDo24tvUA         = require('./24tvUA.js');

const TelegramBot         = require('node-telegram-bot-api');
const token               = '1311938608:AAHqH-jmF44MqxCadJphcBfV2H6YBUbTuQA';
const chatIdErrorsChannel = '-1001370249186';
const botTelegram         = new TelegramBot(token, { polling: true });


async function fetchFootballNews(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json()) // expecting a json response
      .then((json) => resolve(json))
      .catch((err) => reject(err));
  });
}

async function zaprosFootballNews(country) {
  const start = new Date().getTime();
  console.log('18', start);
  const API_KEY_GOOGLE      = '6f06874cc0a64418a5f03728e3c6744f';
  const urlGoogleNews         = 'http://newsapi.org/v2/top-headlines?country=' + country + '&category=sports&apiKey=' + API_KEY_GOOGLE;
  //const daniNaPovernennia   = [];
  return new Promise(async (resolve, reject) => {
    const otvetGoogleNewsAPI      = await fetchFootballNews(urlGoogleNews);
    if (otvetGoogleNewsAPI.status === 'ok') {
      const allArticlesFootball24UA = [];
      const allArticles24TVUA       = [];
      const allAnotherArticles      = [];
      for (let i = 0; i < otvetGoogleNewsAPI.articles.length; i++) {
        const elementMassivu    = otvetGoogleNewsAPI.articles[i];
        const nameResourse      = elementMassivu.source.name;
        switch (nameResourse) {
        case '24tv.ua':
          allArticles24TVUA.push(elementMassivu);
          break;
        case 'football24.ua':
          allArticlesFootball24UA.push(elementMassivu);
          break;
        case 'Football24.ua':
          allArticlesFootball24UA.push(elementMassivu);
          break;
        default:
          if (nameResourse === '' || elementMassivu.title === '' || elementMassivu.url === '' ||
          elementMassivu.urlToImage === '' || nameResourse === null || elementMassivu.title === null ||
          elementMassivu.url === null || elementMassivu.urlToImage === null) {
            botTelegram.sendMessage(chatIdErrorsChannel, `nameResourse  : ${nameResourse},
            author        : ${elementMassivu.author},
            zagolovok     : ${elementMassivu.title},
            linkArticle   : ${elementMassivu.url},
            immageUrl     : ${elementMassivu.urlToImage},
            dataPublished : ${elementMassivu.publishedAt}`);
          } else {
            allAnotherArticles.push({
              nameResourse,
              author: elementMassivu.author,
              zagolovok: elementMassivu.title,
              linkArticle: elementMassivu.url,
              immageUrl: elementMassivu.urlToImage,
              dataPublished: elementMassivu.publishedAt
            });
          }
        }

      }
      const results24tvUA       = await Promise.all(allArticles24TVUA.map(zapitDo24tvUA));
      const resultsFootball24UA = await Promise.all(allArticlesFootball24UA.map(zapitDoFootball24UA));
      const daniNaPovernennia = allAnotherArticles.concat(resultsFootball24UA, results24tvUA);
      resolve(daniNaPovernennia);
    } else {
      const daniNaPovernennia = [{
        error: true,
      }];
      reject(daniNaPovernennia);
    }
  });
}

/*
(async() => {
  let vivod = await zaprosFootballNews('ua');
  console.log(vivod);
})()
*/
module.exports = zaprosFootballNews;
