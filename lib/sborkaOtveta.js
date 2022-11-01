'use strict';
const zapitDoFootball24UA   = require('./football24UA.js');
const zapitDo24tvUA         = require('./24tvUA.js');
const bot4Errors            = require('./bot4Errors.js');


const routing = async (otvetGoogleNewsAPI) => {
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
        if (nameResourse === null || elementMassivu.title === null ||
        elementMassivu.url === null || elementMassivu.urlToImage === null) {
          bot4Errors(elementMassivu);
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
    const daniNaPovernennia   = allAnotherArticles.concat(resultsFootball24UA, results24tvUA);
    return daniNaPovernennia;
  } else {
    const daniNaPovernennia = [{
      error: true,
    }];
    return daniNaPovernennia;
  }
};


module.exports = routing;
