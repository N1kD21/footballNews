'use strict';

const zapit = require('../lib/GlavcomUA.js');


test('the data is peanut butter', async () => {
    await expect(zapit({
        source: { 
            name: "Valera Loh"
        },
        url: 'https://glavcom.ua/sport/news/lomachenko-majbutnij-medvedchuk-nachalnik-shtabu-azov-vidreahuvav-na-dopis-boksera-899339.html'
    })).resolves.toStrictEqual({
        nameResourse: "Valera Loh",
        author: undefined,
        zagolovok: '«Ломаченко – майбутній Медведчук»: начальник штабу «Азов» відреагував на допис боксера \n Богдан Кротевич переконаний, що Василь Ломаченко принесе багато користі Україні, що стосується обмінного фонду з РФ',
        linkArticle: 'https://glavcom.ua/sport/news/lomachenko-majbutnij-medvedchuk-nachalnik-shtabu-azov-vidreahuvav-na-dopis-boksera-899339.html',
        immageUrl: 'https://glavcom.ua/img/article/8993/39_main-v1672613212.jpg',
        dataPublished: undefined
      });
});
  
