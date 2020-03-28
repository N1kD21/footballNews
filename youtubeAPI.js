'use strict';

const fetch           = require('node-fetch');
const API_KEY_GOOGLE  = 'AIzaSyB7x7BQqS3xFQIEmfbhRpFbjJYPqepqIHA';
async function fetchYoutubeApi(url) {
  return new Promise(function(resolve, reject) {
    fetch(url)
        .then(res => res.json()) // expecting a json response
        .then(json => resolve(json));
  });
}

async function zaprosYoutubeApi(text4Poisk) {
  let part              = 'snippet';
  let maxResults        = '25';
  let encodeText4Poisk  = encodeURIComponent(text4Poisk);
  let urlYoutubeSearchList = `https://www.googleapis.com/youtube/v3/search?part=${part}&maxResults=${maxResults}&q=${encodeText4Poisk}&key=${API_KEY_GOOGLE}`;
  console.log('17. urlYoutubeSearchList >>> ', urlYoutubeSearchList);
  let otvetYoutube    = await fetchYoutubeApi(urlYoutubeSearchList);
  console.log('19. otvetYoutube >>> ', otvetYoutube);
}

zaprosYoutubeApi('футбол')
