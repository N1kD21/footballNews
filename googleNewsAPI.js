'use strict';

const fetch                 = require('node-fetch');
const zapitDoFootball24UA   = require('./football24UA.js');
const zapitDo24tvUA         = require('./24tvUA.js');

const TelegramBot         = require('node-telegram-bot-api');
const token               = '1311938608:AAHqH-jmF44MqxCadJphcBfV2H6YBUbTuQA';
const chatIdErrorsChannel = '-1001370249186';
const botTelegram         = new TelegramBot(token, {polling: true});


async function fetchFootballNews(url) {
  return new Promise(function(resolve, reject) {
    fetch(url)
        .then(res => res.json()) // expecting a json response
        .then(json => resolve(json));
  });
}

async function zaprosFootballNews(country){
  const start = new Date().getTime();
  console.log('18', start);
  const API_KEY_GOOGLE      = '6f06874cc0a64418a5f03728e3c6744f';
  let urlGoogleNews         = 'http://newsapi.org/v2/top-headlines?country=' + country + '&category=sports&apiKey=' + API_KEY_GOOGLE;
  let dani_na_povernennia   = [];
  return new Promise(async function (resolve, reject) {
    let otvetGoogleNewsAPI      = await fetchFootballNews(urlGoogleNews);
    if (otvetGoogleNewsAPI.status == 'ok') {
      let allArticlesFootball24UA = [];
      let allArticles24TVUA       = [];
      let allAnotherArticles      = [];
      for (var i = 0; i < otvetGoogleNewsAPI.articles.length; i++) {
        let elementMassivu    = otvetGoogleNewsAPI.articles[i];
        let nameResourse      = elementMassivu.source.name;
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
          if (nameResourse == '' || elementMassivu.title == '' || elementMassivu.url == '' || elementMassivu.urlToImage == '' || nameResourse == null ||elementMassivu.title == null || elementMassivu.url == null || elementMassivu.urlToImage == null) {
            botTelegram.sendMessage(chatIdErrorsChannel, `nameResourse  : ${nameResourse},
            author        : ${elementMassivu.author},
            zagolovok     : ${elementMassivu.title},
            linkArticle   : ${elementMassivu.url},
            immageUrl     : ${elementMassivu.urlToImage},
            dataPublished : ${elementMassivu.publishedAt}`);
            return;
          } else {
            allAnotherArticles.push({
              nameResourse  : nameResourse,
              author        : elementMassivu.author,
              zagolovok     : elementMassivu.title,
              linkArticle   : elementMassivu.url,
              immageUrl     : elementMassivu.urlToImage,
              dataPublished : elementMassivu.publishedAt
            })
          }
        }

      }
      let results24tvUA       = await Promise.all(allArticles24TVUA.map(zapitDo24tvUA));
      let resultsFootball24UA = await Promise.all(allArticlesFootball24UA.map(zapitDoFootball24UA));
      let dani_na_povernennia = allAnotherArticles.concat(resultsFootball24UA, results24tvUA);
      resolve(dani_na_povernennia);
    } else {
      let dani_na_povernennia = [{
        error: true,
      }];
      resolve(dani_na_povernennia);
    }
  });
}

//zaprosFootballNews();
module.exports = zaprosFootballNews;
