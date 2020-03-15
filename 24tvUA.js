'use strict';

const fetch    = require('node-fetch');
const cheerio  = require('cheerio');

async function fetch24tvUA(urlFetch) {
  return new Promise(function(resolve, reject) {
    fetch(urlFetch)
      .then(res => res.text())
      .then(body => resolve(body));
  });
}

async function zapitDo24tvUA(element) {
  console.log('17 24tvUA');
  let html24tvUA        = await fetch24tvUA(element.url);
  const $               = cheerio.load(html24tvUA, {decodeEntities: false});

  let vivodMassiv       = $('p');
  let massivTag         = [];
  let massivTagText     = [];

  vivodMassiv.each(function(indexElementaClassa) {
    let elementClassHtml              = $(this);
    massivTag[indexElementaClassa]    = $.html(elementClassHtml);
    if (massivTag[indexElementaClassa].startsWith('<p id="newsAnnotation">')) {
      massivTagText.push($.text(elementClassHtml))
    }
  });

  return new Promise(function(resolve, reject) {
    let string24tvUA = element.title;
    if (massivTagText.length != 0) {
      let index = 0;
      if (massivTagText[0].startsWith('Про це повідомляє видання')) index = 1;
      string24tvUA = massivTagText[index];
    }
    let result = {
      nameResourse  : element.source.name,
      author        : element.author,
      zagolovok     : string24tvUA,
      linkArticle   : element.url,
      immageUrl     : element.urlToImage,
      dataPublished : element.publishedAt
    };
    resolve(result);
  });
}

module.exports = zapitDo24tvUA
