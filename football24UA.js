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


async function zapitDoFootball24UA(url) {
  console.log('17');
  let htmlFootball24UA  = await fetchFootball24UA(url);
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
    resolve(stringFootball24UA);
  });
}

module.exports = zapitDoFootball24UA
