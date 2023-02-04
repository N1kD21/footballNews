/* eslint-disable max-len */
'use strict';

const fetch    = require('node-fetch');
const jsdom    = require('jsdom');
const { JSDOM } = jsdom;


async function fetchUAFootball(urlFetch) {
  return new Promise((resolve, reject) => {
    fetch(urlFetch)
      .then((res) => res.text())
      .then((body) => resolve(body))
      .catch((err) => reject(err));
  });
}

async function zapitDoUAFootball(element) {
  const htmlUAFootball  = await fetchUAFootball(element.url);
  const document = (new JSDOM(`${htmlUAFootball}`)).window.document;

  const stringTitle = `${document.querySelector('.show-h1').textContent} \n ${document.querySelector('.show-h2').textContent}`;
  console.log(stringTitle);
  const htmlIMG = document.querySelector('.show-img-con').innerHTML;
  const documentIMG = (new JSDOM(`${htmlIMG}`)).window.document;
  const stringIMG = documentIMG.querySelector('img').src;


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
    }
  });
}

module.exports = zapitDoUAFootball;
