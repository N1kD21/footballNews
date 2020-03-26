'use strict';

const fetch    = require('node-fetch');
const cheerio  = require('cheerio');


async function fetchEspresoTV(urlFetch) {
  return new Promise(function(resolve, reject) {
    fetch(urlFetch)
      .then(res => res.text())
      .then(body => resolve(body));
  });
}


async function zapitDofetchEspresoTV(element) {
  console.log('17 fetchEspresoTV');
  let htmlfetchEspresoTV  = await fetchEspresoTV('https://espreso.tv/news/2020/03/25/vlasnyk_legendarnogo_futbolnogo_klubu_vylikuvavsya_vid_koronavirusu');
  const $               = cheerio.load(htmlfetchEspresoTV, {decodeEntities: false})
  let vivodMassiv       = $('p')
  let massivTag         = [];
  let massivTagText     = [];
  let newArray          = [];

  vivodMassiv.each(function(indexElementaClassa) {
    let elementClassHtml              = $(this);
    massivTag[indexElementaClassa]    = $.html(elementClassHtml);
    if (massivTag[indexElementaClassa].startsWith('<p>') || massivTag[indexElementaClassa].startsWith('<p class="lead">')) {
      massivTagText.push($.text(elementClassHtml))
    }
  });
  for (var i = 0; i < massivTagText.length - 4; i++) {
    newArray.push(massivTagText[i])
  }
  return new Promise(function(resolve, reject) {
    let stringfetchEspresoTV = newArray.join('\n');
    let result = {
      nameResourse  : 'element.source.name',
      author        : 'element.author',
      zagolovok     : stringfetchEspresoTV,
      linkArticle   : 'element.url',
      immageUrl     : 'element.urlToImage',
      dataPublished : 'element.publishedAt'
    };
    console.log('45. result >>> ', result);
    resolve(result);
  });
};

zapitDofetchEspresoTV()
//module.exports = zapitDofetchEspresoTV
