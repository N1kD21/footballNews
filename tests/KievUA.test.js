'use strict';

const zapit = require('../lib/KievUA.js');

test('the data is peanut butter', async () => {
    await expect(zapit({
        source: { 
            name: "Valera Loh"
        },
        url: 'https://dynamo.kiev.ua/uk/news/435033-brytanske-vydannia-liverpool-echo-pro-hru-mykolenka-proty-manchester-siti'
    })).resolves.toStrictEqual({
        nameResourse: "Valera Loh",
        author: undefined,
        zagolovok: "Британське видання Liverpool Echo — про гру Миколенка проти «Манчестер Сіті»",
        linkArticle: 'https://dynamo.kiev.ua/uk/news/435033-brytanske-vydannia-liverpool-echo-pro-hru-mykolenka-proty-manchester-siti',
        immageUrl: 'https://dynamo.kiev.ua/media/posts/2023/01/01/7_1.jpg',
        dataPublished: undefined
      });
});
  
