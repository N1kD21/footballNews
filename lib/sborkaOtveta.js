/* eslint-disable max-len */
'use strict';
//const zapitDoFootball24UA   = require('./football24UA.js');
const zapitDo24tvUA         = require('./24tvUA.js');
const zapitDoSportUA        = require('./sportUA.js');
const zapitDoUaFootball     = require('./UAFootball.js');
//const zapitDoSportnews      = require('./Sportnews.js');
const zapitDoGlavcomUA      = require('./GlavcomUA.js');
const zapitDoGoogleNews     = require('./GoogleNews.js');
const zapitDoKievUA         = require('./KievUA.js');

const bot4Errors            = require('./bot4Errors.js');
//const checkLinkPhoto        = require('./checkLinkPhoto.js');

const routing = async (otvetGoogleNewsAPI) => {
  if (otvetGoogleNewsAPI.status === 'ok') {
    const allArticlesFootball24UA = [];
    const allArticles24TVUA       = [];
    const allArticlesSportUA      = [];
    const allArticlesUaFootball   = [];
    const allArticlesSportnews    = [];
    const allArticlesGlavcomUA    = [];
    const allArticlesGoogleNews   = [];
    const allArticlesKievUA       = [];

    const allAnotherArticles      = [];
    for (let i = 0; i < otvetGoogleNewsAPI.articles.length; i++) {
      const elementMassivu    = otvetGoogleNewsAPI.articles[i];
      const nameResourse      = elementMassivu.source.name;
      switch (nameResourse.toLowerCase()) {
      case '24tv.ua'.toLowerCase():
        allArticles24TVUA.push(elementMassivu);
        break;
      case 'football24.ua'.toLowerCase():
        allArticlesFootball24UA.push(elementMassivu);
        break;
      case 'Sport.ua'.toLowerCase():
        allArticlesSportUA.push(elementMassivu);
        break;
      case 'Ua-football.com'.toLowerCase():
        allArticlesUaFootball.push(elementMassivu);
        break;
      case 'Sportnews.com.ua'.toLowerCase():
        allArticlesSportnews.push(elementMassivu);
        break;
      case 'Glavcom.ua'.toLowerCase():
        allArticlesGlavcomUA.push(elementMassivu);
        break;
      case 'Google News'.toLowerCase():
        allArticlesGoogleNews.push(elementMassivu);
        break;
      case 'Kiev.ua'.toLowerCase():
        allArticlesKievUA.push(elementMassivu);
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
    //const resultsFootball24UA = await Promise.all(allArticlesFootball24UA.map(zapitDoFootball24UA));
    const resultsSportUA      = await Promise.all(allArticlesSportUA.map(zapitDoSportUA));
    const resultsUaFootball   = await Promise.all(allArticlesUaFootball.map(zapitDoUaFootball));
    //const resultsSportnews    = await Promise.all(allArticlesSportnews.map(zapitDoSportnews));
    const resultsGlavcomUA    = await Promise.all(allArticlesGlavcomUA.map(zapitDoGlavcomUA));
    const resultsKievUA       = await Promise.all(allArticlesKievUA.map(zapitDoKievUA));
    const resultsGoogleNews   = await Promise.all(allArticlesGoogleNews.map(zapitDoGoogleNews));
    console.log(resultsGoogleNews);
    let res = [];
    if (resultsGoogleNews.length !== 0) {
      res = await routing({
        status: 'ok',
        articles: resultsGoogleNews,
      });
    }
    const daniNaPovernennia   = allAnotherArticles.concat(results24tvUA, resultsSportUA, resultsUaFootball, resultsGlavcomUA, resultsKievUA, res);
    return daniNaPovernennia;
  } else {
    const daniNaPovernennia = [{
      error: true,
    }];
    return daniNaPovernennia;
  }
};


module.exports = routing;
