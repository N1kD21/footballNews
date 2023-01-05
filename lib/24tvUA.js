'use strict';

const fetch    = require('node-fetch');
const jsdom    = require('jsdom');
const { JSDOM } = jsdom;


async function fetch24tvUA(urlFetch) {
  return new Promise((resolve, reject) => {
    fetch(urlFetch)
      .then((res) => res.text())
      .then((body) => resolve(body))
      .catch((err) => reject(err));
  });
}

async function zapitDo24tvUA(element) {
  const html24tvUA  = await fetch24tvUA(element.url);
  const document = (new JSDOM(`${html24tvUA}`)).window.document;

  const stringTitle = `${document.querySelector('.article-title').textContent} \n ${document.querySelector('.news-annotation').textContent}`;
  const stringIMG = document.querySelector(".main-news-photo").src;
 
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

module.exports = zapitDo24tvUA;
