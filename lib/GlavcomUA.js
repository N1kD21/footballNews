'use strict';

const fetch    = require('node-fetch');
const jsdom    = require('jsdom');
const { JSDOM } = jsdom;


async function fetchGlavcomUA(urlFetch) {
  return new Promise((resolve, reject) => {
    fetch(urlFetch)
      .then((res) => res.text())
      .then((body) => resolve(body))
      .catch((err) => reject(err));
  });
}

async function zapitDoGlavcomUA(element) {
  const htmlGlavcomUA  = await fetchGlavcomUA(element.url);
  const document = (new JSDOM(`${htmlGlavcomUA}`)).window.document;

  const stringTitle = `${document.querySelector('.post_title').textContent} \n ${document.querySelector('.post_subtitle').textContent}`;
  //console.log('25. GlavcomUANew', stringTitle);

  const htmlIMG = document.querySelector(".post_img").innerHTML;
  const documentIMG = (new JSDOM(`${htmlIMG}`)).window.document;
  const stringIMG = 'https://glavcom.ua' + documentIMG.querySelector("img").src;
  //console.log('27. GlavcomUA_New', stringIMG);
 
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

module.exports = zapitDoGlavcomUA;
