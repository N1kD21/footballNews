'use strict';

const fetch    = require('node-fetch');
const cheerio  = require('cheerio');


async function fetchFootball24UA(urlFetch) {
  return new Promise(function(resolve, reject) {
    fetch(urlFetch)
      .then(res => res.text())
      .then(body => resolve(body));
  });
}


async function zapitDoFootball24UA(element) {
  console.log('17 football24UA');
  let htmlFootball24UA  = await fetchFootball24UA(element.url);
  const $               = cheerio.load(htmlFootball24UA, {decodeEntities: false})
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
    let stringFootball24UA = newArray.join('\n');
    if (element.source.name == '' || stringFootball24UA == '' || element.url == '' || element.urlToImage == '' || element.source.name == null || stringFootball24UA == null || element.url == null || element.urlToImage == null) {
      botTelegram.sendMessage(chatIdErrorsChannel, `nameResourse  : ${element.source.name},
      author        : ${element.author},
      zagolovok     : ${element.title},
      linkArticle   : ${element.url},
      immageUrl     : ${element.urlToImage},
      dataPublished : ${element.publishedAt}`);
      return;
    } else {
      let result = {
        nameResourse  : element.source.name,
        author        : element.author,
        zagolovok     : stringFootball24UA,
        linkArticle   : element.url,
        immageUrl     : element.urlToImage,
        dataPublished : element.publishedAt
      }
      resolve(result);
    }
  });
}

module.exports = zapitDoFootball24UA
