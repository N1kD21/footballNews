'use strict';

const zapitDo24UA = require('../lib/24tvUA.js');



test('the data is peanut butter', async () => {
    await expect(zapitDo24UA({
        source: { 
            name: "Valera Loh"
        },
        url: 'https://sport.24tv.ua/lomachenko-pidtrimav-upts-mp-reaktsiya-geraskevicha_n2228824'
    })).resolves.toStrictEqual({
        nameResourse: "Valera Loh",
        author: undefined,
        zagolovok: '"Ломаченко став слухняним чортеням у руках московського диявола": гучна заява Гераскевича \n Український скелетоніст в шоці від публікації Васілія на своїй сторінці в інстаграм. Гераскевич вважає, що Ломаченко працює на Росію.',
        linkArticle: 'https://sport.24tv.ua/lomachenko-pidtrimav-upts-mp-reaktsiya-geraskevicha_n2228824',
        immageUrl: 'https://sport.24tv.ua/resources/photos/news/202301/2228824.jpg?v=1672606187000',
        dataPublished: undefined
      });
  });
  
