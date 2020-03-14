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
    for (var iArticles = 0; iArticles < otvetGoogleNewsAPI.articles.length; iArticles++) {
      let elementMassivu    = otvetGoogleNewsAPI.articles[iArticles];
      let nameResourse      = elementMassivu.source.name;

      if (nameResourse == 'Football24.ua' || nameResourse == 'football24.ua') {
        elementMassivu.title = await zapitDoFootball24UA(elementMassivu.url);
      }
      dani_na_povernennia.push({
        nameResourse  : nameResourse,
        author        : elementMassivu.author,
        zagolovok     : elementMassivu.title,
        linkArticle   : elementMassivu.url,
        immageUrl     : elementMassivu.urlToImage,
        dataPublished : elementMassivu.publishedAt
      })
    }
/*
    async function processArray(array) {
      let result = [];
      array.forEach(async (itemElementMassivu) => {
        let nameResourse      = itemElementMassivu.source.name;
        if (nameResourse == 'Football24.ua' || nameResourse == 'football24.ua') {
          itemElementMassivu.title = await zapitDoFootball24UA(itemElementMassivu.url);
        }
        result.push({
          nameResourse  : nameResourse,
          author        : itemElementMassivu.author,
          zagolovok     : itemElementMassivu.title,
          linkArticle   : itemElementMassivu.url,
          immageUrl     : itemElementMassivu.urlToImage,
          dataPublished : itemElementMassivu.publishedAt
        })
      });
      return new Promise(function(resolve, reject) {
        resolve(result)
      });
    }
    dani_na_povernennia = processArray(otvetGoogleNewsAPI.articles)
*/
    resolve(dani_na_povernennia);
  });
}

module.exports = zaprosFootballNews;
