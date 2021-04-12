'use strict';

const fetch    = require('node-fetch');
const cheerio  = require('cheerio');


async function fetchEspresoTV(urlFetch) {
  return new Promise((resolve, reject) => {
    fetch(urlFetch)
      .then((res) => res.text())
      .then((body) => resolve(body))
      .catch((err) => reject(err));
  });
}


async function zapitDofetchEspresoTV() {
  console.log('17 fetchEspresoTV');
  const htmlfetchEspresoTV  = await fetchEspresoTV('https://espreso.tv/news/2020/03/25/vlasnyk_legendarnogo_futbolnogo_klubu_vylikuvavsya_vid_koronavirusu');
  const $               = cheerio.load(htmlfetchEspresoTV, { decodeEntities: false });
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
    const stringfetchEspresoTV = newArray.join('\n');
    if (newArray.length === 0) {
      reject('Error');
    }
    const result = {
      nameResourse: 'element.source.name',
      author: 'element.author',
      zagolovok: stringfetchEspresoTV,
      linkArticle: 'element.url',
      immageUrl: 'element.urlToImage',
      dataPublished: 'element.publishedAt'
    };
    console.log('45. result >>> ', result);
    resolve(result);
  });
}

zapitDofetchEspresoTV();
//module.exports = zapitDofetchEspresoTV
