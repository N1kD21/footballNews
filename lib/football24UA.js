'use strict';

const fetch    = require('node-fetch');
const jsdom    = require('jsdom');
const { JSDOM } = jsdom;

async function fetchFootball24UA(urlFetch) {
  return new Promise((resolve, reject) => {
    fetch(urlFetch)
      .then((res) => res.text())
      .then((body) => resolve(body))
      .catch((err) => reject(err));
  });
}

async function zapitDoFootball24UA(element) {
  const htmlFootball24UA  = await fetchFootball24UA(element.url);
  console.log(htmlFootball24UA);
  const document = (new JSDOM(`${htmlFootball24UA}`)).window.document;

  //console.log('25. football24UA_New', document.querySelector(".news-v-title").textContent);
  //console.log('26. football24UA_New', document.querySelector(".news-v-subtitle").textContent);
  // eslint-disable-next-line max-len
  const stringTitle = `${document.querySelector('.news-title').textContent} \n ${document.querySelector('.lead').textContent}`;

  //console.log('27. football24UA_New', document.querySelector(".news-v-main-img-wrap").innerHTML);
  const htmlIMG = document.querySelector('.lazyload-holder').innerHTML;
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

module.exports = zapitDoFootball24UA;
