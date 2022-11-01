'use strict';

const fetch    = require('node-fetch');
const cheerio  = require('cheerio');

async function fetch24tvUA(urlFetch) {
  return new Promise((resolve, reject) => {
    fetch(urlFetch)
      .then((res) => res.text())
      .then((body) => resolve(body))
      .catch((err) => reject(err));
  });
}

async function zapitDo24tvUA(element) {
  console.log('17 24tvUA');
  const html24tvUA        = await fetch24tvUA(element.url);
  const $               = cheerio.load(html24tvUA, { decodeEntities: false });

  const vivodMassiv       = $('p');
  const massivTag         = [];
  const massivTagText     = [];

  vivodMassiv.each(function(indexElementaClassa) {
    const elementClassHtml              = $(this);
    massivTag[indexElementaClassa]    = $.html(elementClassHtml);
    if (massivTag[indexElementaClassa].startsWith('<p id="newsAnnotation">')) {
      massivTagText.push($.text(elementClassHtml));
    }
  });

  return new Promise((resolve, reject) => {
    let string24tvUA = element.title;
    if (massivTagText.length !== 0) {
      let index = 0;
      if (massivTagText[0].startsWith('Про це повідомляє видання')) index = 1;
      string24tvUA = massivTagText[index];
    }
    if (element.source.name === '' || string24tvUA === '' || element.url === '' ||
      element.urlToImage === '' || element.source.name === null || string24tvUA === null ||
      element.url === null || element.urlToImage === null) {
      /* Есть вопросы по этой части - откуда
      botTelegram.sendMessage(chatIdErrorsChannel, `nameResourse  : ${element.source.name},
      author        : ${elementMassivu.author},
      zagolovok     : ${elementMassivu.title},
      linkArticle   : ${elementMassivu.url},
      immageUrl     : ${elementMassivu.urlToImage},
      dataPublished : ${elementMassivu.publishedAt}`);
      return;
      */
      reject('Error');
    } else {
      const result = {
        nameResourse: element.source.name,
        author: element.author,
        zagolovok: string24tvUA,
        linkArticle: element.url,
        immageUrl: element.urlToImage,
        dataPublished: element.publishedAt
      };
      resolve(result);
    }
    //reject('Ошибка, контент не найден')
  });
}

module.exports = zapitDo24tvUA;
