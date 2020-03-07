'use strict';

const fetch         = require('node-fetch');

async function fetchFootballNews(url) {
  return new Promise(function(resolve, reject) {
    fetch(url)
        .then(res => res.json()) // expecting a json response
        .then(json => resolve(json));
  });
}


async function zaprosFootballNews(){
//
  let urlGoogleNews       = 'http://newsapi.org/v2/top-headlines?country=ua&category=sports&apiKey=' + API_KEY_GOOGLE;
  let dani_na_povernennia = [];
  return new Promise(async function (resolve, reject) {
    let otvetGoogleNewsAPI = await fetchFootballNews(urlGoogleNews);
    for (var iArticles = 0; iArticles < otvetGoogleNewsAPI.articles.length; iArticles++) {
      let elementMassivu = otvetGoogleNewsAPI.articles[iArticles];
      dani_na_povernennia.push({
        nameResourse  : elementMassivu.source.name,
        author        : elementMassivu.author,
        zagolovok     : elementMassivu.title,
        linkArticle   : elementMassivu.url,
        immageUrl     : elementMassivu.urlToImage,
        dataPublished : elementMassivu.publishedAt
      })
    }
    resolve(dani_na_povernennia);
  });
}

//zaprosFootballNews();

module.exports = zaprosFootballNews;
