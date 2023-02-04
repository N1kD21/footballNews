/* eslint-disable no-undef */
'use strict';

const zapit = require('../lib/GoogleNews.js');


test('the data is peanut butter', async () => {
  await expect(zapit({
    source: {
      name: 'Valera Loh'
    },
    url: 'https://news.google.com/rss/articles/CBMijAFodHRwczovL2R5bmFtby5raWV2LnVhL3VrL25ld3MvNDQzNTE0LXpodXJuYWxpc3QteWFybW9sZW5rby1pLXJlYnJvdi12ZWR1dC1wZXJlaG92b3J5LXNoY2hvZG8tZG9zdHJva292b2hvLXJvemlydmFubmlhLWtvbnRyYWt0aXYtei1hbC1haW5vbdIBAA'
  })).resolves.toStrictEqual({
    source: {
      name: 'dynamo.kiev.ua'
    },
    url: 'https://dynamo.kiev.ua/uk/news/443514-zhurnalist-yarmolenko-i-rebrov-vedut-perehovory-shchodo-dostrokovoho-rozirvannia-kontraktiv-z-al-ainom'
  });
});
