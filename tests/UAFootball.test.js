'use strict';

const zapit = require('../lib/UAFootball.js');

test('the data is peanut butter', async () => {
    await expect(zapit({
        source: { 
            name: "Valera Loh"
        },
        url: 'https://www.ua-football.com/ua/foreign/newscommon/1672632173-situaciya-z-petrakovim-dosyagnennya-dovbika-persha-porazka-pszh-golovni-novini-za-1-sichnya.html'
    })).resolves.toStrictEqual({
        nameResourse: "Valera Loh",
        author: undefined,
        zagolovok: "Ситуація з Петраковим, досягнення Довбика, перша поразка ПСЖ. Головні новини за 1 січня \n А також інсайди по Мудрику, відданість Модріча та осічка Челсі",
        linkArticle: 'https://www.ua-football.com/ua/foreign/newscommon/1672632173-situaciya-z-petrakovim-dosyagnennya-dovbika-persha-porazka-pszh-golovni-novini-za-1-sichnya.html',
        immageUrl: 'https://static.ua-football.com/img/upload/21/2a29cd.jpeg',
        dataPublished: undefined
      });
});
  
