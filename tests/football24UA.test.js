'use strict';

const zapitDoFootball24UA = require('../lib/football24UA.js');



test('the data is peanut butter', async () => {
    await expect(zapitDoFootball24UA({
        source: { 
            name: "Valera Loh"
        },
        url: 'https://sport.ua/uk/news/535455-po-oboyudnomu-soglasiyu-storon-shinder-pokinul-minay'
    })).resolves.toStrictEqual({
        nameResourse: "Valera Loh",
        author: undefined,
        zagolovok: 'За обопільною згодою сторін. Шиндер залишив Минай \n Форвард забив 3 голи за «Минай», який займає останнє місце в УПЛ',
        linkArticle: 'https://sport.ua/uk/news/535455-po-oboyudnomu-soglasiyu-storon-shinder-pokinul-minay',
        immageUrl: 'https://pic.sport.ua/images/news/0/13/77/orig_535455.jpg',
        dataPublished: undefined
      });
});
  
