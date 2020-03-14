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
  const API_KEY_GOOGLE      = '6f06874cc0a64418a5f03728e3c6744f';
  let urlGoogleNews         = 'http://newsapi.org/v2/top-headlines?country=ua&category=sports&apiKey=' + API_KEY_GOOGLE;
  let dani_na_povernennia   = [];
  return new Promise(async function (resolve, reject) {
    let otvetGoogleNewsAPI  = await fetchFootballNews(urlGoogleNews);
    for (var iArticles = 0; iArticles < otvetGoogleNewsAPI.articles.length; iArticles++) {
      let elementMassivu    = otvetGoogleNewsAPI.articles[iArticles];

      let nameResourse      = elementMassivu.source.name;
      let otvetResourse     = elementMassivu.title;
      let authorResourse    = elementMassivu.author;
      let linkResourse      = elementMassivu.url;
      let linkImgResourse   = elementMassivu.urlToImage;
      let datePublResourse  = elementMassivu.publishedAt;

      if (nameResourse == 'Football24.ua' || nameResourse == 'football24.ua') {
        otvetResourse = await zapitDoFootball24UA(elementMassivu.url);
      }
      dani_na_povernennia.push({
        nameResourse  : nameResourse,
        author        : authorResourse,
        zagolovok     : otvetResourse,
        linkArticle   : linkResourse,
        immageUrl     : linkImgResourse,
        dataPublished : datePublResourse
      })
    }
    resolve(dani_na_povernennia);
  });
}

module.exports = zaprosFootballNews;
