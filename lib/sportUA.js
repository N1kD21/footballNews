'use strict';

const fetch    = require('node-fetch');
const jsdom    = require('jsdom');
const { JSDOM } = jsdom;


async function fetchsportUA(urlFetch) {
  return new Promise((resolve, reject) => {
    fetch(urlFetch)
      .then((res) => res.text())
      .then((body) => resolve(body))
      .catch((err) => reject(err));
  });
}

async function zapitDosportUA(element) {
  const htmlsportUA  = await fetchsportUA(element.url);
  const document = (new JSDOM(`${htmlsportUA}`)).window.document;

  const stringTitle = `${document.querySelector('.news-v-title').textContent} \n ${document.querySelector('.news-v-subtitle').textContent}`;

  const stringIMG = document.querySelector(".news-v-main-img").src;
 
  return new Promise((resolve, reject) => {
    if (element === null || element === undefined) {
      reject('Error');
    } else {
      const result = {
        nameResourse: element.source.name,
        author: element.author,
        zagolovok: stringTitle,
        linkArticle: element.url,
        immageUrl: stringIMG,
        dataPublished: element.publishedAt
      };
      resolve(result);        
    };
  });
}

module.exports = zapitDosportUA;
