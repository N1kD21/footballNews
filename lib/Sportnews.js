'use strict';

const fetch    = require('node-fetch');
const jsdom    = require('jsdom');
const { JSDOM } = jsdom;


async function fetchSportnews(urlFetch) {
  return new Promise((resolve, reject) => {
    fetch(urlFetch)
      .then((res) => res.text())
      .then((body) => resolve(body))
      .catch((err) => reject(err));
  });
}

async function zapitDoSportnews(element) {
  console.log('17 Sportnews_New');
  const htmlSportnews  = await fetchSportnews(element.url);
  const document = (new JSDOM(`${htmlSportnews}`)).window.document;

  const stringTitle = `${document.querySelector('.post-heading').textContent} `;
  //console.log('25. SportnewsNew', stringTitle);
  //console.log('26. Sportnews_New', document.querySelector(".news-annotation").textContent);
  
  //console.log('27. Sportnews_New', document.querySelector(".news-v-main-img-wrap").innerHTML);
  const stringIMG = document.querySelector(".alignnone.size-full.wp-image-28546").src;
  //console.log('27. Sportnews_New', stringIMG);
 
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

module.exports = zapitDoSportnews;
