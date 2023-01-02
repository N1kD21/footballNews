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
  console.log('17 GoogleNews_New');
  const htmlGoogleNews  = await fetchGoogleNews(element.url);
  console.log(htmlGoogleNews);
  const document = (new JSDOM(`${htmlGoogleNews}`)).window.document;

  const stringTitle = `${document.querySelector('div.news-block')} `;
  console.log('25. GoogleNewsNew', stringTitle);

  const htmlIMG = document.querySelector(".post_img").innerHTML;
  const documentIMG = (new JSDOM(`${htmlIMG}`)).window.document;
  const stringIMG = 'https://glavcom.ua/' + documentIMG.querySelector("img").src;
  //console.log('27. GoogleNews_New', stringIMG);
 
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

module.exports = zapitDoGoogleNews;
