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
  let resultVideoYoutube    = [];
  let part                  = 'snippet';
  let maxResults            = '25';
  let type                  = 'video';
  let encodeText4Poisk      = encodeURIComponent(text4Poisk);
  let urlYoutubeSearchList  = `https://www.googleapis.com/youtube/v3/search?type${type}&part=${part}&maxResults=${maxResults}&q=${encodeText4Poisk}&key=${API_KEY_GOOGLE}`;
  let resultYoutube         = await fetchYoutubeApi(urlYoutubeSearchList);
  resultYoutube.items.forEach(async (item, i) => {
    if (item.id.videoId != undefined) {
      resultVideoYoutube.push({
        urlVideo : 'https://youtu.be/' + item.id.videoId,
        title    : item.snippet.title,
        urlPhoto : item.snippet.thumbnails.default.url
      })
    }
  });
  return resultVideoYoutube;
}
module.exports = zaprosYoutubeApi;
