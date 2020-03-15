'use strict';

const fetch                 = require('node-fetch');
const zapitDoFootball24UA   = require('./football24UA.js');


async function fetchFootballNews(url) {
  return new Promise(function(resolve, reject) {
    fetch(url)
        .then(res => res.json()) // expecting a json response
        .then(json => resolve(json));
  });
}

async function zaprosFootballNews(){
  const start = new Date().getTime();
  console.log('18', start);
  const API_KEY_GOOGLE      = '6f06874cc0a64418a5f03728e3c6744f';
  let urlGoogleNews         = 'http://newsapi.org/v2/top-headlines?country=ua&category=sports&apiKey=' + API_KEY_GOOGLE;
  let dani_na_povernennia   = [];
  return new Promise(async function (resolve, reject) {
    let otvetGoogleNewsAPI  = await fetchFootballNews(urlGoogleNews);
    let allArticlesFootball24UA = [];
    let allAnotherArticles = [];

    for (var i = 0; i < otvetGoogleNewsAPI.articles.length; i++) {
      let elementMassivu    = otvetGoogleNewsAPI.articles[i];
      let nameResourse      = elementMassivu.source.name;
      if (nameResourse == 'Football24.ua' || nameResourse == 'football24.ua') {
        allArticlesFootball24UA.push(elementMassivu);
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
    let resultsFootball24UA = await Promise.all(allArticlesFootball24UA.map(zapitDoFootball24UA));
    let dani_na_povernennia = allAnotherArticles.concat(resultsFootball24UA);
    resolve(dani_na_povernennia);
  });
}

//zaprosFootballNews()
module.exports = zaprosFootballNews;
