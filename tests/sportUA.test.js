'use strict';

const zapit = require('../lib/sportUA.js');


test('the data is peanut butter', async () => {
    await expect(zapit({
        source: { 
            name: "Valera Loh"
        },
        url: 'https://sport.ua/uk/news/609435-antonio-konte-eto-bezumie-tottenhemu-nuzhno-pokupat-igrokov-po-50-70-mln'
    })).resolves.toStrictEqual({
        nameResourse: "Valera Loh",
        author: undefined,
        zagolovok: "Антоніо КОНТЕ: Це божевілля. Тоттенхему треба купувати гравців по 50-70 млн \n Тренер вважає, що від команди забагато чекають",
        linkArticle: 'https://sport.ua/uk/news/609435-antonio-konte-eto-bezumie-tottenhemu-nuzhno-pokupat-igrokov-po-50-70-mln',
        immageUrl: 'https://pic.sport.ua/images/news/0/15/47/orig_609435.jpg',
        dataPublished: undefined
      });
});
  
