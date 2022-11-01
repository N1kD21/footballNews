'use strict';

const fetch    = require('node-fetch');
const cheerio  = require('cheerio');


async function fetchFootball24UA(urlFetch) {
  return new Promise((resolve, reject) => {
    fetch(urlFetch)
      .then((res) => res.text())
      .then((body) => resolve(body))
      .catch((err) => reject(err));
  });
}


async function zapitDoFootball24UA(element) {
  console.log('17 football24UA');
  const htmlFootball24UA  = await fetchFootball24UA(element.url);
  const $               = cheerio.load(htmlFootball24UA, { decodeEntities: false });
  const vivodMassiv       = $('p');
  const massivTag         = [];
  const massivTagText     = [];
  const newArray          = [];

  vivodMassiv.each(function(indexElementaClassa) {
    const elementClassHtml              = $(this);
    massivTag[indexElementaClassa]    = $.html(elementClassHtml);
    if (massivTag[indexElementaClassa].startsWith('<p>') ||
    massivTag[indexElementaClassa].startsWith('<p class="lead">')) {
      massivTagText.push($.text(elementClassHtml));
    }
  });
  for (let i = 0; i < massivTagText.length - 4; i++) {
    newArray.push(massivTagText[i]);
  }
  return new Promise((resolve, reject) => {
    const stringFootball24UA = newArray.join('\n');
    if (element.source.name === '' || stringFootball24UA === '' ||
    element.url === '' || element.urlToImage === '' || element.source.name === null ||
    stringFootball24UA === null || element.url === null || element.urlToImage === null) {
      /*
      botTelegram.sendMessage(chatIdErrorsChannel, `nameResourse  : ${element.source.name},
      author        : ${element.author},
      zagolovok     : ${element.title},
      linkArticle   : ${element.url},
      immageUrl     : ${element.urlToImage},
      dataPublished : ${element.publishedAt}`);
      return;
      */
      reject('Error');
    } else {
      const result = {
        nameResourse: element.source.name,
        author: element.author,
        zagolovok: stringFootball24UA,
        linkArticle: element.url,
        immageUrl: element.urlToImage,
        dataPublished: element.publishedAt
      };
      resolve(result);
    }
  });
}

module.exports = zapitDoFootball24UA;
