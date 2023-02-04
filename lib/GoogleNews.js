'use strict';

const fetch    = require('node-fetch');
const jsdom    = require('jsdom');
const { JSDOM } = jsdom;


async function fetchGoogleNews(urlFetch) {
  return new Promise((resolve, reject) => {
    fetch(urlFetch)
      .then((res) => res.text())
      .then((body) => resolve(body))
      .catch((err) => reject(err));
  });
}

async function zapitDoGoogleNews(element) {
  const htmlGoogleNews  = await fetchGoogleNews(element.url);
  const document = (new JSDOM(`${htmlGoogleNews}`)).window.document;
  // News API now resolve his link about article
  const stringTitle = `${document.querySelector('a').textContent}`;
  /*
  Here returning a element with new link of article from news.api/
  After that we can call function sborkaOtveta recursively
  */
  element.url  = stringTitle;
  element.source.name = element.url.split('/')[2];
  return element;
}

module.exports = zapitDoGoogleNews;
