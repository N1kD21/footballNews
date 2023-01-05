'use strict';

const fetch    = require('node-fetch');
const jsdom    = require('jsdom');
const { JSDOM } = jsdom;


async function fetchKievUA(urlFetch) {
  return new Promise((resolve, reject) => {
    fetch(urlFetch)
      .then((res) => res.text())
      .then((body) => resolve(body))
      .catch((err) => reject(err));
  });
}

async function zapitDoKievUA(element) {
  const htmlKievUA  = await fetchKievUA(element.url);
  const document = (new JSDOM(`${htmlKievUA}`)).window.document;

  const stringTitle = document.querySelector('.normal-weight').textContent;

  const htmlIMG = document.querySelector(".nodeImg").innerHTML;
  const documentIMG = (new JSDOM(`${htmlIMG}`)).window.document;
  const stringIMG = 'https://dynamo.kiev.ua' + documentIMG.querySelector("img").src;
 
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

module.exports = zapitDoKievUA;
