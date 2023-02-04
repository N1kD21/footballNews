/* eslint-disable no-undef */
'use strict';

const zapit = require('../lib/UAFootball.js');

test('the data is peanut butter', async () => {
  await expect(zapit({
    source: {
      name: 'Valera Loh'
    },
    url: 'https://www.ua-football.com/ua/foreign/newscommon/1672632173-situaciya-z-petrakovim-dosyagnennya-dovbika-persha-porazka-pszh-golovni-novini-za-1-sichnya.html'
  })).resolves.not.toStrictEqual({
    nameResourse: 'Valera Loh',
    author: undefined,
    // eslint-disable-next-line max-len
    zagolovok: ' \n ',
    linkArticle: undefined,
    immageUrl: undefined,
    dataPublished: undefined
  });
});

